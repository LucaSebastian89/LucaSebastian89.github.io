import Layout from "../components/Layout";
import { posts } from "../profile";
import { Card, Col, Row, Button } from "react-bootstrap";
import Link from 'next/link';

const PostCard = ({ post }) => {
    
    return (
    <Col md={4}>
        <Card>
            <div className="overflow">
                <Card.Img variant="top" src={post.imageUrl} />
            </div>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Link href={`/post?title=${post.title}`} as={`post/${post.title}`}>
                    <Button variant="outline-info">Read</Button>
                </Link>
            </Card.Body>
        </Card>
    </Col>
)}

const Blog = () => {
    return (
        <Layout footer={false} title="My Blog" >
            <Row md={12}>
                {posts.map((post, index) => (
                    <PostCard post={post} key={index} />
                ))
                }
            </Row>
        </Layout>
    )
}

export default Blog;