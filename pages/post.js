import Layout from "../components/Layout";
import { useRouter } from 'next/router';
import { posts } from '../profile';

const Post = () => {
    const router = useRouter();
    const currentPost = posts.filter(post => post.title === router.query.title)[0]
    
    return (
    <Layout footer={false} title={currentPost.title}>
        <div className="text-center py-3">
            <img src={currentPost.imageUrl} alt="" className="img-fluid" style={{width: '50%'}} />
            <p>{currentPost.content}</p>
        </div>
    </Layout>
)}

export default Post;