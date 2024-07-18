import Link from 'next/link';
import { Container, Row, Col} from 'react-bootstrap';
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={1} className="vh-100 d-flex flex-column align-items-center justify-content-start" 
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