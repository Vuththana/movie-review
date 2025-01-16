import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import Item from './Item';

const Navbar: React.FC = () => {
  const title = 'GOROS';

  const movieItems = [
    { label: 'Popular', href: '/movies/popular' },
    { label: 'Now Playing', href: '/movies/now-playing' },
    { label: 'Upcoming', href: '/movies/upcoming' },
    { label: 'Top Rated', href: '/movies/top-rated' },
  ];

  return (
    <nav className="bg-blue-950 text-white shadow-md">
      <div className="sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-shrink-0">
            <Link href="/" className="text-4xl font-bold text-white">
              {title}
            </Link>

            <div className="flex sm:mx-5 items-center space-x-6">
              <div className="relative group">
                <Item title="Movies" items={movieItems} />
              </div>

              <Link href="/about" className="text-white hover:text-gray-300 font-semibold">
                About
              </Link>
            </div>
          </div>

          <div className="md:flex space-x-4">
            <Link
              href="/login"
              className="text-white px-4 py-2 rounded-lg transition duration-300 font-semibold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-white px-4 py-2 rounded-lg transition duration-300 font-semibold"
            >
              Join {title}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
