import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/backend";

export default async function Latest() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
