"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  FileText,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { BlogItem } from "@/lib/blogStorage";

export default function AdminBlogsDashboardPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Delete modal state
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteTitle, setDeleteTitle] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch blogs
  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/blogs");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (data.success) {
        setBlogs(data.blogs || []);
      } else {
        setError(data.error || "Failed to load blogs");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Network error loading articles");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle Delete
  const confirmDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/blogs/${deleteId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(blogs.filter((b) => b.id !== deleteId));
        setDeleteId(null);
      } else {
        alert(data.error || "Failed to delete article");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting article");
    } finally {
      setIsDeleting(false);
    }
  };

  // Filtered blogs
  const filteredBlogs = blogs.filter((b) => {
    const matchesStatus =
      selectedStatus === "all" || b.status === selectedStatus;
    const matchesSearch =
      !searchQuery ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.focusKeyword.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalCount = blogs.length;
  const publishedCount = blogs.filter((b) => b.status === "published").length;
  const scheduledCount = blogs.filter((b) => b.status === "scheduled").length;
  const draftCount = blogs.filter((b) => b.status === "draft").length;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      <AdminHeader activeTab="blogs" />

      <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Top Title & CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0D1B5F", margin: 0 }}>
              Blog Posts &amp; SEO Content Hub
            </h1>
            <p style={{ color: "#64748B", fontSize: "14px", margin: "4px 0 0" }}>
              Publish, schedule, edit, and optimize articles for nationwide organic Google ranking.
            </p>
          </div>

          <Link
            href="/admin/blogs/new"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 22px",
              borderRadius: "8px",
              backgroundColor: "#0D1B5F",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(13, 27, 95, 0.2)",
            }}
          >
            <Plus size={18} style={{ color: "#F4B400" }} />
            <span>Create New Article</span>
          </Link>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748B", textTransform: "uppercase" }}>
              Total Articles
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#0D1B5F", marginTop: "4px" }}>
              {totalCount}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#16A34A", textTransform: "uppercase" }}>
              Live / Published
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#16A34A", marginTop: "4px" }}>
              {publishedCount}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#2563EB", textTransform: "uppercase" }}>
              Scheduled Future
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#2563EB", marginTop: "4px" }}>
              {scheduledCount}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#64748B", textTransform: "uppercase" }}>
              Drafts
            </div>
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#64748B", marginTop: "4px" }}>
              {draftCount}
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "16px 20px",
            borderRadius: "12px",
            border: "1px solid #E2E8F0",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Status Tabs */}
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { label: "All Posts", value: "all", count: totalCount },
              { label: "Published", value: "published", count: publishedCount },
              { label: "Scheduled", value: "scheduled", count: scheduledCount },
              { label: "Drafts", value: "draft", count: draftCount },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedStatus(tab.value)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  backgroundColor: selectedStatus === tab.value ? "#0D1B5F" : "#F1F5F9",
                  color: selectedStatus === tab.value ? "#ffffff" : "#475569",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    fontSize: "11px",
                    padding: "2px 6px",
                    borderRadius: "10px",
                    backgroundColor: selectedStatus === tab.value ? "#F4B400" : "#E2E8F0",
                    color: selectedStatus === tab.value ? "#0D1B5F" : "#64748B",
                    fontWeight: 700,
                  }}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "340px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search size={16} style={{ position: "absolute", left: "12px", color: "#94A3B8" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, keyword, slug..."
              style={{
                width: "100%",
                padding: "8px 12px 8px 36px",
                borderRadius: "6px",
                border: "1px solid #CBD5E1",
                fontSize: "13px",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Articles Table */}
        {isLoading ? (
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "60px",
              borderRadius: "12px",
              textAlign: "center",
              color: "#64748B",
            }}
          >
            Loading articles...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "60px 20px",
              borderRadius: "12px",
              textAlign: "center",
              border: "1px solid #E2E8F0",
            }}
          >
            <FileText size={40} style={{ color: "#94A3B8", margin: "0 auto 12px" }} />
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1E293B", margin: "0 0 6px" }}>
              No articles found
            </h3>
            <p style={{ color: "#64748B", fontSize: "14px", margin: "0 0 20px" }}>
              {searchQuery
                ? "Try searching for a different keyword or reset filters."
                : "Create your first article to start ranking on search engines."}
            </p>
            <Link
              href="/admin/blogs/new"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: "6px",
                backgroundColor: "#0D1B5F",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <Plus size={16} />
              <span>Create New Article</span>
            </Link>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                    <th style={{ padding: "14px 18px", fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase" }}>
                      Article Details
                    </th>
                    <th style={{ padding: "14px 18px", fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase" }}>
                      Focus Keyword
                    </th>
                    <th style={{ padding: "14px 18px", fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase" }}>
                      Status
                    </th>
                    <th style={{ padding: "14px 18px", fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase" }}>
                      Date / Schedule
                    </th>
                    <th style={{ padding: "14px 18px", fontSize: "12px", fontWeight: 700, color: "#475569", textTransform: "uppercase", textAlign: "right" }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr
                      key={blog.id}
                      style={{
                        borderBottom: "1px solid #F1F5F9",
                        transition: "background-color 0.15s ease",
                      }}
                    >
                      {/* Title & Category */}
                      <td style={{ padding: "16px 18px", verticalAlign: "top", maxWidth: "420px" }}>
                        <div style={{ display: "flex", gap: "12px" }}>
                          {blog.featuredImage && (
                            <img
                              src={blog.featuredImage}
                              alt={blog.featuredImageAlt || blog.title}
                              style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "6px",
                                objectFit: "cover",
                                flexShrink: 0,
                                border: "1px solid #E2E8F0",
                              }}
                            />
                          )}
                          <div>
                            <span
                              style={{
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#0D1B5F",
                                backgroundColor: "#EEF2FF",
                                padding: "2px 8px",
                                borderRadius: "4px",
                                display: "inline-block",
                                marginBottom: "4px",
                              }}
                            >
                              {blog.category}
                            </span>
                            <div style={{ fontWeight: 700, fontSize: "15px", color: "#0F172A", lineHeight: 1.35 }}>
                              <Link
                                href={`/admin/blogs/edit/${blog.id}`}
                                style={{ color: "inherit", textDecoration: "none" }}
                              >
                                {blog.title}
                              </Link>
                            </div>
                            <div style={{ fontSize: "12px", color: "#64748B", marginTop: "4px" }}>
                              /blogs/{blog.slug}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Focus Keyword */}
                      <td style={{ padding: "16px 18px", verticalAlign: "top" }}>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "4px 10px",
                            borderRadius: "6px",
                            backgroundColor: "#FEF9C3",
                            color: "#854D0E",
                            fontSize: "12px",
                            fontWeight: 700,
                          }}
                        >
                          <Sparkles size={12} style={{ color: "#CA8A04" }} />
                          <span>{blog.focusKeyword || "Not specified"}</span>
                        </div>
                        {blog.metaTitle && (
                          <div style={{ fontSize: "11px", color: "#64748B", marginTop: "6px" }}>
                            Title: {blog.metaTitle.slice(0, 45)}...
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td style={{ padding: "16px 18px", verticalAlign: "top" }}>
                        {blog.status === "published" && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "4px 10px",
                              borderRadius: "12px",
                              backgroundColor: "#DCFCE7",
                              color: "#166534",
                              fontSize: "12px",
                              fontWeight: 700,
                            }}
                          >
                            <CheckCircle size={12} />
                            <span>Published</span>
                          </span>
                        )}

                        {blog.status === "scheduled" && (
                          <div>
                            <span
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                padding: "4px 10px",
                                borderRadius: "12px",
                                backgroundColor: "#DBEAFE",
                                color: "#1E40AF",
                                fontSize: "12px",
                                fontWeight: 700,
                              }}
                            >
                              <Clock size={12} />
                              <span>Scheduled</span>
                            </span>
                          </div>
                        )}

                        {blog.status === "draft" && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              padding: "4px 10px",
                              borderRadius: "12px",
                              backgroundColor: "#F1F5F9",
                              color: "#475569",
                              fontSize: "12px",
                              fontWeight: 700,
                            }}
                          >
                            <span>Draft</span>
                          </span>
                        )}
                      </td>

                      {/* Date & Schedule */}
                      <td style={{ padding: "16px 18px", verticalAlign: "top", fontSize: "13px", color: "#475569" }}>
                        {blog.status === "scheduled" && blog.scheduledAt ? (
                          <div>
                            <div style={{ fontWeight: 700, color: "#1D4ED8", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Calendar size={13} />
                              <span>{new Date(blog.scheduledAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748B" }}>
                              at {new Date(blog.scheduledAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div style={{ fontWeight: 600 }}>
                              {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </div>
                            <div style={{ fontSize: "11px", color: "#64748B" }}>{blog.readTime}</div>
                          </div>
                        )}
                      </td>

                      {/* Actions */}
                      <td style={{ padding: "16px 18px", verticalAlign: "top", textAlign: "right" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            title="Preview on live website"
                            style={{
                              padding: "6px",
                              borderRadius: "6px",
                              backgroundColor: "#F8FAFC",
                              color: "#475569",
                              border: "1px solid #CBD5E1",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <ExternalLink size={15} />
                          </Link>

                          <Link
                            href={`/admin/blogs/edit/${blog.id}`}
                            title="Edit Article"
                            style={{
                              padding: "6px 12px",
                              borderRadius: "6px",
                              backgroundColor: "#0D1B5F",
                              color: "#ffffff",
                              fontSize: "12px",
                              fontWeight: 600,
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <Edit size={13} />
                            <span>Edit</span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => {
                              setDeleteId(blog.id);
                              setDeleteTitle(blog.title);
                            }}
                            title="Delete Article"
                            style={{
                              padding: "6px",
                              borderRadius: "6px",
                              backgroundColor: "#FEF2F2",
                              color: "#DC2626",
                              border: "1px solid #FECACA",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteId && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 100,
              padding: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "28px",
                borderRadius: "12px",
                maxWidth: "460px",
                width: "100%",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#991B1B", margin: "0 0 12px" }}>
                Confirm Article Deletion
              </h3>
              <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.5, margin: "0 0 20px" }}>
                Are you sure you want to permanently delete:
                <br />
                <strong style={{ color: "#0F172A" }}>&quot;{deleteTitle}&quot;</strong>?
                <br />
                This action cannot be undone.
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setDeleteId(null)}
                  disabled={isDeleting}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    backgroundColor: "#F1F5F9",
                    color: "#475569",
                    border: "1px solid #CBD5E1",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "6px",
                    backgroundColor: "#DC2626",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: isDeleting ? "not-allowed" : "pointer",
                  }}
                >
                  {isDeleting ? "Deleting..." : "Yes, Delete Article"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
