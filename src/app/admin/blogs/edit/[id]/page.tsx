import React from "react";
import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import BlogEditorForm from "@/components/admin/BlogEditorForm";
import { getBlogById } from "@/lib/blogStorage";

export const dynamic = "force-dynamic";

interface EditBlogPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const resolvedParams = await params;
  const blog = getBlogById(resolvedParams.id);

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
