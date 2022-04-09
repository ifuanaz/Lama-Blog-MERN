import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
    const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li className='topListItem'>
                    <Link to={'/about'}>ABOUT</Link>
                </li>
                <li className='topListItem'>
                    <Link to={'/contact'}>CONTACT</Link>
                </li>
                <li className='topListItem'>
                    <Link to={'/write'}>WRITE</Link>
                </li>

                {user && <li className='topListItem'>LOGOUT</li>}

                {/* <li className='topListItem'>
                    {user && 'LOGOUT'}
                    <Link to={'/logout'}>LOGOUT</Link>
                </li> */}

                {/* <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li> */}

                
                {/* <Link to={'/'}>
                    <li className='topListItem'>HOME</li>
                </Link>
                <Link to={'/about'}>
                    <li className='topListItem'>ABOUT</li>
                </Link>
                <Link to={'/contact'}>
                    <li className='topListItem'>CONTACT</li>
                </Link>
                <Link to={'/write'}>
                    <li className='topListItem'>WRITE</li>
                </Link>
                <Link to={'/logout'}>
                    <li className='topListItem'>LOGOUT</li>
                </Link> */}
            </ul>
        </div>
        <div className="topRight">
            {user ? (
                <img className='topImage' src="https://cdn-icons-png.flaticon.com/512/146/146025.png" alt="avatar" />
            ) : (
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to={'/register'}>Register</Link>
                    </li>
                </ul>
            )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
