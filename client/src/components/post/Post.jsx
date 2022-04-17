import { Link } from 'react-router-dom'
import './post.css'

export default function Post({ post }) {
    const publicFolder = 'http://localhost:5000/images/';

    return (
        <article className='post'>
            {post.image ?
                <img className='postImage' src={publicFolder + post.image} alt="image" />
                :
                <img className='postImage' src="/images/image-not-available.jpg" alt="image" />
            }
            <div className="postInfo">
                <div className="postCategories">
                    {post.categories.map((category, index) => (
                        // Category should be as an object
                        <span className="postCategory" key={index}>
                            {category}
                        </span>
                    ))}
                </div>
                <h2 className='postTitle'>
                    <Link to={`/post/${post._id}`}>
                        {post.title}
                    </Link>
                </h2>
                <hr />
                <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className='postText'>
                {post.description}
            </p>
        </article>
    )
}
