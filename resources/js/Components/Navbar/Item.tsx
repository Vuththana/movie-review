// DropdownMenu.tsx

import React from 'react';
import { Link } from '@inertiajs/inertia-react';

interface DropdownMenuProps {
  title: string;
  items: { label: string; href: string }[];
}

const Item: React.FC<DropdownMenuProps> = ({ title, items }) => {
  return (
    <div className="relative group">
      {/* Dropdown Trigger (Movies link) */}
      <button className="text-white hover:text-gray-300 font-semibold focus:outline-none">
        {title}
      </button>

      {/* Dropdown Menu */}
      <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-40 z-10 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
        <ul className="py-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Item;
