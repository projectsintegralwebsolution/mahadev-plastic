"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Save,
  Clock,
  Calendar,
  CheckCircle,
  AlertCircle,
  Eye,
  ArrowLeft,
  Image as ImageIcon,
  Upload,
  Link as LinkIcon,
  HelpCircle,
  Plus,
  Trash2,
  Code,
  Sparkles,
  Search,
  ExternalLink,
} from "lucide-react";
import { BlogItem, BlogFaq } from "@/lib/blogStorage";

interface BlogEditorFormProps {
  initialData?: BlogItem;
  isEdit?: boolean;
}

const CATEGORIES = [
  "Technical Guide",
  "Interior Design",
  "Industry Insights",
  "Manufacturing",
  "Signage & Display",
  "Acrylic Fabrication",
  "Product Comparison",
];

export default function BlogEditorForm({ initialData, isEdit = false }: BlogEditorFormProps) {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement | null>(null);
  const contentHtmlRef = useRef(initialData?.content || "");
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Form State
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [autoSlug, setAutoSlug] = useState(!isEdit);
  const [category, setCategory] = useState(initialData?.category || "Technical Guide");
  const [customCategory, setCustomCategory] = useState("");
  const [author, setAuthor] = useState(initialData?.author || "Mahadev Plastic Editorial Team");
  const [readTime, setReadTime] = useState(initialData?.readTime || "5 min read");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [contentHtml, setContentHtml] = useState(initialData?.content || "");
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  // Featured Image
  const [featuredImage, setFeaturedImage] = useState(initialData?.featuredImage || "/images/Cast-Acrylic-Sheet.jpg");
  const [featuredImageAlt, setFeaturedImageAlt] = useState(initialData?.featuredImageAlt || "");
  const [isUploading, setIsUploading] = useState(false);

  // Status & Scheduling
  const [status, setStatus] = useState<"draft" | "published" | "scheduled">(initialData?.status || "published");
  const [scheduledAt, setScheduledAt] = useState<string>(
    initialData?.scheduledAt
      ? new Date(initialData.scheduledAt).toISOString().slice(0, 16)
      : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 16)
  );

  // SEO Fields
  const [focusKeyword, setFocusKeyword] = useState(initialData?.focusKeyword || "");
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || "");
  const [highVolumeKeywords, setHighVolumeKeywords] = useState(
    initialData?.supportiveKeywords?.highVolume?.join(", ") || ""
  );
  const [mediumVolumeKeywords, setMediumVolumeKeywords] = useState(
    initialData?.supportiveKeywords?.mediumVolume?.join(", ") || ""
  );
  const [longTailKeywords, setLongTailKeywords] = useState(
    initialData?.supportiveKeywords?.longTail?.join(", ") || ""
  );
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "");
  const [canonicalUrl, setCanonicalUrl] = useState(initialData?.canonicalUrl || "");

  // Schema & FAQs
  const [schemaType, setSchemaType] = useState<"BlogPosting" | "Article" | "TechArticle">(
    initialData?.schemaType || "BlogPosting"
  );
  const [faqs, setFaqs] = useState<BlogFaq[]>(initialData?.faqs || []);
  const [customSchema, setCustomSchema] = useState(initialData?.customSchema || "");

  // UI Tabs
  const [activeTab, setActiveTab] = useState<"content" | "seo" | "schema">("content");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Auto-generate slug from title if enabled
  useEffect(() => {
    if (autoSlug && !isEdit) {
      const generated = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generated);
    }
  }, [title, autoSlug, isEdit]);

  // Auto-fill meta title & description if empty
  useEffect(() => {
    if (!metaTitle && title) {
      setMetaTitle(`${title} | Mahadev Plastic`);
    }
  }, [title, metaTitle]);

  useEffect(() => {
    if (!metaDescription && excerpt) {
      setMetaDescription(excerpt.slice(0, 160));
    }
  }, [excerpt, metaDescription]);

  // Set initial content once on mount
  useEffect(() => {
    if (editorRef.current && !isHtmlMode) {
      editorRef.current.innerHTML = contentHtmlRef.current;
    }
  }, []);

  // Handle typing input in visual editor
  const handleEditorInput = (e: React.FormEvent<HTMLDivElement>) => {
    const html = e.currentTarget.innerHTML;
    contentHtmlRef.current = html;
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setContentHtml(html);
    }, 300);
  };

  const handleEditorBlur = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      contentHtmlRef.current = html;
      setContentHtml(html);
    }
  };

  // Toggle HTML Mode
  const handleToggleHtmlMode = () => {
    if (!isHtmlMode) {
      // Switching to HTML mode: get latest from editorRef
      if (editorRef.current) {
        const html = editorRef.current.innerHTML;
        contentHtmlRef.current = html;
        setContentHtml(html);
      }
      setIsHtmlMode(true);
    } else {
      // Switching to Visual mode: inject current contentHtml into editorRef
      setIsHtmlMode(false);
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.innerHTML = contentHtmlRef.current;
        }
      }, 0);
    }
  };

  // Execute formatting command in visual editor
  const executeCommand = (command: string, value: string | undefined = undefined) => {
    if (isHtmlMode) return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, value);
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      contentHtmlRef.current = html;
      setContentHtml(html);
    }
  };

  // Handle heading selection
  const handleHeadingChange = (tag: string) => {
    if (isHtmlMode) return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    if (tag === "p") {
      document.execCommand("formatBlock", false, "<p>");
    } else {
      document.execCommand("formatBlock", false, `<${tag}>`);
    }
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      contentHtmlRef.current = html;
      setContentHtml(html);
    }
  };

  // Insert Link Prompt
  const handleInsertLink = () => {
    const url = prompt("Enter hyperlink URL (e.g., https://mahadevplastic.com/cast-acrylic-sheet):");
    if (url) {
      executeCommand("createLink", url);
    }
  };

  // Insert Image via URL or prompt
  const handleInsertInlineImage = () => {
    const url = prompt("Enter Image URL:");
    if (url) {
      const alt = prompt("Enter Image Alt Text (for SEO indexing):") || "Acrylic Sheet Fabrication";
      const imgHtml = `<p><img src="${url}" alt="${alt}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;" /></p>`;
      if (editorRef.current) {
        editorRef.current.focus();
        document.execCommand("insertHTML", false, imgHtml);
        const html = editorRef.current.innerHTML;
        contentHtmlRef.current = html;
        setContentHtml(html);
      }
    }
  };

  // Handle Featured Image Upload (base64 JSON)
  const handleFeaturedImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const imageBase64 = reader.result as string;
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64, fileName: file.name }),
        });
        const data = await res.json();
        if (data.success && data.url) {
          setFeaturedImage(data.url);
          if (!featuredImageAlt) {
            setFeaturedImageAlt(title ? `${title} - Mahadev Plastic` : file.name);
          }
        } else {
          alert(data.error || "Failed to upload image");
        }
      } catch (err) {
        console.error("Upload error:", err);
        alert("Error uploading image");
      } finally {
        setIsUploading(false);
      }
    };

    reader.onerror = () => {
      alert("Failed to read file");
      setIsUploading(false);
    };

    reader.readAsDataURL(file);
  };

  // Word count & read time calculation
  const getWordCount = () => {
    const text = contentHtml.replace(/<[^>]+>/g, " ");
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const autoCalculateReadTime = () => {
    const words = getWordCount();
    const mins = Math.max(1, Math.ceil(words / 200));
    setReadTime(`${mins} min read`);
  };

  // Add FAQ pair
  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleUpdateFaq = (index: number, field: "question" | "answer", val: string) => {
    const copy = [...faqs];
    copy[index][field] = val;
    setFaqs(copy);
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  // SEO Score Calculations
  const wordCount = getWordCount();
  const kwLower = focusKeyword.toLowerCase().trim();
  const titleLower = title.toLowerCase();
  const descLower = metaDescription.toLowerCase();
  const slugLower = slug.toLowerCase();
  const contentLower = contentHtml.toLowerCase();

  const seoChecks = [
    {
      label: "Focus keyword set",
      passed: Boolean(kwLower.length > 2),
      recommendation: "Specify primary focus keyword for this article.",
    },
    {
      label: "Focus keyword in Main Title (H1)",
      passed: Boolean(kwLower && titleLower.includes(kwLower)),
      recommendation: "Include exact focus keyword near the beginning of the title.",
    },
    {
      label: "Focus keyword in URL Slug",
      passed: Boolean(kwLower && slugLower.includes(kwLower.replace(/\s+/g, "-"))),
      recommendation: "Ensure URL slug contains the primary target keyword.",
    },
    {
      label: "Focus keyword in Meta Description",
      passed: Boolean(kwLower && descLower.includes(kwLower)),
      recommendation: "Include focus keyword in SERP meta description snippet.",
    },
    {
      label: "Focus keyword in Article Content",
      passed: Boolean(kwLower && contentLower.includes(kwLower)),
      recommendation: "Mention focus keyword naturally in the first 100 words and subheadings.",
    },
    {
      label: "Content Length (300+ words recommended)",
      passed: wordCount >= 300,
      recommendation: `Current: ${wordCount} words. In-depth content (600+ words) ranks higher on Google.`,
    },
    {
      label: "Featured Image Alt Text Set",
      passed: Boolean(featuredImageAlt.trim().length > 5),
      recommendation: "Add descriptive keyword-rich alt text for Google Image search indexing.",
    },
  ];

  const seoScore = Math.round(
    (seoChecks.filter((c) => c.passed).length / seoChecks.length) * 100
  );

  // Submit Handler
  const handleSave = async (statusOverride?: "draft" | "published" | "scheduled") => {
    const targetStatus = statusOverride || status;

    if (!title.trim()) {
      setActiveTab("content");
      setSaveMessage({ type: "error", text: "Please enter an article title." });
      return;
    }

    const finalContent = isHtmlMode
      ? contentHtml
      : (editorRef.current ? editorRef.current.innerHTML : contentHtmlRef.current);

    if (!finalContent.trim() || finalContent === "<p><br></p>" || finalContent === "<br>") {
      setActiveTab("content");
      setSaveMessage({ type: "error", text: "Please write article content." });
      return;
    }

    setIsSaving(true);
    setSaveMessage(null);

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      category: category === "Custom" ? customCategory.trim() : category,
      author: author.trim(),
      readTime: readTime.trim(),
      excerpt: excerpt.trim() || title.trim(),
      content: finalContent,
      featuredImage: featuredImage.trim(),
      featuredImageAlt: featuredImageAlt.trim() || title.trim(),
      status: targetStatus,
      scheduledAt: targetStatus === "scheduled" ? new Date(scheduledAt).toISOString() : undefined,
      publishedAt:
        targetStatus === "published"
          ? initialData?.publishedAt || new Date().toISOString()
          : initialData?.publishedAt,
      metaTitle: metaTitle.trim() || `${title.trim()} | Mahadev Plastic`,
      metaDescription: metaDescription.trim() || excerpt.trim(),
      focusKeyword: focusKeyword.trim(),
      supportiveKeywords: {
        highVolume: highVolumeKeywords.split(",").map((k) => k.trim()).filter(Boolean),
        mediumVolume: mediumVolumeKeywords.split(",").map((k) => k.trim()).filter(Boolean),
        longTail: longTailKeywords.split(",").map((k) => k.trim()).filter(Boolean),
      },
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      canonicalUrl: canonicalUrl.trim() || undefined,
      schemaType,
      customSchema: customSchema.trim() || undefined,
      faqs: faqs.filter((f) => f.question.trim() && f.answer.trim()),
    };

    try {
      const url = isEdit ? `/api/admin/blogs/${initialData?.id}` : "/api/admin/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSaveMessage({
          type: "success",
          text: isEdit ? "Article updated successfully!" : "Article created successfully!",
        });
        setTimeout(() => {
          router.push("/admin/blogs");
          router.refresh();
        }, 1200);
      } else {
        setSaveMessage({ type: "error", text: data.error || "Failed to save article" });
      }
    } catch (err: any) {
      console.error("Save error:", err);
      setSaveMessage({ type: "error", text: "Network error while saving" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "24px 20px 80px" }}>
      {/* Top Header Actions */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            href="/admin/blogs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "6px",
              backgroundColor: "#F1F5F9",
              color: "#334155",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Articles</span>
          </Link>
          <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#0D1B5F", margin: 0 }}>
            {isEdit ? "Edit Blog Article" : "Create New Blog Article"}
          </h1>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {isEdit && (
            <Link
              href={`/blogs/${slug}`}
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 14px",
                borderRadius: "6px",
                backgroundColor: "#F8FAFC",
                color: "#475569",
                border: "1px solid #CBD5E1",
                fontSize: "13px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <Eye size={15} />
              <span>Preview Live</span>
              <ExternalLink size={12} />
            </Link>
          )}

          <button
            type="button"
            onClick={() => handleSave("draft")}
            disabled={isSaving}
            style={{
              padding: "9px 16px",
              borderRadius: "6px",
              backgroundColor: "#F1F5F9",
              color: "#334155",
              border: "1px solid #CBD5E1",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Save Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave()}
            disabled={isSaving}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "9px 20px",
              borderRadius: "6px",
              backgroundColor: status === "scheduled" ? "#2563EB" : "#0D1B5F",
              color: "#ffffff",
              border: "none",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(13, 27, 95, 0.25)",
            }}
          >
            <Save size={15} />
            <span>
              {isSaving
                ? "Saving..."
                : status === "scheduled"
                ? "Schedule Article"
                : status === "draft"
                ? "Save Draft"
                : "Publish Article"}
            </span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveMessage && (
        <div
          style={{
            padding: "12px 18px",
            borderRadius: "8px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: saveMessage.type === "success" ? "#ECFDF5" : "#FEF2F2",
            border: `1px solid ${saveMessage.type === "success" ? "#A7F3D0" : "#FECACA"}`,
            color: saveMessage.type === "success" ? "#065F46" : "#991B1B",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {saveMessage.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span>{saveMessage.text}</span>
        </div>
      )}

      {/* Layout Grid: Main Editor (Left) & Sidebar Settings (Right) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: "28px",
          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN: TABS & EDITOR */}
        <div>
          {/* Editor Navigation Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid #E2E8F0",
              marginBottom: "24px",
              gap: "8px",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("content")}
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 700,
                color: activeTab === "content" ? "#0D1B5F" : "#64748B",
                borderBottom: activeTab === "content" ? "3px solid #0D1B5F" : "3px solid transparent",
                marginBottom: "-2px",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Article Content &amp; Headings</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("seo")}
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 700,
                color: activeTab === "seo" ? "#0D1B5F" : "#64748B",
                borderBottom: activeTab === "seo" ? "3px solid #0D1B5F" : "3px solid transparent",
                marginBottom: "-2px",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Sparkles size={16} style={{ color: "#F4B400" }} />
              <span>SEO, Keywords &amp; SERP Preview</span>
              <span
                style={{
                  fontSize: "11px",
                  padding: "2px 7px",
                  borderRadius: "12px",
                  backgroundColor: seoScore >= 80 ? "#DCFCE7" : seoScore >= 50 ? "#FEF3C7" : "#FEE2E2",
                  color: seoScore >= 80 ? "#166534" : seoScore >= 50 ? "#92400E" : "#991B1B",
                  fontWeight: 800,
                }}
              >
                {seoScore}%
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("schema")}
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 700,
                color: activeTab === "schema" ? "#0D1B5F" : "#64748B",
                borderBottom: activeTab === "schema" ? "3px solid #0D1B5F" : "3px solid transparent",
                marginBottom: "-2px",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Schema Markup &amp; FAQs</span>
              {faqs.length > 0 && (
                <span
                  style={{
                    fontSize: "11px",
                    padding: "2px 7px",
                    borderRadius: "12px",
                    backgroundColor: "#E0E7FF",
                    color: "#3730A3",
                    fontWeight: 700,
                  }}
                >
                  {faqs.length} FAQs
                </span>
              )}
            </button>
          </div>

          {/* TAB 1: CONTENT & HEADINGS */}
          <div style={{ display: activeTab === "content" ? "flex" : "none", flexDirection: "column", gap: "20px" }}>
              {/* Title (H1) */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1E293B",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Article Title (H1) <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Cast Acrylic vs Extruded Acrylic Sheets: Engineering Differences"
                  style={{
                    width: "100%",
                    fontSize: "20px",
                    fontWeight: 700,
                    padding: "12px 14px",
                    borderRadius: "8px",
                    border: "1px solid #CBD5E1",
                    outline: "none",
                    color: "#0F172A",
                  }}
                />

                {/* Slug / Permalink */}
                <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 500 }}>
                    Permalink: https://mahadevplastic.com/blogs/
                  </span>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => {
                      setAutoSlug(false);
                      setSlug(e.target.value);
                    }}
                    placeholder="url-slug"
                    style={{
                      padding: "4px 8px",
                      fontSize: "13px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      color: "#0D1B5F",
                      fontWeight: 600,
                      backgroundColor: "#F8FAFC",
                    }}
                  />
                  {!autoSlug && !isEdit && (
                    <button
                      type="button"
                      onClick={() => setAutoSlug(true)}
                      style={{
                        fontSize: "11px",
                        color: "#2563EB",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Reset auto-slug
                    </button>
                  )}
                </div>
              </div>

              {/* Excerpt */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1E293B",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Article Excerpt / Summary (Used on Blog Cards &amp; Social Shares)
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  placeholder="A concise 2-3 sentence overview that summarizes the key takeaways of this article..."
                  style={{
                    width: "100%",
                    fontSize: "14px",
                    padding: "10px 12px",
                    borderRadius: "6px",
                    border: "1px solid #CBD5E1",
                    outline: "none",
                    lineHeight: 1.6,
                    color: "#334155",
                  }}
                />
              </div>

              {/* Visual Rich Text & Headings Editor */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                {/* Editor Toolbar */}
                <div
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderBottom: "1px solid #E2E8F0",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {/* Headings Selector (H1 - H6) */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#64748B" }}>Headings:</span>
                    <select
                      onChange={(e) => handleHeadingChange(e.target.value)}
                      defaultValue="p"
                      disabled={isHtmlMode}
                      style={{
                        padding: "5px 10px",
                        fontSize: "13px",
                        fontWeight: 600,
                        borderRadius: "6px",
                        border: "1px solid #CBD5E1",
                        backgroundColor: "#ffffff",
                        color: "#0F172A",
                        cursor: "pointer",
                      }}
                    >
                      <option value="p">Paragraph (Normal Text)</option>
                      <option value="h1">Heading 1 (H1)</option>
                      <option value="h2">Heading 2 (H2)</option>
                      <option value="h3">Heading 3 (H3)</option>
                      <option value="h4">Heading 4 (H4)</option>
                      <option value="h5">Heading 5 (H5)</option>
                      <option value="h6">Heading 6 (H6)</option>
                    </select>
                  </div>

                  <span style={{ color: "#CBD5E1" }}>|</span>

                  {/* Formatting Buttons */}
                  <button
                    type="button"
                    onClick={() => executeCommand("bold")}
                    disabled={isHtmlMode}
                    title="Bold (Ctrl+B)"
                    style={{
                      padding: "5px 10px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      fontWeight: 800,
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    B
                  </button>

                  <button
                    type="button"
                    onClick={() => executeCommand("italic")}
                    disabled={isHtmlMode}
                    title="Italic (Ctrl+I)"
                    style={{
                      padding: "5px 10px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      fontStyle: "italic",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    I
                  </button>

                  <button
                    type="button"
                    onClick={() => executeCommand("underline")}
                    disabled={isHtmlMode}
                    title="Underline (Ctrl+U)"
                    style={{
                      padding: "5px 10px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontSize: "13px",
                    }}
                  >
                    U
                  </button>

                  <span style={{ color: "#CBD5E1" }}>|</span>

                  {/* Lists */}
                  <button
                    type="button"
                    onClick={() => executeCommand("insertUnorderedList")}
                    disabled={isHtmlMode}
                    title="Bullet List"
                    style={{
                      padding: "5px 8px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    • List
                  </button>

                  <button
                    type="button"
                    onClick={() => executeCommand("insertOrderedList")}
                    disabled={isHtmlMode}
                    title="Numbered List"
                    style={{
                      padding: "5px 8px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    1. List
                  </button>

                  <span style={{ color: "#CBD5E1" }}>|</span>

                  {/* Insert Link & Image */}
                  <button
                    type="button"
                    onClick={handleInsertLink}
                    disabled={isHtmlMode}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "5px 8px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#0284C7",
                    }}
                  >
                    <LinkIcon size={13} />
                    <span>Link</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleInsertInlineImage}
                    disabled={isHtmlMode}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "5px 8px",
                      borderRadius: "4px",
                      border: "1px solid #CBD5E1",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#059669",
                    }}
                  >
                    <ImageIcon size={13} />
                    <span>Image</span>
                  </button>

                  {/* HTML Source Switcher */}
                  <div style={{ marginLeft: "auto" }}>
                    <button
                      type="button"
                      onClick={handleToggleHtmlMode}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        backgroundColor: isHtmlMode ? "#0D1B5F" : "#E2E8F0",
                        color: isHtmlMode ? "#ffffff" : "#1E293B",
                        border: "none",
                        fontSize: "12px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      <Code size={14} />
                      <span>{isHtmlMode ? "Visual Editor" : "HTML Source"}</span>
                    </button>
                  </div>
                </div>

                {/* Editor Content Area */}
                {isHtmlMode ? (
                  <textarea
                    value={contentHtml}
                    onChange={(e) => {
                      setContentHtml(e.target.value);
                      contentHtmlRef.current = e.target.value;
                    }}
                    rows={18}
                    style={{
                      width: "100%",
                      fontFamily: "monospace",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      padding: "18px",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#0F172A",
                      color: "#38BDF8",
                      boxSizing: "border-box",
                    }}
                  />
                ) : (
                  <div
                    ref={editorRef}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onInput={handleEditorInput}
                    onBlur={handleEditorBlur}
                    data-placeholder="Start typing your article here... You can use headings, bullet lists, bold text, images, and links."
                    style={{
                      minHeight: "420px",
                      padding: "24px",
                      outline: "none",
                      fontSize: "16px",
                      lineHeight: 1.8,
                      color: "#1E293B",
                      cursor: "text",
                    }}
                  />
                )}

                {/* Editor Footer Stats */}
                <div
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderTop: "1px solid #E2E8F0",
                    padding: "8px 18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#64748B",
                  }}
                >
                  <div style={{ display: "flex", gap: "16px" }}>
                    <span>
                      Words: <strong>{wordCount}</strong>
                    </span>
                    <span>
                      Reading Time: <strong>{readTime}</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={autoCalculateReadTime}
                    style={{
                      color: "#2563EB",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: "12px",
                    }}
                  >
                    Recalculate read time
                  </button>
              </div>
            </div>
          </div>

          {/* TAB 2: ADVANCED SEO & SERP PREVIEW */}
          <div style={{ display: activeTab === "seo" ? "flex" : "none", flexDirection: "column", gap: "24px" }}>
              {/* Google SERP Snippet Preview Box */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Search size={18} style={{ color: "#2563EB" }} />
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B5F", margin: 0 }}>
                      Google SERP Snippet Preview
                    </h3>
                  </div>

                  {/* Device Toggle */}
                  <div style={{ display: "flex", borderRadius: "6px", overflow: "hidden", border: "1px solid #CBD5E1" }}>
                    <button
                      type="button"
                      onClick={() => setPreviewDevice("desktop")}
                      style={{
                        padding: "4px 10px",
                        fontSize: "12px",
                        fontWeight: 600,
                        backgroundColor: previewDevice === "desktop" ? "#0D1B5F" : "#ffffff",
                        color: previewDevice === "desktop" ? "#ffffff" : "#475569",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Desktop
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewDevice("mobile")}
                      style={{
                        padding: "4px 10px",
                        fontSize: "12px",
                        fontWeight: 600,
                        backgroundColor: previewDevice === "mobile" ? "#0D1B5F" : "#ffffff",
                        color: previewDevice === "mobile" ? "#ffffff" : "#475569",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Mobile
                    </button>
                  </div>
                </div>

                {/* Simulated Google Card */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid #E2E8F0",
                    maxWidth: previewDevice === "mobile" ? "420px" : "620px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "#0D1B5F",
                        color: "#F4B400",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: 900,
                      }}
                    >
                      M
                    </div>
                    <span style={{ fontSize: "12px", color: "#202124" }}>Mahadev Plastic</span>
                    <span style={{ fontSize: "12px", color: "#5f6368" }}>• https://mahadevplastic.com › blogs › {slug || "url-slug"}</span>
                  </div>

                  <h4
                    style={{
                      fontSize: previewDevice === "mobile" ? "17px" : "19px",
                      fontWeight: 500,
                      color: "#1a0dab",
                      margin: "4px 0 6px",
                      lineHeight: 1.3,
                      cursor: "pointer",
                    }}
                  >
                    {metaTitle || `${title || "Article Title"} | Mahadev Plastic`}
                  </h4>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.5,
                      color: "#4d5156",
                      margin: 0,
                    }}
                  >
                    {metaDescription || excerpt || "Detailed engineering overview and technical fabrication guide for high-grade acrylic sheets by Mahadev Plastic."}
                  </p>
                </div>
              </div>

              {/* Focus Keyword & Meta Controls */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Focus Keyword */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
                      Primary Focus Keyword <span style={{ color: "#EF4444" }}>*</span>
                    </label>
                    <span style={{ fontSize: "12px", color: "#64748B" }}>
                      Target #1 ranking keyword on Google
                    </span>
                  </div>
                  <input
                    type="text"
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
                    placeholder="e.g., Cast Acrylic vs Extruded Acrylic Sheets"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      fontSize: "15px",
                      fontWeight: 600,
                      borderRadius: "6px",
                      border: "1px solid #CBD5E1",
                      outline: "none",
                      color: "#0F172A",
                    }}
                  />
                </div>

                {/* Supportive Keywords */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      High-Volume Keywords
                    </label>
                    <input
                      type="text"
                      value={highVolumeKeywords}
                      onChange={(e) => setHighVolumeKeywords(e.target.value)}
                      placeholder="comma-separated"
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        fontSize: "13px",
                        borderRadius: "6px",
                        border: "1px solid #CBD5E1",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Medium-Volume Keywords
                    </label>
                    <input
                      type="text"
                      value={mediumVolumeKeywords}
                      onChange={(e) => setMediumVolumeKeywords(e.target.value)}
                      placeholder="comma-separated"
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        fontSize: "13px",
                        borderRadius: "6px",
                        border: "1px solid #CBD5E1",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                      Long-Tail Keywords
                    </label>
                    <input
                      type="text"
                      value={longTailKeywords}
                      onChange={(e) => setLongTailKeywords(e.target.value)}
                      placeholder="comma-separated"
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        fontSize: "13px",
                        borderRadius: "6px",
                        border: "1px solid #CBD5E1",
                      }}
                    />
                  </div>
                </div>

                {/* Meta Title */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
                      SERP Meta Title (Ideal: 50 - 60 chars)
                    </label>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color:
                          metaTitle.length >= 45 && metaTitle.length <= 60
                            ? "#16A34A"
                            : metaTitle.length > 60
                            ? "#DC2626"
                            : "#D97706",
                      }}
                    >
                      {metaTitle.length} / 60 characters
                    </span>
                  </div>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder="e.g., Cast Acrylic vs Extruded Acrylic Sheets: Key Differences | Mahadev Plastic"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      fontSize: "14px",
                      borderRadius: "6px",
                      border: "1px solid #CBD5E1",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Meta Description */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 700, color: "#1E293B" }}>
                      SERP Meta Description (Ideal: 150 - 160 chars)
                    </label>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color:
                          metaDescription.length >= 140 && metaDescription.length <= 165
                            ? "#16A34A"
                            : metaDescription.length > 165
                            ? "#DC2626"
                            : "#D97706",
                      }}
                    >
                      {metaDescription.length} / 160 characters
                    </span>
                  </div>
                  <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    rows={3}
                    placeholder="e.g., Learn the crucial differences between cast and extruded PMMA sheets: optical clarity, laser cutting tolerances, and thermal resistance by Mahadev Plastic."
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      fontSize: "14px",
                      borderRadius: "6px",
                      border: "1px solid #CBD5E1",
                      outline: "none",
                      lineHeight: 1.5,
                    }}
                  />
                </div>

                {/* Canonical URL Override */}
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>
                    Canonical URL (Optional override)
                  </label>
                  <input
                    type="url"
                    value={canonicalUrl}
                    onChange={(e) => setCanonicalUrl(e.target.value)}
                    placeholder={`https://mahadevplastic.com/blogs/${slug || "article-slug"}`}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      fontSize: "13px",
                      borderRadius: "6px",
                      border: "1px solid #CBD5E1",
                    }}
                  />
                </div>
              </div>

              {/* SEO Checklist & Audit */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B5F", margin: 0 }}>
                    Senior SEO Audit Checklist
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "13px", color: "#64748B" }}>Overall Optimization:</span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 800,
                        padding: "3px 10px",
                        borderRadius: "12px",
                        backgroundColor: seoScore >= 80 ? "#DCFCE7" : seoScore >= 50 ? "#FEF3C7" : "#FEE2E2",
                        color: seoScore >= 80 ? "#166534" : seoScore >= 50 ? "#92400E" : "#991B1B",
                      }}
                    >
                      {seoScore}%
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {seoChecks.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        backgroundColor: item.passed ? "#F0FDF4" : "#FFFBEB",
                        border: `1px solid ${item.passed ? "#BBF7D0" : "#FDE68A"}`,
                      }}
                    >
                      {item.passed ? (
                        <CheckCircle size={18} style={{ color: "#16A34A", flexShrink: 0, marginTop: "2px" }} />
                      ) : (
                        <AlertCircle size={18} style={{ color: "#D97706", flexShrink: 0, marginTop: "2px" }} />
                      )}
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: item.passed ? "#166534" : "#92400E" }}>
                          {item.label}
                        </div>
                        {!item.passed && (
                          <div style={{ fontSize: "12px", color: "#B45309", marginTop: "2px" }}>
                            {item.recommendation}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* TAB 3: SCHEMA MARKUP & FAQS */}
          <div style={{ display: activeTab === "schema" ? "flex" : "none", flexDirection: "column", gap: "24px" }}>
              {/* Schema Type Selection */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B5F", marginBottom: "14px" }}>
                  Structured Data / Schema.org Type
                </h3>
                <div style={{ display: "flex", gap: "16px" }}>
                  {(["BlogPosting", "Article", "TechArticle"] as const).map((st) => (
                    <label
                      key={st}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 16px",
                        borderRadius: "8px",
                        border: `2px solid ${schemaType === st ? "#0D1B5F" : "#CBD5E1"}`,
                        backgroundColor: schemaType === st ? "#EEF2FF" : "#ffffff",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      <input
                        type="radio"
                        name="schemaType"
                        checked={schemaType === st}
                        onChange={() => setSchemaType(st)}
                      />
                      <span>{st}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interactive FAQ Builder */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B5F", margin: 0 }}>
                      FAQ Schema Builder (Google FAQ Rich Snippets)
                    </h3>
                    <p style={{ fontSize: "13px", color: "#64748B", margin: "4px 0 0" }}>
                      Add buyer questions and answers. These will display on the blog post and inject structured `FAQPage` JSON-LD schema.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddFaq}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      backgroundColor: "#0D1B5F",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Plus size={14} />
                    <span>Add FAQ</span>
                  </button>
                </div>

                {faqs.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      borderRadius: "8px",
                      backgroundColor: "#F8FAFC",
                      border: "2px dashed #CBD5E1",
                      color: "#64748B",
                      fontSize: "14px",
                    }}
                  >
                    No FAQs added yet. Click &quot;+ Add FAQ&quot; to build rich FAQ schema questions!
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: "#F8FAFC",
                          padding: "16px",
                          borderRadius: "8px",
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: "#475569" }}>
                            FAQ #{index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFaq(index)}
                            style={{
                              color: "#EF4444",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "12px",
                            }}
                          >
                            <Trash2 size={13} />
                            <span>Remove</span>
                          </button>
                        </div>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => handleUpdateFaq(index, "question", e.target.value)}
                          placeholder="e.g., Which acrylic sheet is better for laser cutting: cast or extruded?"
                          style={{
                            width: "100%",
                            padding: "8px 12px",
                            fontSize: "14px",
                            fontWeight: 600,
                            borderRadius: "6px",
                            border: "1px solid #CBD5E1",
                            marginBottom: "8px",
                          }}
                        />
                        <textarea
                          value={faq.answer}
                          onChange={(e) => handleUpdateFaq(index, "answer", e.target.value)}
                          rows={2}
                          placeholder="Provide a clear, human answer with exact material specs..."
                          style={{
                            width: "100%",
                            padding: "8px 12px",
                            fontSize: "13px",
                            borderRadius: "6px",
                            border: "1px solid #CBD5E1",
                            lineHeight: 1.5,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Custom JSON-LD Schema Override */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "10px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Code size={18} style={{ color: "#0D1B5F" }} />
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0D1B5F", margin: 0 }}>
                    Custom JSON-LD Schema (Advanced)
                  </h3>
                </div>
                <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "12px" }}>
                  Optional: Paste raw JSON-LD markup if you wish to override or inject additional structured data graphs.
                </p>
                <textarea
                  value={customSchema}
                  onChange={(e) => setCustomSchema(e.target.value)}
                  rows={6}
                  placeholder={`{\n  "@context": "https://schema.org",\n  "@type": "TechArticle",\n  "headline": "..."\n}`}
                  style={{
                    width: "100%",
                    fontFamily: "monospace",
                    fontSize: "13px",
                    padding: "12px",
                    borderRadius: "6px",
                    border: "1px solid #CBD5E1",
                    backgroundColor: "#F8FAFC",
                  }}
                />
              </div>
            </div>
          </div>

        {/* RIGHT COLUMN: PUBLISHING & METADATA SIDEBAR */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Status & Schedule Box */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 800,
                color: "#0D1B5F",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Clock size={16} style={{ color: "#F4B400" }} />
              <span>Publishing &amp; Schedule</span>
            </h3>

            {/* Status Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: `1px solid ${status === "published" ? "#0D1B5F" : "#E2E8F0"}`,
                  backgroundColor: status === "published" ? "#F0F4FF" : "#ffffff",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <input
                  type="radio"
                  name="status"
                  checked={status === "published"}
                  onChange={() => setStatus("published")}
                />
                <span>Publish Immediately</span>
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: `1px solid ${status === "scheduled" ? "#2563EB" : "#E2E8F0"}`,
                  backgroundColor: status === "scheduled" ? "#EFF6FF" : "#ffffff",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <input
                  type="radio"
                  name="status"
                  checked={status === "scheduled"}
                  onChange={() => setStatus("scheduled")}
                />
                <span>Schedule for Future Date &amp; Time</span>
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: `1px solid ${status === "draft" ? "#64748B" : "#E2E8F0"}`,
                  backgroundColor: status === "draft" ? "#F8FAFC" : "#ffffff",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <input
                  type="radio"
                  name="status"
                  checked={status === "draft"}
                  onChange={() => setStatus("draft")}
                />
                <span>Save as Draft</span>
              </label>
            </div>

            {/* Date & Time Picker for Scheduling */}
            {status === "scheduled" && (
              <div
                style={{
                  backgroundColor: "#F0F9FF",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #BAE6FD",
                  marginBottom: "16px",
                }}
              >
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#0369A1", marginBottom: "6px" }}>
                  Release Date &amp; Time
                </label>
                <input
                  type="datetime-local"
                  value={scheduledAt}
                  onChange={(e) => setScheduledAt(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #7DD3FC",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                />
                <p style={{ fontSize: "11px", color: "#0284C7", marginTop: "6px", margin: "6px 0 0", lineHeight: 1.4 }}>
                  Auto-publish: The blog post and its sitemap entry will go live automatically on this exact date and time.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => handleSave()}
              disabled={isSaving}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: status === "scheduled" ? "#2563EB" : "#0D1B5F",
                color: "#ffffff",
                border: "none",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Save size={16} />
              <span>
                {isSaving
                  ? "Saving..."
                  : status === "scheduled"
                  ? "Confirm Schedule"
                  : status === "draft"
                  ? "Save Draft"
                  : "Publish Now"}
              </span>
            </button>
          </div>

          {/* Featured Image & SEO Alt Text */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 800,
                color: "#0D1B5F",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ImageIcon size={16} style={{ color: "#F4B400" }} />
              <span>Featured Image &amp; SEO Alt</span>
            </h3>

            {/* Image Preview */}
            <div
              style={{
                width: "100%",
                height: "170px",
                borderRadius: "8px",
                backgroundColor: "#F1F5F9",
                overflow: "hidden",
                border: "1px solid #CBD5E1",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {featuredImage ? (
                <img
                  src={featuredImage}
                  alt={featuredImageAlt || "Featured image preview"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: "12px", color: "#94A3B8" }}>No image selected</span>
              )}
            </div>

            {/* Upload Button */}
            <div style={{ marginBottom: "12px" }}>
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  backgroundColor: "#F8FAFC",
                  border: "1px dashed #CBD5E1",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#0D1B5F",
                  cursor: isUploading ? "not-allowed" : "pointer",
                }}
              >
                <Upload size={14} />
                <span>{isUploading ? "Uploading..." : "Upload New Image"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFeaturedImageUpload}
                  disabled={isUploading}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            {/* Direct Image URL input */}
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#64748B", marginBottom: "4px" }}>
                Or Image URL:
              </label>
              <input
                type="text"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                placeholder="/images/Cast-Acrylic-Sheet.jpg"
                style={{
                  width: "100%",
                  padding: "6px 10px",
                  fontSize: "12px",
                  borderRadius: "6px",
                  border: "1px solid #CBD5E1",
                }}
              />
            </div>

            {/* Image Alt Text (SEO CRITICAL) */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>
                  Image Alt Text <span style={{ color: "#EF4444" }}>*</span>
                </label>
                <span style={{ fontSize: "10px", color: "#16A34A", fontWeight: 700 }}>Google Indexing</span>
              </div>
              <input
                type="text"
                value={featuredImageAlt}
                onChange={(e) => setFeaturedImageAlt(e.target.value)}
                placeholder="e.g., Cast Acrylic Sheet Manufacturing Plant Talasari"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  fontSize: "13px",
                  borderRadius: "6px",
                  border: "1px solid #CBD5E1",
                  outline: "none",
                }}
              />
              <span style={{ fontSize: "11px", color: "#64748B", marginTop: "4px", display: "block" }}>
                Essential for Google Images ranking and accessibility.
              </span>
            </div>
          </div>

          {/* Categorization & Metadata */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 800,
                color: "#0D1B5F",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                margin: 0,
              }}
            >
              Taxonomy &amp; Author
            </h3>

            {/* Category */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  fontSize: "13px",
                  borderRadius: "6px",
                  border: "1px solid #CBD5E1",
                  backgroundColor: "#ffffff",
                }}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
                <option value="Custom">+ Custom Category</option>
              </select>
              {category === "Custom" && (
                <input
                  type="text"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  placeholder="Enter custom category name"
                  style={{
                    width: "100%",
                    marginTop: "8px",
                    padding: "8px 10px",
                    fontSize: "13px",
                    borderRadius: "6px",
                    border: "1px solid #CBD5E1",
                  }}
                />
              )}
            </div>

            {/* Author */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  fontSize: "13px",
                  borderRadius: "6px",
                  border: "1px solid #CBD5E1",
                }}
              />
            </div>

            {/* Read Time */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="5 min read"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  fontSize: "13px",
                  borderRadius: "6px",
                  border: "1px solid #CBD5E1",
                }}
              />
            </div>

            {/* Tags */}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Cast Acrylic, PMMA, Signage"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  fontSize: "13px",
                  borderRadius: "6px",
                  border: "1px solid #CBD5E1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
