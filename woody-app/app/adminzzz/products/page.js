'use client'

import { Container,Row,Col,Table } from "react-bootstrap";
import { useEffect,useState } from "react";
import { Pagination } from "react-bootstrap";

import { db } from '@/utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

import dummyProd from '@/dummy/dummyProducts';

export default function Page(){

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const reviewList = [];
            querySnapshot.forEach((doc) => {
                reviewList.push({ id: doc.id, ...doc.data() });
            });
            setReviews(reviewList);
            } catch (error) {
            console.error("Error fetching reviews: ", error);
            }
        };

        fetchReviews();
      }, []);

    const ITEMS_PER_PAGE = 5;
    const [activePage, setActivePage] = useState(1);

    const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

    const displayedReviews = reviews.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
    );

    const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    };

    const dummyDataChange = () =>{
        const dum = new dummyProd();
        setReviews(dum.getData());
    };

    return (
        <Container>
            <Row className="pt-4">
                <h1 className="f-2 font-semibold text-3xl md:text-4xl txt-1 drop-shadow-md"> Products </h1>
            </Row>
            <Row className="pt-4">
                <Col className="bg-white p-2 rounded-lg shadow-xl overflow-x-auto">
                    <Table striped bordered hover className="f-2 w-full min-w-max text-xs md:text-base">
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Item Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedReviews.map((review, index) => (
                                <tr key={index}>
                                <td>{(activePage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                                <td>{review.name}</td>
                                <td>{review.type}</td>
                                <td>{review.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination className="justify-content-center mt-4">
                        <Pagination.Prev
                        onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : 1)}
                        />
                        {[...Array(totalPages)].map((_, index) => (
                        <Pagination.Item
                            key={index}
                            active={index + 1 === activePage}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                        ))}
                        <Pagination.Next
                        onClick={() => handlePageChange(activePage < totalPages ? activePage + 1 : totalPages)}
                        />
                    </Pagination>
                </Col>
            </Row>
            <div className='px-16 pt-2 flex justify-end'>
                <button className='f-2 p-2 px-4 text-2xl font-semibold btn-dum duration-300' onClick={dummyDataChange}> Dummy Data </button>
            </div>
        </Container>
    )
}