import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/backend";

export default async function News() {
  // const response = await fetch("http://localhost:8080/news");

  // if (!response?.ok) {
  //   throw new Error("Failed to fetch news.");
  // }

  // const data = await response.json();

  const data = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={data} />
    </>
  );
}
