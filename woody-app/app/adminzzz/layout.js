'use client'

import Link from 'next/link';
import { Container, Row, Col} from 'react-bootstrap';
import Image from "next/image";
import { useState } from 'react';

const Layout = ({ children }) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);

  return (
    <Container fluid>
      <Row>
        <Col md={1} className="fixed inset-y-0 left-0 w-64 bg-white shadow-md h-screen transform md:translate-x-0 -translate-x-full md:relative d-flex flex-column align-items-center justify-content-start" 
            style={{ 
                    backgroundImage: `url(${"/img/shade.png" })`,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
            }}>
             <div className="d-flex flex-column align-items-center pt-4 space-y-3 w-full">
                <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover pb-4"/>
                <Link href="/adminzzz" className="f-2 py-1 text-sm no-underline txt-sidebar duration-300 w-full text-center">Dashboard</Link>
                <Link href="/adminzzz/products" className="f-2 py-1 text-sm no-underline txt-sidebar duration-300 w-full text-center">Products</Link>
                <Link href="/adminzzz/reviews" className="f-2 py-1 text-sm no-underline txt-sidebar duration-300 w-full text-center">Reviews</Link>
            </div>
        </Col>
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 md:hidden">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover"/>
              <span className="ml-2 text-xl font-bold">Your App</span>
            </div>
            <button
              className="p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className={`bg-white shadow-md ${isNavOpen ? 'block' : 'hidden'}`}>
            <Link href="/adminzzz" className='block py-2 px-4 text-center text-gray-700 hover:bg-gray-100'>
              Dashboard
            </Link>
          </div>
        </nav>
        <Col md={11}
        style={{ 
          backgroundImage: `url(${"/img/shadeWhite.png" })`
      }}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;