import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer'
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const borderstyle = {
    border: "2px solid white",
    borderRadius: "25px"
}

export default function Page() {
    return (
        <div className="bg-1">
            <Header />
            <Hero
                backgroundImage="/img/img3.png"
                text1="Reviews"
                text2="Welcome to the Customer Reviews section of Woody-App. Here, you can read authentic feedback from our users. Their experiences and insights help us continuously improve and provide the best service possible. Explore what our customers have to say about Woody-App."
            />
            <Container fluid calssName="pb-24">
                <Row className='pt-24 px-16'>
                    <Col className="flex flex-col justify-center relative h-[80vh] text-center" style={borderstyle}>
                        <h1 className="f-2 text-6xl font-semibold txt-2">
                            Quality Exceeded
                        </h1><br />
                        <h1 className="f-2 text-sm text-white text-center">
                            "I recently purchased a dining table from Woody-App, and I
                            couldn't be happier with the quality and
                            craftsmanship. The wood is beautiful and
                            durable, and the design fits perfectly with my
                            home's decor. The customer service was excellent,
                            providing helpful advice and updates throughout
                            the purchasing process. Delivery was on time
                            and the table was easy to assemble. Woody-App
                            exceeded my expectations and I recommend their
                            furniture to anyone looking for stylish and
                            high-quality pieces."
                        </h1><br />
                        <h1 className="f-2 text-4xl font-semibold text-white">
                            Sylvia Silver, 2024
                        </h1>
                    </Col>
                </Row>
                <Row className='pt-24 px-16'>
                    <Col className="flex flex-col justify-center relative h-[80vh] text-center" style={borderstyle}>
                        <h1 className="f-2 text-6xl font-semibold txt-2">
                            Quality Exceeded
                        </h1><br />
                        <h1 className="f-2 text-sm text-white text-center">
                            "I recently purchased a dining table from Woody-App, and I
                            couldn't be happier with the quality and
                            craftsmanship. The wood is beautiful and
                            durable, and the design fits perfectly with my
                            home's decor. The customer service was excellent,
                            providing helpful advice and updates throughout
                            the purchasing process. Delivery was on time
                            and the table was easy to assemble. Woody-App
                            exceeded my expectations and I recommend their
                            furniture to anyone looking for stylish and
                            high-quality pieces."
                        </h1><br />
                        <h1 className="f-2 text-4xl font-semibold text-white">
                            Sylvia Silver, 2024
                        </h1>
                    </Col>
                </Row>
                <Row className='pt-24 px-16'></Row>
            </Container>
            <Footer
                backgroundImage="img/footer.jpg"
            />
        </div>

    )
}