import Layout from "../components/Layout";
import { Container, Col, Row, Card } from "react-bootstrap";
import { projects } from "../profile";

const Portfolio = () => (
    <Layout>
        <Container>
            <Row as="section">
                <Col md={12}>
                    <Card bg="dark" className="py-2">
                        <Card.Title>
                            <h1 className="text-center text-light">Portfolio</h1>
                        </Card.Title>
                        <Card.Body>
                            <Row>
                                {projects.map(({ name, description, image }, i) => (
                                    <Col md={4} className="py-2" key={i}>
                                        <Card className="h-100">
                                            <div className="overflow">
                                                <Card.Img variant="top" src={image} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{name}</Card.Title>
                                                <Card.Text>{description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Layout>
)

export default Portfolio;