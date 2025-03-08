import Link from 'next/link';
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa';
import { Story } from '@/lib/types';
import { formatTime } from '@/lib/api';

interface NewsCardProps {
  story: Story;
}

export default function NewsCard({ story }: NewsCardProps) {
  // Extract domain from URL
  const getDomain = (url: string) => {
    try {
      const domain = new URL(url);
      return domain.hostname.replace('www.', '');
    } catch (e) {
      return '';
    }
  };

  return (
    <div className="news-card bg-zinc-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-300 mb-4">
          <span className="flex items-center mr-4">
            <FaRegThumbsUp className="mr-2 text-zinc-500" /> {story.score}
          </span>
          <span className="mx-2">•</span>
          <span>{formatTime(story.time)}</span>
          <span className="mx-2">•</span>
          <span>by {story.by}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-200 hover:text-zinc-300 transition-colors duration-300">
          {story.url ? (
            <a 
              href={story.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-200"
            >
              {story.title}
            </a>
          ) : (
            <Link 
              href={`/item/${story.id}`}
              className="hover:text-zinc-200"
            >
              {story.title}
            </Link>
          )}
        </h3>
        
        {story.url && (
          <a 
            href={story.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-zinc-500 hover:underline transition-colors duration-300"
          >
            ({getDomain(story.url)})
          </a>
        )}
      </div>
      
      <div className="bg-zinc-800 px-6 py-4">
        <Link 
          href={`/item/${story.id}`}
          className="flex items-center text-gray-300 hover:text-zinc-500 transition-colors duration-300"
        >
          <FaRegComment className="mr-2" /> 
          {story.descendants || 0} comments
        </Link>
      </div>
    </div>
  );
}