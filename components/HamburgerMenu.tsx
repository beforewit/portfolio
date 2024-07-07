'use client'


import { useState } from 'react';
import Link from 'next/link';


const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex flex-col justify-around w-8 h-6 cursor-pointer">
        <div className="w-full h-1 bg-gray-800 rounded-sm"></div>
        <div className="w-full h-1 bg-gray-800 rounded-sm"></div>
        <div className="w-full h-1 bg-gray-800 rounded-sm"></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 z-10 flex flex-col bg-white shadow-md top-8">
          <Link href="/page1">
            <div className="px-4 py-2 hover:bg-gray-200">Menu Item 1</div>
          </Link>
          <Link href="/page2">
            <div className="px-4 py-2 hover:bg-gray-200">Menu Item 2</div>
          </Link>
          <Link href="/page3">
            <div className="px-4 py-2 hover:bg-gray-200">Menu Item 3</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
