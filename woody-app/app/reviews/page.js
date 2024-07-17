import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Container,Row,Col } from 'react-bootstrap';

export default function Page(){
    return (
        <div className="bg-1">
            <Header />
            <Hero 
                backgroundImage="/img/img3.png" 
                text1="Reviews" 
                text2="Welcome to the Customer Reviews section of Woody-App. Here, you can read authentic feedback from our users. Their experiences and insights help us continuously improve and provide the best service possible. Explore what our customers have to say about Woody-App." 
            />
            <Container fluid className='py-12'>
                <Row className='px-16'>
                    <Col md={12} className='review-border pt-8 pb-2'>
                        <h1 className="f-2 text-5xl txt-2 font-semibold text-center">
                            Quality Exceeded
                        </h1>
                        <h1 className="f-1 w-5/6 text-sm text-white text-center pt-12 mx-auto">
                        I recently purchased a dining table from Woody-App, and I couldn't be happier with the quality and craftsmanship. The wood is beautiful and durable, and the design fits perfectly with my home's decor. The customer service was excellent, providing helpful advice and updates throughout the purchasing process. Delivery was on time and the table was easy to assemble. Woody-App exceeded my expectations and I recommend their furniture to anyone looking for stylish and high-quality pieces.
                        </h1>
                        <h1 className="f-2 text-4xl text-white font-semibold text-center pt-16 mx-auto">
                        Sylvia Silver, 2024
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='py-12 bg-3'>
                <Row className='px-16'>
                    <Col md={12}>
                        <h1 className="f-2 text-5xl text-white font-semibold">
                            Wants to  Provide Us Testimony?
                        </h1>
                    </Col>
                </Row>
                <form>
                    <Row className='pt-6 px-16'>
                        <Col md={6} className='py-2'>
                            <input placeholder="Your Name" className='f-2 bg-1 rounded txt-2 text-2xl p-3 w-full'></input>
                        </Col>
                        <Col md={6} className='py-2'>
                            <input placeholder="Review Title" className='f-2 bg-1 rounded txt-2 text-2xl p-3 w-full'></input>
                        </Col>
                        <Col md={12} className='py-2'>
                            <textarea placeholder="Full Review" className='f-2 bg-1 rounded txt-2 text-2xl p-3 w-full h-96'></textarea>
                        </Col>
                    </Row>
                    <div className='px-16 pt-2 flex justify-end'>
                        <button className='f-2 p-2 px-4 text-2xl font-semibold btn-review duration-300'> Submit </button>
                    </div>
                </form>
            </Container>
        </div>
    )
}