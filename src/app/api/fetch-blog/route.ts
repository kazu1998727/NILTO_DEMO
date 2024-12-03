import { fetchBlogPost } from "@/lib/nilto";
import { NextRequest, } from "next/server";

export async function POST(req: NextRequest) {
    const { blog_id, lang } = await req.json();
    const { title, content, repeat_1 } = await fetchBlogPost(blog_id, lang);
    return Response.json({ title, content, repeat_1 });
}
