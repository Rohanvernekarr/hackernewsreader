"use client";

import Link from 'next/link';
import { FaHackerNews } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
         
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <FaHackerNews className="h-8 w-8 text-gray-700 dark:text-gray-300" />
              <span className="text-2xl md:2xl lg:text-3xl font-serif text-gray-800 dark:text-gray-200 ">
                HackerNews Reader
              </span>
            </Link>
          </div>

        
          <div className="hidden md:flex font-serif items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300 ">
              Top Stories
            </Link>
            <Link href="/?type=new" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300">
              New
            </Link>
            <Link href="/?type=best" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300">
              Best
            </Link>
            <Link href="/?type=ask" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300">
              Ask HN
            </Link>
            <Link href="/?type=show" className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300">
              Show HN
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300 focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

         
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-gray-600 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-300 focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-zinc-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-serif">
              <Link href="/" className="block text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 px-3 py-2 rounded-md">
                Top Stories
              </Link>
              <Link href="/?type=new" className="block text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 px-3 py-2 rounded-md">
                New
              </Link>
              <Link href="/?type=best" className="block text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 px-3 py-2 rounded-md">
                Best
              </Link>
              <Link href="/?type=ask" className="block text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 px-3 py-2 rounded-md">
                Ask HN
              </Link>
              <Link href="/?type=show" className="block text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-800 px-3 py-2 rounded-md">
                Show HN
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}