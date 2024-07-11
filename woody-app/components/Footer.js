import Link from 'next/link';
import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer({ backgroundImage }) {
    return (
        <footer className="relative h-[30vh] bg-center top-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"> </div>
            <div className="text-white text-center">
                <Container fluid>
                    <Row className='pt-8'>
                        <Col md={4} className="flex flex=col justify-center">
                            <Link href="/" className="text-s md:text-md f-1 no-underline text-white">
                                <i className="bi bi-facebook"></i>
                            </Link>
                        </Col>
                        <Col md={4} className="flex flex=col justify-center">
                            <Link href="/" className="text-s md:text-md f-1 no-underline text-white">
                                <i className="bi bi-twitter-x"></i>
                            </Link>
                        </Col>
                        <Col md={4} className="flex flex=col justify-center">
                            <Link href="/" className="text-s md:text-md f-1 no-underline text-white">
                                <i className="bi bi-instagram"></i>
                            </Link>
                        </Col>
                    </Row>
                    <Row className='pt-8'>
                        <Col md={4} className="flex flex=col justify-center">
                            <Link href="/" className="text-s md:text-md f-1 no-underline text-white">Home</Link>
                        </Col>
                        <Col md={4} className="flex flex=col justify-center">
                            <Link href="/" className="text-s md:text-md f-1 no-underline text-white">Products</Link>
                        </Col>
                        <Col md={4} className="flex flex=col justify-center">
                            <Link href="/" className="text-s md:text-md f-1 no-underline text-white">Reviews</Link>
                        </Col>
                    </Row>
                    <Row className="pt-8">
                        <Col className="flex flex=col justify-center">
                            <Link href="" className="text-s md:text-md f-1 no-underline text-white">
                                Copyright @ 2024
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}