import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import http from '../../utils/axios'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log('searchParams: ', searchParams.get('author'));

  useEffect(() => {
    const fetchPosts = async () => {
      let response;

      if (searchParams.get('author')) {
        response = await http.get(`/post`, {
          params: {
            author: searchParams.get('author')
          }
        });
      } else if (searchParams.get('category')) {
        response = await http.get(`/post`, {
          params: {
            category: searchParams.get('category')
          }
        });
      } else {
        response = await http.get(`/post`);
      }

      setPosts(response.data);
    }
    fetchPosts();
  }, [searchParams]);

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}
