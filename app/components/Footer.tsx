import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="dark:bg-zinc-950 text-black dark:text-gray-200 font-serif py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center text-gray-600 dark:text-gray-300 md:text-left">
              Built by Rohan
            </p>
            <p className="text-center md:text-left text-gray-800 dark:text-gray-300 text-sm mt-1">
              Data provided by the HackerNews API
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Rohanvernekarr" target='_blank' rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-500 transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://x.com/Rohanvrnkr" target='_blank' rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-500 transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-500 pt-8 text-center text-sm text-gray-800 dark:text-gray-300">
          <p>© {new Date().getFullYear()} HackerNews Reader. This is not affiliated with Y Combinator.</p>
        </div>
      </div>
    </footer>
  );
}