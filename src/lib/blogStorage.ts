import fs from "fs";
import path from "path";

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface SupportiveKeywords {
  highVolume?: string[];
  mediumVolume?: string[];
  longTail?: string[];
}

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Rich HTML content with H1-H6, p, ul, ol, img, etc.
  category: string;
  tags: string[];
  author: string;
  readTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  
  // Status and Scheduling
  status: "draft" | "published" | "scheduled";
  publishedAt: string; // ISO Date string
  scheduledAt?: string; // ISO Date string for future scheduled publication
  createdAt: string;
  updatedAt: string;
  
  // Advanced SEO Fields
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  supportiveKeywords: SupportiveKeywords;
  canonicalUrl?: string;
  schemaType?: "BlogPosting" | "Article" | "TechArticle";
  customSchema?: string; // Custom JSON-LD schema string
  faqs?: BlogFaq[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const BLOGS_FILE = path.join(DATA_DIR, "blogs.json");

// Default seed blogs from the initial website data
const SEED_BLOGS: BlogItem[] = [
  {
    id: "blog-seed-1",
    slug: "cast-acrylic-vs-extruded-acrylic-sheets-understanding-the-key-differences",
    title: "Cast Acrylic vs Extruded Acrylic Sheets: Understanding the Key Differences",
    excerpt: "Learn the crucial differences in manufacturing, optical clarity, thermal tolerance, and machinability between cell cast and continuous extruded acrylic sheets.",
    content: `<h2>Understanding PMMA Polymer Manufacturing Methods</h2>
<p>When sourcing acrylic sheets for industrial, commercial, or creative applications, understanding the difference between Cast Acrylic and Extruded Acrylic is critical for selecting the right material.</p>
<h3>What is Cell Cast Acrylic?</h3>
<p>Cast Acrylic is produced using a batch cell-casting process where liquid methyl methacrylate monomer is poured between glass molds and slowly polymerized. This results in a higher molecular weight, superior optical clarity, greater chemical resistance, and cleaner laser cutting edges without melting or gumming.</p>
<h3>What is Continuous Extruded Acrylic?</h3>
<p>Extruded Acrylic, on the other hand, is continuously manufactured by feeding PMMA pellets through an extruder. While extruded sheets offer tighter thickness tolerances and cost efficiencies for large-scale thermoforming, they have lower thermal resistance and can craze when exposed to aggressive solvents.</p>
<h3>Machining and Fabrication Comparison</h3>
<p>For CNC routing, flame polishing, and laser engraving, cast acrylic delivers a frosted, high-contrast finish and razor-sharp edges. Extruded acrylic is easier to bend under heat but requires careful coolant application during high-speed machining to prevent chip re-welding.</p>
<p>At Mahadev Plastic, we help clients evaluate whether cast or extruded acrylic best meets their fabrication tolerances, thermal exposure, and optical requirements.</p>`,
    category: "Technical Guide",
    tags: ["Cast Acrylic", "Extruded Acrylic", "PMMA Guide", "Fabrication"],
    author: "Mahadev Plastic Technical Team",
    readTime: "5 min read",
    featuredImage: "/images/Cast-Acrylic-Sheet.jpg",
    featuredImageAlt: "Cast Acrylic vs Extruded Acrylic Sheet Comparison by Mahadev Plastic",
    status: "published",
    publishedAt: "2026-03-15T09:00:00.000Z",
    createdAt: "2026-03-15T09:00:00.000Z",
    updatedAt: "2026-03-15T09:00:00.000Z",
    metaTitle: "Cast Acrylic vs Extruded Acrylic Sheets: Key Differences | Mahadev Plastic",
    metaDescription: "Detailed engineering guide comparing cell cast acrylic vs continuous extruded acrylic sheets: optical clarity, laser cutting, chemical resistance and pricing.",
    focusKeyword: "Cast Acrylic vs Extruded Acrylic Sheets",
    supportiveKeywords: {
      highVolume: ["cast acrylic sheet", "extruded acrylic sheet", "pmma sheet types"],
      mediumVolume: ["cell cast vs extruded acrylic", "acrylic sheet manufacturing process"],
      longTail: ["difference between cast and extruded acrylic sheets in india", "best acrylic sheet for laser cutting"]
    },
    schemaType: "TechArticle",
    faqs: [
      {
        question: "Which acrylic sheet is better for laser cutting: cast or extruded?",
        answer: "Cast acrylic is significantly better for laser cutting and engraving because it does not melt or produce gummy edges, leaving a clean, frosted cut finish."
      },
      {
        question: "Does cast acrylic have better optical clarity than extruded acrylic?",
        answer: "Yes, cell cast acrylic provides up to 93% light transmission with minimal internal distortion compared to extruded PMMA."
      }
    ]
  },
  {
    id: "blog-seed-2",
    slug: "acrylic-sheets-in-interior-design-creating-modern-spaces-with-lightweight-decorative-materials",
    title: "Acrylic Sheets in Interior Design: Creating Modern Spaces with Lightweight Materials",
    excerpt: "Discover how modern interior designers utilize frosted, transparent, and mother-of-pearl acrylic sheets for partition walls, lighting fixtures, and custom cabinetry.",
    content: `<h2>Transforming Contemporary Commercial and Residential Interiors</h2>
<p>Modern interior architecture prioritizes lightweight, luminous, and shatter-resistant materials that combine aesthetic grace with structural longevity. Acrylic sheets have emerged as a premier glass alternative in luxury residences and commercial spaces.</p>
<h3>Mother of Pearl (MOP) Acrylic in Luxury Furniture</h3>
<p>Mother of Pearl (MOP) acrylic sheets bring rich pearlescent textures to temple altars, luxury wardrobe shutters, and hotel reception panels without the fragility of natural shell.</p>
<h3>Frosted Acrylic for Privacy and Diffused Lighting</h3>
<p>Frosted acrylic panels provide visual privacy while permitting soft ambient daylight to illuminate open-concept office environments. When paired with LED backlighting, the velvety satin texture distributes illumination evenly without harsh hotspots.</p>
<h3>Durability and Maintenance in High-Traffic Spaces</h3>
<p>Unlike fragile glass panels that pose safety hazards upon accidental impact, high-grade PMMA sheets are shatterproof, lightweight, and easy to clean with mild soapy water.</p>
<p>Mahadev Plastic manufactures decorative acrylic sheets in custom dimensions and finishes tailored specifically for architects and interior designers.</p>`,
    category: "Interior Design",
    tags: ["Interior Design", "MOP Acrylic", "Frosted Sheet", "Architectural PMMA"],
    author: "Mahadev Plastic Design Desk",
    readTime: "4 min read",
    featuredImage: "/images/MOP-Acrylic-Sheet.jpg",
    featuredImageAlt: "Decorative MOP and Frosted Acrylic Sheets in Modern Interior Architecture",
    status: "published",
    publishedAt: "2026-02-28T10:30:00.000Z",
    createdAt: "2026-02-28T10:30:00.000Z",
    updatedAt: "2026-02-28T10:30:00.000Z",
    metaTitle: "Acrylic Sheets in Interior Design: Modern Architectural Applications",
    metaDescription: "Explore how frosted, transparent, and MOP acrylic sheets revolutionize modern interior design with lightweight, shatterproof decorative partitions and panels.",
    focusKeyword: "Acrylic Sheets in Interior Design",
    supportiveKeywords: {
      highVolume: ["acrylic sheets interior design", "decorative acrylic sheets", "mop acrylic sheet design"],
      mediumVolume: ["frosted acrylic partition walls", "acrylic panels for temple mandir"],
      longTail: ["how to use acrylic sheets in home interior and commercial design in india"]
    },
    schemaType: "Article"
  },
  {
    id: "blog-seed-3",
    slug: "how-acrylic-sheets-are-becoming-a-preferred-alternative-to-glass-in-modern-applications",
    title: "Why Acrylic Sheets Are Becoming the Preferred Alternative to Glass",
    excerpt: "Explore the safety, weight, impact resistance, and cost benefits of transitioning from traditional glass to high-clarity PMMA acrylic sheets.",
    content: `<h2>The Evolution from Silica Glass to Engineered PMMA</h2>
<p>For decades, silica glass was the default choice for transparent barriers, skylights, and display cases. However, modern acrylic sheets (PMMA) have revolutionized architectural and industrial design.</p>
<h3>Key Performance Advantages of Acrylic Over Glass</h3>
<ul>
  <li><strong>Weight Reduction:</strong> Acrylic is half the weight of traditional glass, dramatically lowering structural load requirements and simplifying on-site handling.</li>
  <li><strong>Impact Resistance:</strong> High-grade acrylic offers 10 to 17 times the impact strength of standard float glass, eliminating dangerous shattering risks in high-traffic public areas.</li>
  <li><strong>Optical Clarity:</strong> Pure cast acrylic transmits up to 92-93% of visible light, rivaling or exceeding commercial architectural glass.</li>
  <li><strong>Thermal Insulation:</strong> PMMA sheets provide superior thermal insulation compared to standard single-pane glass, reducing heating and cooling costs.</li>
</ul>
<p>Mahadev Plastic supplies certified transparent acrylic sheets designed to withstand severe weather and prolonged UV exposure without yellowing.</p>`,
    category: "Industry Insights",
    tags: ["Glass Alternative", "Impact Resistance", "PMMA Clarity", "Safety"],
    author: "Mahadev Plastic Engineering",
    readTime: "6 min read",
    featuredImage: "/images/Transparent-acrylic-sheet.jpg",
    featuredImageAlt: "High Clarity Transparent Acrylic Sheet as Glass Alternative",
    status: "published",
    publishedAt: "2026-01-20T11:15:00.000Z",
    createdAt: "2026-01-20T11:15:00.000Z",
    updatedAt: "2026-01-20T11:15:00.000Z",
    metaTitle: "Why Acrylic Sheets Are the Preferred Glass Alternative | Mahadev Plastic",
    metaDescription: "Compare acrylic sheets vs glass: 17x higher impact strength, 50% lighter weight, and 93% optical clarity for architectural and industrial installations.",
    focusKeyword: "Acrylic Sheet Glass Alternative",
    supportiveKeywords: {
      highVolume: ["acrylic vs glass", "acrylic sheet as glass alternative", "clear plexiglass sheet"],
      mediumVolume: ["impact resistant acrylic sheet", "lightweight glass replacement"],
      longTail: ["why choose acrylic sheets over glass for windows and partitions"]
    },
    schemaType: "Article"
  },
  {
    id: "blog-seed-4",
    slug: "acrylic-sheet-manufacturing-process-from-raw-material-to-finished-sheet-quality",
    title: "Acrylic Sheet Manufacturing Process: From Raw Material to Finished Quality",
    excerpt: "A deep dive into polymer chemistry, cell-casting, annealing, and quality inspection protocols inside modern acrylic sheet manufacturing plants.",
    content: `<h2>Step-by-Step Overview of Cell-Cast PMMA Production</h2>
<p>Producing world-class acrylic sheets requires meticulous attention to polymer purity, thermal regulation, and surface protection.</p>
<h3>Step 1: Monomer Purification and Syrupy Formulation</h3>
<p>The process begins with high-grade Methyl Methacrylate (MMA) monomer, filtered to sub-micron levels to eliminate contaminants. Catalysts and specialized UV stabilizers are added to prevent solar degradation.</p>
<h3>Step 2: Casting in Precision Glass Molds</h3>
<p>Liquid syrup is cast between precision ground float glass plates separated by high-precision gaskets, then transferred to computer-controlled water baths and post-curing ovens for complete polymerization.</p>
<h3>Step 3: Thermal Annealing &amp; Stress Relief</h3>
<p>Sheets undergo multi-stage thermal annealing cycles to eliminate internal molecular stresses. This guarantees that sheets do not warp or craze during subsequent laser cutting or CNC machining.</p>
<h3>Step 4: Quality Inspection and Protective Masking</h3>
<p>Every sheet at Mahadev Plastic undergoes rigorous thickness verification, polarized light stress tests, and surface inspection before high-grade masking film is laminated to protect both sides.</p>`,
    category: "Manufacturing",
    tags: ["Manufacturing", "Cell Casting", "Polymer Chemistry", "Quality Control"],
    author: "Mahadev Plastic Quality Control",
    readTime: "7 min read",
    featuredImage: "/images/home2.jpg",
    featuredImageAlt: "Modern Acrylic Sheet Manufacturing Cell Casting Process at Mahadev Plastic",
    status: "published",
    publishedAt: "2026-01-10T08:00:00.000Z",
    createdAt: "2026-01-10T08:00:00.000Z",
    updatedAt: "2026-01-10T08:00:00.000Z",
    metaTitle: "Acrylic Sheet Manufacturing Process: Raw MMA to Finished Sheet",
    metaDescription: "Comprehensive guide to acrylic sheet manufacturing: cell casting, water bath polymerization, thermal annealing, and quality inspection at Mahadev Plastic.",
    focusKeyword: "Acrylic Sheet Manufacturing Process",
    supportiveKeywords: {
      highVolume: ["acrylic sheet manufacturing", "how acrylic sheets are made", "cell casting process pmma"],
      mediumVolume: ["mma monomer polymerization", "acrylic sheet plant talasari"],
      longTail: ["step by step cell cast acrylic sheet manufacturing process in india"]
    },
    schemaType: "TechArticle"
  },
  {
    id: "blog-seed-5",
    slug: "choosing-the-right-acrylic-sheet-thickness-for-different-industrial-and-commercial-uses",
    title: "Choosing the Right Acrylic Sheet Thickness for Commercial and Industrial Uses",
    excerpt: "Comprehensive thickness selection chart for signage lightboxes, protective sneeze guards, aquarium walls, and heavy-duty machine shields.",
    content: `<h2>Engineering Thickness Selection Matrix</h2>
<p>Selecting the correct thickness is crucial to prevent deflection, sagging, or premature failure in load-bearing or outdoor applications.</p>
<h3>Thin Sheets (1.5mm to 3mm)</h3>
<p>Best suited for picture frames, small display signs, brochure holders, and lightweight POS retail displays where minimal structural rigidity is required.</p>
<h3>Medium Sheets (4mm to 8mm)</h3>
<p>Standard specification for outdoor signage faces, interior office partitions, retail store shelving, and secondary glazing. These thicknesses provide excellent structural balance and wind-load tolerance.</p>
<h3>Thick Sheets (10mm to 25mm+)</h3>
<p>Engineered for structural machine guarding, heavy display pedestals, aquarium windows, and furniture tables requiring extreme impact strength and high bending resistance.</p>
<p>Mahadev Plastic offers custom thickness tolerances from 1.5mm up to 30mm to match exact mechanical design criteria.</p>`,
    category: "Technical Guide",
    tags: ["Thickness Guide", "Engineering", "Signage", "Machine Guarding"],
    author: "Mahadev Plastic Engineering",
    readTime: "5 min read",
    featuredImage: "/images/Acrylic-Sheets.jpg",
    featuredImageAlt: "Selecting Acrylic Sheet Thickness for Industrial Applications",
    status: "published",
    publishedAt: "2025-12-18T10:00:00.000Z",
    createdAt: "2025-12-18T10:00:00.000Z",
    updatedAt: "2025-12-18T10:00:00.000Z",
    metaTitle: "Acrylic Sheet Thickness Selection Guide: 2mm to 25mm Uses",
    metaDescription: "How to choose the ideal acrylic sheet thickness: 2mm-3mm for POS displays, 4mm-8mm for signage & partitions, 10mm-25mm for heavy machine guards.",
    focusKeyword: "Acrylic Sheet Thickness Guide",
    supportiveKeywords: {
      highVolume: ["acrylic sheet thickness", "acrylic sheet 2mm 3mm 5mm", "thick acrylic sheet"],
      mediumVolume: ["how thick should acrylic sheet be for signage", "machine guard acrylic thickness"],
      longTail: ["how to choose acrylic sheet thickness for commercial projects"]
    },
    schemaType: "TechArticle"
  },
  {
    id: "blog-seed-6",
    slug: "edge-glow-acrylic-sheet-led-signage-designs",
    title: "Edge-Glow Fluorescent Acrylic Sheets: Transforming Modern LED Signage Designs",
    excerpt: "How vibrant edge-glowing fluorescent acrylic materials enhance LED sign designs, retail branding, and attention-grabbing POP fixtures.",
    content: `<h2>The Science of Ambient Light Collection</h2>
<p>Fluorescent acrylic sheets feature specially engineered photo-luminescent pigments that collect ambient room light and redirect it directly to the edges of the sheet.</p>
<h3>Maximizing Visual Impact with LED Edge Lighting</h3>
<p>When coupled with discreet LED strip illumination, the engraved graphics or laser-cut edges burst into vivid radiant colors without needing expensive backlighting boxes.</p>
<h3>Vibrant Color Palette for Retail and Hospitality</h3>
<p>Available in neon green, electric orange, radiant red, amber yellow, and luminous blue, Mahadev Plastic fluorescent sheets deliver unmatched visual impact for bars, nightclubs, retail boutiques, and trade exhibits.</p>
<h3>Laser Cutting and Edge Polishing Recommendations</h3>
<p>To achieve maximum edge luminescence, CNC laser cutting is highly recommended. The thermal laser beam melts and seals the cut perimeter into an optical-grade polished edge that channels light effortlessly.</p>`,
    category: "Signage & Display",
    tags: ["Fluorescent Acrylic", "Edge Glow", "LED Signage", "POP Displays"],
    author: "Mahadev Plastic Design Team",
    readTime: "4 min read",
    featuredImage: "/images/Fluorescent-Acrylic-Sheet.jpg",
    featuredImageAlt: "Edge-Glow Fluorescent Acrylic Sheet for High Impact LED Signage",
    status: "published",
    publishedAt: "2025-11-25T11:00:00.000Z",
    createdAt: "2025-11-25T11:00:00.000Z",
    updatedAt: "2025-11-25T11:00:00.000Z",
    metaTitle: "Edge-Glow Fluorescent Acrylic Sheets for LED Signage | Mahadev Plastic",
    metaDescription: "Discover how edge-glow fluorescent acrylic sheets channel ambient light into radiant neon sign edges. Ideal for retail POP displays, clubs, and LED signage.",
    focusKeyword: "Edge Glow Fluorescent Acrylic Sheets",
    supportiveKeywords: {
      highVolume: ["fluorescent acrylic sheet", "edge glow acrylic", "neon acrylic sheet for signage"],
      mediumVolume: ["led illuminated acrylic edges", "laser engraved edge glow signs"],
      longTail: ["how to use fluorescent acrylic sheets for modern led retail signage"]
    },
    schemaType: "Article"
  }
];

// Ensure data folder and blogs.json exist
function ensureDataFile(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(BLOGS_FILE)) {
      fs.writeFileSync(BLOGS_FILE, JSON.stringify(SEED_BLOGS, null, 2), "utf-8");
    }
  } catch (err) {
    console.error("[blogStorage] Error ensuring data file:", err);
  }
}

// Read all blogs from JSON file
export function getAllBlogs(): BlogItem[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(BLOGS_FILE, "utf-8");
    const blogs: BlogItem[] = JSON.parse(raw);
    return blogs;
  } catch (err) {
    console.error("[blogStorage] Error reading blogs:", err);
    return SEED_BLOGS;
  }
}

// Save all blogs to JSON file safely
export function saveAllBlogs(blogs: BlogItem[]): boolean {
  ensureDataFile();
  try {
    const tempFile = `${BLOGS_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(blogs, null, 2), "utf-8");
    fs.renameSync(tempFile, BLOGS_FILE);
    return true;
  } catch (err) {
    console.error("[blogStorage] Error saving blogs:", err);
    try {
      fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");
      return true;
    } catch (e) {
      console.error("[blogStorage] Direct write fallback failed:", e);
      return false;
    }
  }
}

/**
 * Get only public-facing blogs:
 * - status === 'published'
 * - OR status === 'scheduled' AND scheduledAt <= now
 * Sorted by publishedAt / scheduledAt descending (newest first).
 */
export function getPublicBlogs(): BlogItem[] {
  const all = getAllBlogs();
  const now = new Date();

  return all
    .filter((b) => {
      if (b.status === "published") return true;
      if (b.status === "scheduled" && b.scheduledAt) {
        return new Date(b.scheduledAt) <= now;
      }
      return false;
    })
    .sort((a, b) => {
      const dateA = new Date(a.scheduledAt || a.publishedAt || a.createdAt).getTime();
      const dateB = new Date(b.scheduledAt || b.publishedAt || b.createdAt).getTime();
      return dateB - dateA;
    });
}

// Find a single blog by slug
export function getBlogBySlug(slug: string, includeUnpublished = false): BlogItem | undefined {
  const all = getAllBlogs();
  const found = all.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
  if (!found) return undefined;

  if (includeUnpublished) return found;

  const now = new Date();
  if (found.status === "published") return found;
  if (found.status === "scheduled" && found.scheduledAt && new Date(found.scheduledAt) <= now) {
    return found;
  }

  return undefined;
}

// Find blog by unique ID
export function getBlogById(id: string): BlogItem | undefined {
  const all = getAllBlogs();
  return all.find((b) => b.id === id);
}

// Check if slug is unique
export function isSlugUnique(slug: string, excludeId?: string): boolean {
  const all = getAllBlogs();
  const lower = slug.toLowerCase().trim();
  return !all.some((b) => b.slug.toLowerCase() === lower && b.id !== excludeId);
}

// Generate URL slug from title
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Calculate reading time from content
export function calculateReadTime(content: string): string {
  const text = content.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// Create a new blog post
export function createBlog(
  input: Omit<BlogItem, "id" | "createdAt" | "updatedAt">
): BlogItem {
  const all = getAllBlogs();
  const now = new Date().toISOString();
  
  let finalSlug = slugify(input.slug || input.title);
  let counter = 1;
  while (!isSlugUnique(finalSlug)) {
    finalSlug = `${slugify(input.slug || input.title)}-${counter++}`;
  }

  const newBlog: BlogItem = {
    ...input,
    id: `blog-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    slug: finalSlug,
    readTime: input.readTime || calculateReadTime(input.content),
    createdAt: now,
    updatedAt: now,
    publishedAt: input.status === "published" ? (input.publishedAt || now) : (input.publishedAt || now),
  };

  all.unshift(newBlog);
  saveAllBlogs(all);
  return newBlog;
}

// Update existing blog post
export function updateBlog(
  id: string,
  input: Partial<Omit<BlogItem, "id" | "createdAt">>
): BlogItem | null {
  const all = getAllBlogs();
  const index = all.findIndex((b) => b.id === id);
  if (index === -1) return null;

  const existing = all[index];
  const now = new Date().toISOString();

  let finalSlug = existing.slug;
  if (input.slug && input.slug !== existing.slug) {
    let testSlug = slugify(input.slug);
    let counter = 1;
    while (!isSlugUnique(testSlug, id)) {
      testSlug = `${slugify(input.slug)}-${counter++}`;
    }
    finalSlug = testSlug;
  }

  const updated: BlogItem = {
    ...existing,
    ...input,
    slug: finalSlug,
    readTime: input.content ? calculateReadTime(input.content) : existing.readTime,
    updatedAt: now,
  };

  // If transitioning to published for the first time without publishedAt
  if (updated.status === "published" && !updated.publishedAt) {
    updated.publishedAt = now;
  }

  all[index] = updated;
  saveAllBlogs(all);
  return updated;
}

// Delete blog post
export function deleteBlog(id: string): boolean {
  const all = getAllBlogs();
  const filtered = all.filter((b) => b.id !== id);
  if (filtered.length === all.length) return false;
  return saveAllBlogs(filtered);
}
