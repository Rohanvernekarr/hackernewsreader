// app/components/Navbar.tsx
import Link from 'next/link';
import { FaHackerNews } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <FaHackerNews className="h-8 w-8 text-hn-orange" />
              <span className="font-bold text-xl text-gray-200">HackerNews Reader</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link">Top Stories</Link>
            <Link href="/?type=new" className="nav-link">New</Link>
            <Link href="/?type=best" className="nav-link">Best</Link>
            <Link href="/?type=ask" className="nav-link">Ask HN</Link>
            <Link href="/?type=show" className="nav-link">Show HN</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button title='click' className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}