'use client'

import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-0 left-0 right-0 py-4 px-8 md:px-16 bg-1 text-md font-semibold f-2">
        <div className="flex items-center justify-between">
            <div>
                <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover" />
            </div>
            <div className="hidden md:flex space-x-24">
                <Link href="/" className="txt-2 no-underline hover:text-white duration-300">Home</Link>
                <Link href="/products" className="txt-2 no-underline hover:text-white duration-300">Products</Link>
                <Link href="/reviews" className="txt-2 no-underline hover:text-white duration-300">Reviews</Link>
            </div>
            <div className="md:hidden" onClick={toggleMenu}>
              <svg
                className="w-8 h-8 cursor-pointer txt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
        </div>
        {menuOpen && (
        <div className="md:hidden">
              <ul className="flex flex-col items-center mt-4 py-4 space-y-4">
                <Link href="/" className="txt-2 no-underline hover:text-white duration-300">Home</Link>
                <Link href="/products" className="txt-2 no-underline hover:text-white duration-300">Products</Link>
                <Link href="/reviews" className="txt-2 no-underline hover:text-white duration-300">Reviews</Link>
              </ul>
            </div>
          )}
    </nav>
  )
}