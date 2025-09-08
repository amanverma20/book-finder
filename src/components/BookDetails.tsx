import React from "react";

interface BookDetailProps {
  book: any;
  onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-lg"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p className="mb-2 text-gray-700">
          Author: {book.author_name?.[0] || "Unknown"}
        </p>
        <p className="text-gray-600">
          First Published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
