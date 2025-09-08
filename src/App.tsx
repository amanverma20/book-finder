import axios from "axios";
import React, { useState } from "react";
import BookDetail from "./components/BookDetails";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState<any | null>(null);

  const handleSearch = async (query: string) => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      setBooks(res.data.docs);
    } catch (err) {
      setError("Failed to fetch books. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">📚 Book Finder</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <BookList books={books} onSelect={setSelectedBook} />

      {selectedBook && (
        <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default App;
