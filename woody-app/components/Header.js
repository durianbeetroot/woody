import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <nav className="top-0 left-0 right-0 py-4 px-8 md:px-16 bg-1 text-md font-semibold f-2">
        <div className="flex items-center justify-between">
            <div>
                <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover" />
            </div>
            <div className="hidden md:flex space-x-24">
                <Link href="/" className="txt-2 no-underline hover:text-white duration-300">Home</Link>
                <Link href="/products" className="txt-2 no-underline hover:text-white duration-300">Products</Link>
                <Link href="/reviews" className="txt-2 no-underline hover:text-white duration-300">Review</Link>
            </div>
            <div className="md:hidden">
              <svg
                className="w-6 h-6 cursor-pointer text-white"
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
    </nav>
  )
}