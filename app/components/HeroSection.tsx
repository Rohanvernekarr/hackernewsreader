'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import NewsCard from './NewsCard';
import { Story, StoryType } from '@/lib/types';

export default function HeroSection() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const type = (searchParams.get('type') as StoryType) || 'top';
  const query = searchParams.get('query') || '';
  
  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams();
      
      if (type) queryParams.set('type', type);
      if (query) queryParams.set('query', query);
      
      const response = await fetch(`/api/hackernews?${queryParams.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch stories');
      }
      
      const data = await response.json();
      setStories(data.stories);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to load stories. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchNews();
  }, [type, query]);
  
  const handleSearch = (searchQuery: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchQuery) {
      params.set('query', searchQuery);
    } else {
      params.delete('query');
    }
    
    router.push(`/?${params.toString()}`);
  };
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-300 mb-4">
            {query 
              ? `Search Results for "${query}"` 
              : `${type.charAt(0).toUpperCase() + type.slice(1)} Stories`}
          </h1>
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hn-orange"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : stories.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            {query ? 'No stories found matching your search.' : 'No stories available.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map(story => (
              <NewsCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}