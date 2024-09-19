import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/backend";

export default async function ModalInterceptor({ params }) {
  const newsSlug = params.slug;
  const newsItem = getNewsItem(newsSlug);

  if (!newsItem) return notFound();

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
