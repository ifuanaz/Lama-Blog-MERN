import Post from '../post/Post'
import './posts.css'

export default function Posts(props) {
  // const posts = props.posts.map(post => {
  //   return <Post key={post._id} />
  // });

  return (
    <div className='posts'>
      {props.posts.length ? (
        props.posts.map((post, index) => (
          <Post key={index} post={post} />
        ))
      ) : (
        // TODO::Create a new child component for not found block
        <div>
          Posts not found...
        </div>
      )}

      {/* {props.posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}

      {/* {posts} */}

      {/* {props.posts.map((p) => {
        <Post />
      })} */}
    </div>
  )
}
