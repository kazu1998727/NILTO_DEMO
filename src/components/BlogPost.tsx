"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogPost({ blog_id }: { blog_id: string }) {
  const [lang, setLang] = useState("ja");
  const [post, setPost] = useState({
    title: "タイトル",
    content: "コンテンツ",
    repeat_1: [
      {
        content_title: "コンテンツタイトル",
        content_media: {
          url: "",
          alt: "",
        },
        content_content: "コンテンツコンテンツ",
      },
    ],
  });
  const router = useRouter();

  const handleLanguageToggle = async () => {
    const newLang = lang === "ja" ? "en" : "ja";
    setLang(newLang);

    try {
      const res = await fetch(`/api/fetch-blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blog_id,
          lang: newLang,
        }),
      });
      const data = await res.json();
      setPost(data);
    } catch (e) {
      console.log(e);
    }

    router.refresh();
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/fetch-blog`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blog_id,
            lang,
          }),
        });
        const data = await res.json();
        setPost(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [blog_id, lang]);
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="px-6 lg:contents">
          <Button variant="outline" onClick={handleLanguageToggle}>
            {lang === "ja" ? "English" : "日本語"}
          </Button>
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">{post.content}</p>
            <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
              {post.repeat_1.map((item, index) => (
                <article key={index} className="max-w-4xl mx-auto p-4">
                  <h1 className="text-3xl font-bold mb-6">
                    {item.content_title}
                  </h1>

                  {item.content_media?.url && (
                    <div className="mb-6">
                      <Image
                        src={item.content_media.url}
                        alt={item.content_media.alt || item.content_title}
                        layout="responsive"
                        width={700}
                        height={475}
                        className="w-full rounded-lg object-cover"
                      />
                    </div>
                  )}
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {item.content_content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
