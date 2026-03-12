export interface Book {
  id: number;
  title: string;
  author: string;
  recommended_by: string;
}

let books: Book[] = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    recommended_by: "Alex",
  },
  {
    id: 2,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    recommended_by: "Sam",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    recommended_by: "Jordan",
  },
  {
    id: 4,
    title: "Staff Engineer",
    author: "Will Larson",
    recommended_by: "Taylor",
  },
];

let nextId = 5;

export function getBooks(): Book[] {
  return books;
}

export function addBook(title: string, author: string, recommended_by: string): Book {
  const book: Book = { id: nextId++, title, author, recommended_by };
  books = [...books, book];
  return book;
}
