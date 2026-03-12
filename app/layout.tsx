import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Bookshelf",
  description: "Books recommended by the team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-stone-50 min-h-screen`}>
        <header className="bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">📚</span>
              <span className="text-xl font-semibold text-stone-800 group-hover:text-stone-600 transition-colors">
                Team Bookshelf
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors"
              >
                All Books
              </Link>
              <Link
                href="/add"
                className="bg-stone-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                + Add Book
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
