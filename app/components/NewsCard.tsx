import Link from 'next/link';
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa';
import { Story } from '@/lib/types';
import { formatTime } from '@/lib/api';

interface NewsCardProps {
  story: Story;
}

export default function NewsCard({ story }: NewsCardProps) {
  
  const getDomain = (url: string) => {
    try {
      const domain = new URL(url);
      return domain.hostname.replace('www.', '');
    } catch (_) {
      return '';
    }
  };

  return (
    <div className="news-card dark:bg-zinc-900 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
  <div className="p-6 flex-grow">
        <div className="flex items-center text-sm font-serif text-gray-600 dark:text-gray-300 mb-4">
          <span className="flex items-center mr-4">
            <FaRegThumbsUp className="mr-2 text-zinc-600 dark:text-zinc-300" /> {story.score}
          </span>
          <span className="mx-2">•</span>
          <span>{formatTime(story.time)}</span>
          <span className="mx-2">•</span>
          <span>by {story.by}</span>
        </div>
        
        <h3 className="text-2xl font-serif mb-4 text-gray-700 dark:text-gray-200  transition-colors duration-300">
          {story.url ? (
            <a 
              href={story.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-200"
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
            className="text-sm text-gray-600 dark:text-gray-300 font-serif hover:text-zinc-700 dark:hover:text-zinc-200 hover:underline transition-colors duration-300"
          >
            ({getDomain(story.url)})
          </a>
        )}
      </div>
      
      <div className="dark:bg-zinc-800 bg-gray-50 px-6 py-4 ">
        <Link 
          href={`${story.url}`}
          className="flex font-serif items-center text-gray-600 dark:text-gray-300 hover:text-zinc-700 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <FaRegComment className="mr-2" /> 
          {story.descendants || 0} comments
        </Link>
      </div>
    </div>
  );
}