import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function Page() {

  return (
    <div className='bg-1'>
      <Header />
      <Hero
        backgroundImage="/img/img1.png"
        text1="Professional Wood Furniture"
        text2="Woody has been a leading provider of wood furniture craftsmanship for many years. From custom-built pieces to beautifully crafted solid oak furniture, we have all your wood furniture needs covered. "
      />
      <Container fluid className='pb-24'>
        <Row className='pt-24 px-16'>
          <Col md={7} className="flex flex-col justify-center">
            <h1 className="f-2 text-6xl text-white font-semibold">
              WE SPECIALIZE IN WOOD FURNITURE
            </h1>
            <h1 className="f-1 text-sm text-white mt-6 w-3/4">
              We are very happy to provide quotes for any type of wood furniture craftsmanship, whether it's for indoor or outdoor projects. With many years of experience in the local area, we have hundreds of satisfied customers who love our work.
            </h1>
            <Link href="/products" className="flex flex-col justify-center my-6 h-12 w-36 f-2 text-xl font-semibold btn-home-1 duration-300">
              PRODUCTS
            </Link>
          </Col>
          <Col md={5} className="flex justify-center items-center">
            <img
              src="/img/home1.jpg"
              alt="Pic 1"
              className="rounded-lg shadow-md object-cover w-[30rem] h-[40rem]"
            />
          </Col>
        </Row>
        <Row className='pt-24 px-16'>
          <Col md={5} className="flex justify-center items-center">
            <img
              src="/img/home1.jpg"
              alt="Pic 1"
              className="rounded-lg shadow-md object-cover w-[30rem] h-[40rem]"
            />
          </Col>
          <Col md={7} className="flex flex-col justify-center">
            <h1 className="f-2 text-6xl text-white font-semibold">
              CHAIR SUPPLIED AND ASSEMBLED
            </h1>
            <h1 className="f-1 text-sm text-white mt-6 w-3/4">
              We can supply and assemble a wide range of wood furniture from various suppliers, both locally and nationally sourced. Alternatively, you buy it, and we’ll assemble it. The choice is yours.
            </h1>
            <Link href="/reviews" className="flex flex-col justify-center my-6 h-12 w-36 f-2 text-xl font-semibold btn-home-1 duration-300">
              REVIEWS
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer
        backgroundImage="/img/footer.jpg"
      />
    </div>
  );
}