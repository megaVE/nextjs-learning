import { getNewsItem } from "@/lib/backend";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Details({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) return notFound();

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${params.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
