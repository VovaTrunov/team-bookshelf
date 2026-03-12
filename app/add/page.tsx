import Link from "next/link";
import { addBookAction } from "./actions";

export default function AddBookPage() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="text-stone-500 hover:text-stone-700 text-sm font-medium inline-flex items-center gap-1 transition-colors"
        >
          ← Back to bookshelf
        </Link>
        <h1 className="text-3xl font-bold text-stone-900 mt-4">Add a Book</h1>
        <p className="mt-2 text-stone-500">
          Share a book you think the team should read.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-stone-200 p-8 shadow-sm">
        <form action={addBookAction} className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Book Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="e.g. The Pragmatic Programmer"
              className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              placeholder="e.g. David Thomas & Andrew Hunt"
              className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="recommended_by"
              className="block text-sm font-medium text-stone-700 mb-2"
            >
              Your Name
            </label>
            <input
              id="recommended_by"
              name="recommended_by"
              type="text"
              required
              placeholder="e.g. Alex"
              className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-800 text-white py-3 rounded-lg font-medium hover:bg-stone-700 active:bg-stone-900 transition-colors mt-2"
          >
            Add to Bookshelf
          </button>
        </form>
      </div>
    </div>
  );
}
