'use client'

import { Container,Row,Col,Table } from "react-bootstrap";
import { useState } from "react";
import { Pagination } from "react-bootstrap";

export default function Page(){

    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();

    const analyzeSentiment = (statement) => {
    const result = sentiment.analyze(statement);
    if (result.score > 0) {
        return 'Good';
    } else if (result.score < 0) {
        return 'Bad';
    } else {
        return 'Neutral';
    }
    };

    const reviews = [
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
        { name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
      ];

    const ITEMS_PER_PAGE = 10;
    const [activePage, setActivePage] = useState(1);

    const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

    const displayedReviews = reviews.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
    );

    const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    };

    return (
        <Container>
            <Row className="pt-4">
                <h1 className="f-2 font-semibold text-4xl txt-1 drop-shadow-md"> Reviews </h1>
            </Row>
            <Row className="pt-4">
                <Col className="bg-white p-2 rounded-lg shadow-xl">
                    <Table striped bordered hover className="f-2">
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Sentiment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedReviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{(activePage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                                <td>{review.name}</td>
                                <td>{review.title}</td>
                                <td>{review.description}</td>
                                <td>{analyzeSentiment(review.description)}</td>
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
        </Container>
    )
}