import BlogPost from "@/components/BlogPost";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <BlogPost
        blog_id={params.id}
      />
    </>
  );
}
