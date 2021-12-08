import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import { posts } from '../profile';

const Post = () => {
    const router = useRouter();
    const currentPost = posts.filter(post => post.title === router.query.title)[0]
    console.log(currentPost);
    if (!currentPost) return null
    return (
    <Layout footer={false}>
        <div className="text-center py-3">
            <h1>{currentPost.title}</h1>
            <img src={currentPost.imageUrl} alt="" className="img-fluid" style={{width: '50%'}} />
            <p>{currentPost.content}</p>
        </div>
    </Layout>
)}

export default Post;