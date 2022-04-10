import PostDetails from '../../components/postDetails/PostDetails'
import Sidebar from '../../components/sidebar/Sidebar'
import './details.css'

export default function Details() {
  return (
    <div className='details'>
        <PostDetails />
        <Sidebar />
    </div>
  )
}
