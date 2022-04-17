import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

export default function TopBar() {
    const publicFolder = 'http://localhost:5000/images/profiles/';
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }

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
                    {
                        user &&
                        <li className='topListItem'>
                            <Link to={'/create'}>WRITE</Link>
                        </li>
                    }
                    {
                        user &&
                        <li className='topListItem' onClick={handleLogout}>LOGOUT</li>
                    }

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
                    <Link to={'/settings'}>
                        {user.profileImage ?
                            <img
                                className='topImage'
                                src={publicFolder + user.profileImage}
                                alt="avatar"
                            />
                            :
                            <img
                                className='topImage'
                                src={'/images/profile.png'}
                                alt="avatar"
                            />
                        }
                    </Link>
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
