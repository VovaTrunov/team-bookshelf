import { getBooks } from "@/lib/books";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const books = getBooks();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">Recommended Books</h1>
        <p className="mt-2 text-stone-500">
          {books.length} book{books.length !== 1 ? "s" : ""} recommended by the team
        </p>
      </div>

      {books.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-stone-400 text-lg mb-4">No books yet.</p>
          <Link
            href="/add"
            className="inline-block bg-stone-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-700 transition-colors"
          >
            Add the first book
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-16 bg-stone-100 rounded-md flex items-center justify-center text-2xl">
                  📖
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-stone-900 leading-snug">
                    {book.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-1">{book.author}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-stone-100 rounded-full px-3 py-1">
                    <span className="text-stone-400 text-xs">recommended by</span>
                    <span className="text-stone-700 text-xs font-medium">
                      {book.recommended_by}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
