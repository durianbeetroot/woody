import {Col,Container,Row} from 'react-bootstrap';
export default function Hero({ backgroundImage, text1, text2 }) {
    return (
        <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"> </div>
            <Container fluid className='pb-24'>
                <Row className='pt-24 px-16'>
                    <Col md={7} className="flex flex=col justify-center">
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-7xl font-bold mb-4 txt-2 f-2 drop-shadow-lg">{text1}</h1>
                            <p className="text-s md:text-md f-1 w-3/4">{text2}</p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }