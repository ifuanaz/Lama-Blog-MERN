import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import http from '../../utils/axios';
import './login.css'

export default function Login() {
	const nameRef = useRef();
	const passwordRef = useRef();
	const {dispatch, isFetching} = useContext(Context);

	const handleSubmit = async (event) => {
		event.preventDefault();

		dispatch({type: 'LOGIN_START'});

		try {
			const name = nameRef.current.value;
			const password = passwordRef.current.value;
	
			// console.log('credits: ', name, password);
			const response = await http.post('/auth/login', {
				username: name,
				password: password
			});

			// console.log('login response: ', response);
			if (response.data) {
				dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
			}

		} catch(error) {
			dispatch({type: 'LOGIN_FAILURE'});
		}
	}

	return (
		<div className='login'>
			<h1 className='loginTitle'>Login</h1>
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					placeholder='Enter your username...'
					ref={nameRef}
				/>
				<label>Password</label>
				<input
					type="password"
					placeholder='Enter your password...'
					ref={passwordRef}
				/>
				<button
					className="loginButton"
					type='submit'
					disabled={isFetching}
				>
					Login
				</button>
			</form>
			<button className='loginRegisterButton'>
				<Link to={'/register'}>Register</Link>
			</button>
		</div>
	)
}
