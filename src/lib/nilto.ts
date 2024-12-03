//ブログ記事一覧を取得する関数
export const fetchBlogPosts = async (lang: string = "ja") => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}contents/?model=blogs&lang=${lang}`,
      {
        headers: new Headers({
          "X-NILTO-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "",
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching featured posts:", error);
  }
};

//ブログの詳細を取得する関数
export const fetchBlogPost = async (id: string, lang: string = "ja") => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}contents/${id}/?lang=${lang}`,
      {
        headers: new Headers({
          "X-NILTO-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "",
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }
};
