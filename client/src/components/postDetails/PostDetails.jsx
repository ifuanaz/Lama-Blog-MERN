import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/Context';
import http from '../../utils/axios';
import './postDetails.css'

export default function PostDetails() {
    const publicFolder = 'http://localhost:5000/images/';
    const [post, setPost] = useState({});
    const { postId } = useParams();
    const { user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await http.get(`/post/${postId}`);

            setPost(response.data);
        }
        fetchPost();
    }, []);

    const onDeletePost = async () => {
        const isConfirmed = window.confirm('Are you sure you want to delete this post?');

        if (isConfirmed) {
            await http.delete(`/post/${postId}`, {
                data: { author: user.username }
            });
            navigate('/');
        }
    }

    return (
        <div className='postDetails'>
            <div className="postDetailsWrapper">
                {post.image ?
                    <img className='postDetailsImage'
                        src={publicFolder + post.image}
                        alt="image"
                    />
                    :
                    <img className='postDetailsImage'
                        src="/images/image-not-available.jpg"
                        alt="image"
                    />
                }
                <h1 className='postDetailsTitle'>
                    {post.title}
                    {post.author === user.username &&
                        <span className='postDetailsEdit'>
                            <Link to={`/edit/${post._id}`}>
                                <i className="postDetailsIcon edit fa-solid fa-pen-to-square"></i>
                            </Link>
                            <i className="postDetailsIcon delete fa-solid fa-trash-can" onClick={onDeletePost}></i>
                        </span>
                    }
                </h1>
                <div className="postDetailsInfo">
                    <span className='postDetailsAuthor'>
                        Author:
                        <Link to={`/?author=${post.author}`}>
                            <b>{post.author}</b>
                        </Link>
                    </span>
                    <span className='postDetailsDate'>1 hour ago</span>
                </div>
                <p className='postDetailsText'>
                    {post.description}
                </p>
            </div>
        </div>
    )
}
