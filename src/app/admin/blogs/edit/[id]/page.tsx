import React from "react";
import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import BlogEditorForm from "@/components/admin/BlogEditorForm";
import { getBlogById } from "@/lib/blogStorage";

export const dynamic = "force-dynamic";

interface EditBlogPageProps {
  params: { id: string };
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  const blog = getBlogById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      <AdminHeader activeTab="blogs" />
      <BlogEditorForm initialData={blog} isEdit={true} />
    </div>
  );
}
