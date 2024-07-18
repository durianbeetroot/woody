import {Col,Container,Row} from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${"/img/shadeColor.png" })` }}>
            <div className="absolute inset-0 bg-black opacity-30"> </div>
            <Container fluid>
                <Row className="px-16 sm:space-x-24 justify-content-center pt-12">
                    <Col xs="auto" className='z-10'>
                        <Link href="/" className="f-2 text-sm sm:text-lg text-white hover:font-semibold no-underline duration-300">Home</Link>
                    </Col>
                    <Col xs="auto" className='z-10'>
                        <Link href="/products" className="f-2 text-sm sm:text-lg text-white hover:font-semibold no-underline duration-300">Products</Link>
                    </Col>
                    <Col xs="auto" className='z-10'>
                        <Link href="/reviews" className="f-2 text-sm sm:text-lg text-white hover:font-semibold no-underline duration-300">Review</Link>
                    </Col>
                </Row>
                <Row className="px-16 space-x-24 justify-content-center pt-8">
                    <Col xs="auto" className='z-10'>
                        <h1 className="f-2 text-sm text-white no-underline duration-300"> COPYRIGHT © 2024</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }