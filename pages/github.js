import Layout from "../components/Layout";
import { Row, Col, Card } from 'react-bootstrap';


const Github = ({ user }) => {
    console.log(user)
    return (
        <Layout>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body className="text-center">
                            <h1>{user.name}</h1>
                            <img src={user.avatar_url} alt="" />
                            <p className="py-3">{user.bio}</p>
                            <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2 w-100">My Blog</a>
                            <a href={user.html_url} target="_blank" className="btn btn-outline-secondary w-100">Go to Github</a>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/LucaSebastian89');
    const data = await res.json();
    console.log(data);
    return {
        props: {
            user: data
        }
    }
}

export default Github;