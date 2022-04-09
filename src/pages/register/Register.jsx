import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <h1 className='registerTitle'>Register</h1>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" placeholder='Enter your username...' />
            <label>Email</label>
            <input type="email" placeholder='Enter your email...' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password...' />
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link to={'/login'}>Back to Login</Link>
        </button>
    </div>
  )
}
