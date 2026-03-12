import { supabase } from "./supabase";

export interface Book {
  id: number;
  title: string;
  author: string;
  recommended_by: string;
}

export async function getBooks(): Promise<Book[]> {
  const { data, error } = await supabase
    .from("books")
    .select("id, title, author, recommended_by")
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function addBook(
  title: string,
  author: string,
  recommended_by: string
): Promise<Book> {
  const { data, error } = await supabase
    .from("books")
    .insert({ title, author, recommended_by })
    .select()
    .single();

  if (error) throw error;
  return data;
}
