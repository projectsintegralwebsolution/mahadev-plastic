import express, { Request, Response, NextFunction } from "express";
import next from "next";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { parse } from "url";
import { sendInquiryEmail } from "../src/lib/mailer";
import { validateAdminCredentials, signAuthToken, verifyAuthToken } from "../src/lib/auth";
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog, BlogItem } from "../src/lib/blogStorage";

// Load environment variables
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  product?: string;
  message: string;
}

// Helper to authenticate Express admin requests via header or cookie
function getAdminSession(req: Request) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const session = verifyAuthToken(authHeader.substring(7));
    if (session) return session;
  }
  const cookieHeader = req.headers.cookie;
  if (cookieHeader) {
    const match = cookieHeader.match(/admin_token=([^;]+)/);
    if (match && match[1]) {
      const session = verifyAuthToken(match[1]);
      if (session) return session;
    }
  }
  return null;
}

async function main() {
  try {
    await nextApp.prepare();
    const server = express();

    // Middlewares
    server.use(cors());
    server.use(express.json({ limit: "50mb" }));
    server.use(express.urlencoded({ extended: true, limit: "50mb" }));

    // Health check endpoint
    server.get("/api/health", (_req: Request, res: Response) => {
      res.json({
        status: "ok",
        company: "Mahadev Plastic",
        service: "Acrylic Sheet Manufacturer Backend",
        timestamp: new Date().toISOString(),
      });
    });

    // -------------------------------------------------------------------------
    // ADMIN AUTHENTICATION ENDPOINTS
    // -------------------------------------------------------------------------
    server.post("/api/admin/auth/login", (req: Request, res: Response) => {
      const { username, password } = req.body || {};
      if (!validateAdminCredentials(username, password)) {
        return res.status(401).json({ success: false, error: "Invalid username or password" });
      }

      const token = signAuthToken(username.trim());

      // Set cookie
      res.cookie("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({
        success: true,
        message: "Authentication successful",
        user: { username: username.trim(), role: "admin" },
        token,
      });
    });

    server.post("/api/admin/auth/logout", (_req: Request, res: Response) => {
      res.clearCookie("admin_token", { path: "/" });
      return res.json({ success: true, message: "Logged out successfully" });
    });

    server.get("/api/admin/auth/check", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ authenticated: false });
      }
      return res.json({ authenticated: true, user: { username: session.username, role: session.role } });
    });

    // -------------------------------------------------------------------------
    // ADMIN BLOG MANAGEMENT CRUD ENDPOINTS
    // -------------------------------------------------------------------------
    server.get("/api/admin/blogs", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
      }

      const statusFilter = req.query.status as string | undefined;
      const searchQuery = (req.query.q as string | undefined)?.toLowerCase();

      let blogs = getAllBlogs();

      if (statusFilter && ["draft", "published", "scheduled"].includes(statusFilter)) {
        blogs = blogs.filter((b) => b.status === statusFilter);
      }

      if (searchQuery) {
        blogs = blogs.filter(
          (b) =>
            b.title.toLowerCase().includes(searchQuery) ||
            b.slug.toLowerCase().includes(searchQuery) ||
            b.category.toLowerCase().includes(searchQuery) ||
            b.focusKeyword.toLowerCase().includes(searchQuery)
        );
      }

      return res.json({
        success: true,
        blogs,
        stats: {
          total: getAllBlogs().length,
          published: getAllBlogs().filter((b) => b.status === "published").length,
          scheduled: getAllBlogs().filter((b) => b.status === "scheduled").length,
          drafts: getAllBlogs().filter((b) => b.status === "draft").length,
        },
      });
    });

    server.post("/api/admin/blogs", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
      }

      const body = req.body || {};
      if (!body.title || !body.title.trim()) {
        return res.status(400).json({ success: false, error: "Blog title is required" });
      }
      if (!body.content || !body.content.trim()) {
        return res.status(400).json({ success: false, error: "Blog content is required" });
      }

      const blogData: Omit<BlogItem, "id" | "createdAt" | "updatedAt"> = {
        title: body.title.trim(),
        slug: body.slug ? body.slug.trim() : "",
        excerpt: body.excerpt ? body.excerpt.trim() : body.title.trim(),
        content: body.content,
        category: body.category?.trim() || "Technical Guide",
        tags: Array.isArray(body.tags)
          ? body.tags
          : typeof body.tags === "string"
          ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
          : [],
        author: body.author?.trim() || "Mahadev Plastic Editorial Team",
        readTime: body.readTime?.trim() || "",
        featuredImage: body.featuredImage?.trim() || "/images/Cast-Acrylic-Sheet.jpg",
        featuredImageAlt: body.featuredImageAlt?.trim() || body.title.trim(),
        status: body.status || "published",
        publishedAt: body.publishedAt || new Date().toISOString(),
        scheduledAt: body.scheduledAt || undefined,
        metaTitle: body.metaTitle?.trim() || `${body.title.trim()} | Mahadev Plastic`,
        metaDescription: body.metaDescription?.trim() || body.excerpt?.trim() || `${body.title.trim()} - Comprehensive guide by Mahadev Plastic.`,
        focusKeyword: body.focusKeyword?.trim() || body.title.trim(),
        supportiveKeywords: body.supportiveKeywords || {
          highVolume: [],
          mediumVolume: [],
          longTail: [],
        },
        canonicalUrl: body.canonicalUrl?.trim() || undefined,
        schemaType: body.schemaType || "BlogPosting",
        customSchema: body.customSchema?.trim() || undefined,
        faqs: Array.isArray(body.faqs) ? body.faqs : [],
      };

      const created = createBlog(blogData);
      return res.status(201).json({ success: true, message: "Blog created successfully", blog: created });
    });

    server.get("/api/admin/blogs/:id", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
      }
      const blog = getBlogById(req.params.id);
      if (!blog) {
        return res.status(404).json({ success: false, error: "Blog not found" });
      }
      return res.json({ success: true, blog });
    });

    server.put("/api/admin/blogs/:id", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
      }
      const existing = getBlogById(req.params.id);
      if (!existing) {
        return res.status(404).json({ success: false, error: "Blog not found" });
      }

      const body = req.body || {};
      const updated = updateBlog(req.params.id, {
        ...body,
        tags: Array.isArray(body.tags)
          ? body.tags
          : typeof body.tags === "string"
          ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
          : existing.tags,
      });

      if (!updated) {
        return res.status(500).json({ success: false, error: "Failed to update blog" });
      }
      return res.json({ success: true, message: "Blog updated successfully", blog: updated });
    });

    server.delete("/api/admin/blogs/:id", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
      }
      const deleted = deleteBlog(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: "Blog not found" });
      }
      return res.json({ success: true, message: "Blog deleted successfully" });
    });

    // -------------------------------------------------------------------------
    // IMAGE UPLOAD ENDPOINT (Base64 Support)
    // -------------------------------------------------------------------------
    server.post("/api/admin/upload", (req: Request, res: Response) => {
      const session = getAdminSession(req);
      if (!session) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
      }

      try {
        const { imageBase64, fileName } = req.body || {};
        if (!imageBase64) {
          return res.status(400).json({ success: false, error: "No image payload provided" });
        }

        const matches = imageBase64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        const buffer = matches ? Buffer.from(matches[2], "base64") : Buffer.from(imageBase64, "base64");

        const ext = path.extname(fileName || "image.jpg").toLowerCase() || ".jpg";
        const baseName = path
          .basename(fileName || "upload", ext)
          .toLowerCase()
          .replace(/[^a-z0-9_-]/g, "-")
          .slice(0, 50);

        const savedName = `${Date.now()}-${baseName}${ext}`;
        const uploadDir = path.join(process.cwd(), "public", "images", "blogs");

        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        fs.writeFileSync(path.join(uploadDir, savedName), buffer);
        const publicUrl = `/images/blogs/${savedName}`;

        return res.json({ success: true, url: publicUrl, fileName: savedName });
      } catch (err: any) {
        console.error("[Upload Error]:", err);
        return res.status(500).json({ success: false, error: err.message || "Failed to process image upload" });
      }
    });

    // -------------------------------------------------------------------------
    // FORM INQUIRY / CONTACT ENDPOINTS
    // -------------------------------------------------------------------------
    const handleInquiry = async (req: Request, res: Response) => {
      try {
        const { name, email, phone, product, message } = req.body as InquiryFormData;

        if (!name || !email || !phone || !message) {
          return res.status(400).json({
            success: false,
            error: "Please fill in all required fields: Name, Email, Phone, and Message.",
          });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({
            success: false,
            error: "Please provide a valid email address.",
          });
        }

        console.log(`[Express /api/inquiry] Received inquiry from ${name} (${email}, ${phone}) for product: ${product || "General"}`);

        // Dispatch 3 emails via Nodemailer
        const mailResult = await sendInquiryEmail({
          name,
          email,
          phone,
          product: product || "All Acrylic Sheets",
          message,
        });

        console.log("[Express /api/inquiry] Nodemailer Dispatch Status:", mailResult.details);

        return res.status(200).json({
          success: true,
          message: "Thank you for contacting Mahadev Plastic! Your inquiry has been received. A confirmation has been sent to your email, and our sales team will contact you shortly.",
          data: {
            name,
            email,
            phone,
            product: product || "All Acrylic Sheets",
            receivedAt: new Date().toISOString(),
            mailResult: mailResult.details,
          },
        });
      } catch (err: any) {
        console.error("[Express Inquiry Error]:", err);
        return res.status(500).json({
          success: false,
          error: "Failed to process inquiry. Please call us directly at +91 9987904482.",
        });
      }
    };

    server.post("/api/inquiry", handleInquiry);
    server.post("/api/contact", handleInquiry);

    // Serve static public assets
    server.use(express.static(path.join(process.cwd(), "public")));

    // Delegate all other routes to Next.js handler
    server.all("*", (req: Request, res: Response) => {
      const parsedUrl = parse(req.url, true);
      return handle(req, res, parsedUrl);
    });

    server.listen(port, "0.0.0.0", () => {
      console.log(`> Ready on http://${hostname}:${port}`);
      console.log(`> Mahadev Plastic Full-Stack App running (Next.js 14 + Node.js Express + Plain CSS)`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

main();
