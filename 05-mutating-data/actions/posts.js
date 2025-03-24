"use server";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => !text || text.trim().length === 0;

export async function createPost(_, formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    const errors = [];

    if (isInvalidText(title)) errors.push("Title is required.");

    if (isInvalidText(content)) errors.push("Content is required.");

    if (!image || !image.size) errors.push("An image is required.");

    if (errors.length) return { errors };

    let imageUrl
    try {
      imageUrl = await uploadImage(image)
    } catch(error) {
      throw new Error('Image upload failed, post was not created. Please try again later.')
    }

    await storePost({
      imageUrl,
      title,
      content,
      userId: 1,
    });
    
    revalidatePath('/', 'layout');
    redirect("/feed");
}

export async function togglePostLikeStatus(postId) {
    const userId = 2;

    await updatePostLikeStatus(postId, userId);

    revalidatePath('/', 'layout');
}