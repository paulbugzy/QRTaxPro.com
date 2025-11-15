import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search query:', query);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f75e00] focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#f75e00]"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
}