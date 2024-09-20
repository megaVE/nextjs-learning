import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import PostForm from "@/components/post-form";

const isInvalidText = (text) => !text || text.trim().length === 0;

export default function NewPostPage() {
  async function createPost(_, formData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    let errors = [];

    if (isInvalidText(title)) errors.push("Title is required.");

    if (isInvalidText(content)) errors.push("Content is required.");

    if (!image || !image.size) errors.push("An image is required.");

    if (errors.length) return { errors };

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    redirect("/feed");
  }

  return <PostForm action={createPost} />;
}
