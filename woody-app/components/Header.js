import { Container,Row, Col } from "react-bootstrap";
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <nav className="top-0 left-0 right-0 py-4 px-16 shadow-md bg-1 txt-2 text-md font-semibold f-2">
        <div className="flex items-center justify-between">
            <div>
                <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover" />
            </div>
            <div>
                <Link href="/" className="px-8 hover:text-white duration-300">Home</Link>
                <Link href="/" className="px-8 hover:text-white duration-300">Products</Link>
                <Link href="/" className="px-8 hover:text-white duration-300">Review</Link>
            </div>
        </div>
    </nav>
  )
}