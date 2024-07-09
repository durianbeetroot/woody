import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Link from 'next/link';
import {Col,Container,Row} from'react-bootstrap';

export default function Page(){
    return (
        <div className="bg-1">
            <Header />
            <Hero 
                backgroundImage="/img/img2.png" 
                text1="Our Products" 
                text2="Woody offers top-quality wood furniture craftsmanship, with years of experience.From custom-built pieces to beautifully crafted solid oak furniture, we meet all your wood furniture needs."
            />
            <Container fluid className='pb-24'>
                <Row className='pt-24 px-16'>
                    <Col md={7} className='flex flex-col justify-center'>
                        <h1 className="f-2 text-6xl text-white font-semibold">
                            CATEGORIES
                        </h1>
                    </Col>
                    <Col md={7} className="invisible">aa</Col>
                    <Col md={7} className='flex flex-col justify-center'>
                        <div className="hidden md:flex space-x-24">
                            <Link href="/chair"className="txt-2 no-underline hover:text-white duration-300">Chair</Link>
                            <Link href="/table"className="txt-2 no-underline hover:text-white duration-300">Table</Link>
                            <Link href="/others"className="txt-2 no-underline hover:text-white duration-300">Others</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}