'use client'

import Link from 'next/link';
import { Container, Row, Col} from 'react-bootstrap';
import Image from "next/image";
import { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import ThreeLoader from '@/components/ThreeLoader';

const Layout = ({ children }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={1} className="fixed inset-y-0 left-0 w-64 bg-white shadow-md h-screen transform md:translate-x-0 -translate-x-full md:relative d-flex flex-column align-items-center justify-content-start" 
            style={{ 
                    backgroundImage: `url(${"/img/shade.png" })`,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
            }}>
             <div className="d-flex flex-column align-items-center pt-4 space-y-3 w-full">
                <div className="relative w-full h-[10vh] flex items-start overflow-hidden">
                  <div className="w-full h-full">
                    <Canvas style={{ width: '100%', height: '20vh' }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                      <ThreeLoader path="/models/cust.glb" />
                    </Canvas>
                  </div>
                </div>
                <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover pb-4"/>
                <Link href="/adminzzz" className="f-2 py-1 text-sm no-underline txt-sidebar duration-300 w-full text-center">Dashboard</Link>
                <Link href="/adminzzz/products" className="f-2 py-1 text-sm no-underline txt-sidebar duration-300 w-full text-center">Products</Link>
                <Link href="/adminzzz/reviews" className="f-2 py-1 text-sm no-underline txt-sidebar duration-300 w-full text-center">Reviews</Link>
            </div>
        </Col>
        <nav className="top-0 left-0 right-0 py-4 px-8 md:px-16 bg-1 text-md font-semibold f-2 drop-shadow-2xl md:hidden"
        style={{ backgroundImage: `url('/img/shade.png')` }}>
          <div className="flex items-center justify-between">
              <div>
                  <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-cover" />
              </div>
              <div className="relative w-full h-[20vh] flex items-start overflow-hidden">
                  <div className="w-full h-full">
                    <Canvas style={{ width: '100%', height: '30vh' }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                      <ThreeLoader path="/models/cust.glb" />
                    </Canvas>
                  </div>
                </div>
              <div className="md:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </div>
          </div>
          {menuOpen && (
          <div className="md:hidden">
                <ul className="flex flex-col items-center mt-4 space-y-4">
                  <Link href="/adminzzz" className="f-2 text-white no-underline hover:text-white duration-300">Home</Link>
                  <Link href="/adminzzz/products" className="f-2 text-white no-underline hover:text-white duration-300">Products</Link>
                  <Link href="/adminzzz/reviews" className="f-2 text-white no-underline hover:text-white duration-300">Reviews</Link>
                </ul>
              </div>
            )}
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