import { Container,Row,Col,Table } from "react-bootstrap";

export default function Page(){

    const reviews = [
        { id: 1, name: 'Mark', title: 'Great', description: 'Nice Chair I love it' },
        { id: 2, name: 'Jacob', title: 'Awesome', description: 'Wooden style really fits my inner room' },
      ];

    return (
        <Container>
            <Row className="pt-4">
                <h1 className="f-2 font-semibold text-4xl txt-1 drop-shadow-md"> Reviews </h1>
            </Row>
            <Row className="pt-4">
                <Col className="bg-white p-2 rounded-lg shadow-xl">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.name}</td>
                                <td>{review.title}</td>
                                <td>{review.description}</td>
                            </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}