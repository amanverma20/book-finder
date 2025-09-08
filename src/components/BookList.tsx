import React from "react";
import BookCard from "./BookCard";

interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

interface Props {
  books: Book[];
  onSelect: (book: Book) => void;
}

const BookList: React.FC<Props> = ({ books, onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <BookCard
          key={book.key}
          title={book.title}
          author={book.author_name?.[0] || "Unknown Author"}
          coverId={book.cover_i}
          onClick={() => onSelect(book)}
        />
      ))}
    </div>
  );
};

export default BookList;
