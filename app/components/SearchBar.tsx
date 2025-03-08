'use client';

import { useState, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full font-serif max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for stories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3 px-4 pr-12 text-gray-800 dark:text-gray-100 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-hn-orange focus:border-transparent"
        />
        <button
        title='click'
          type="submit"
          className="absolute right-4 top-1/2  transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-hn-orange"
        >
          <FaSearch className="h-5 w-5 " />
        </button>
      </div>
    </form>
  );
}
