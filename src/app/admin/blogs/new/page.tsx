import React from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import BlogEditorForm from "@/components/admin/BlogEditorForm";

export default function NewBlogPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      <AdminHeader activeTab="new" />
      <BlogEditorForm isEdit={false} />
    </div>
  );
}
