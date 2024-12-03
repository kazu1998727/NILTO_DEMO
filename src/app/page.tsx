import { BlogPostPreview } from "@/components/BlogPostPreview";
import { fetchBlogPosts } from "@/lib/nilto";
import { BlogPost } from "@/types/nilto";




export default async function Home() {

   const { data: blogs } = await fetchBlogPosts();


  return (
    <section>
      <h2 className="text-3xl font-bold text-foreground mb-6">
        Featured Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post: BlogPost) => (
          <BlogPostPreview key={post._id} {...post} />
        ))}
      </div>
    </section>
  );
}
