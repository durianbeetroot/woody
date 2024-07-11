import { Container,Row,Col,Table } from "react-bootstrap";

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
        { id: 1, name: 'Mark', title: 'Great', description: 'Nice Chair I love it', sentiment:null },
        { id: 2, name: 'Jacob', title: 'Awesome', description: 'Wooden style is shit', sentiment:null },
      ];

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
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.name}</td>
                                <td>{review.title}</td>
                                <td>{review.description}</td>
                                <td>{analyzeSentiment(review.description)}</td>
                                <td> 
                                    <button className="btn btn-dark"> Classify </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}