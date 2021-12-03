import Layout from "../components/Layout";
import { Card, Row, Col, Button } from 'react-bootstrap';
import Link from "next/link";
import { skills, experiences, projects } from '../profile';
import SkillBar from "../components/SkillBar";

const Index = () => (
    <Layout>
        {/**Header Card */}
        <Row as="header">
            <Col md={12}>
                <Card bg="dark" text="light">
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <img src="profile3.jpg" alt="" className="img-fluid" />
                            </Col>
                            <Col md={8}>
                                <h1>Lucas Sebastian Cabrera</h1>
                                <h3>Fullstack Developer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorem. Quod, est fuga necessitatibus quis magnam praesentium molestiae neque sed, impedit, adipisci mollitia et porro vitae laboriosam asperiores? Commodi, non!</p>
                                <Link href="/hireme">
                                    <Button variant="outline-light" size="sm">
                                        Hire me!
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/**Second Section */}
        <Row className="py-2">
            <Col md={4}>
                <Card className="h-100" bg="light">
                    <Card.Body>
                        <h1>Skills</h1>
                        {
                            skills.map((skill, index) => (
                                <SkillBar
                                    key={index}
                                    skillName={skill.skill}
                                    skillValue={skill.percentage} />
                            ))
                        }
                    </Card.Body>
                </Card>
            </Col>
            <Col md={8}>
                <Card bg="light">
                    <Card.Body>
                        <h1>Experiencie</h1>

                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>

                        <Link href="/experiences">
                            <Button variant="outline-secondary">Know more</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/** Seccion Portfolio */}

        <Row as="section">
            <Col md={12}>
                <Card bg="dark" className="py-2">
                    <Card.Title>
                        <h1 className="text-center text-light">Portfolio</h1>
                    </Card.Title>
                    <Card.Body>
                        <Row>
                            {projects.map(({name, description, image}, i) => (
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
                    <Card.Footer className="text-center">
                        <Link href="/portfolio">
                            <Button variant="outline-light">More Projects</Button>
                        </Link>
                    </Card.Footer>
                </Card>

            </Col>
        </Row>


    </Layout>
)

export default Index;