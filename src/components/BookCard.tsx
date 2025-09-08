import React from "react";

interface Props {
  title: string;
  author: string;
  coverId?: number;
  onClick: () => void;
}

const BookCard: React.FC<Props> = ({ title, author, coverId, onClick }) => {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-xl shadow-md hover:shadow-lg p-4 bg-white"
    >
      <img src={coverUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="mt-3 font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{author}</p>
    </div>
  );
};

export default BookCard;
