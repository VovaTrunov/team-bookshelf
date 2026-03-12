"use server";

import { addBook } from "@/lib/books";
import { redirect } from "next/navigation";

export async function addBookAction(formData: FormData) {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const recommended_by = formData.get("recommended_by") as string;

  if (!title?.trim() || !author?.trim() || !recommended_by?.trim()) {
    return;
  }

  await addBook(title.trim(), author.trim(), recommended_by.trim());
  redirect("/");
}
