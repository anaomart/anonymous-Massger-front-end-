import React, { useState } from 'react';
import './Login.css'
import useLogin from '../hooks/useLogin';
import { Link } from 'react-router-dom';
const Login = () => {
    const {Login , error} = useLogin();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        Login({email, password})
    }
    return (
        <div className='signup'>
            <h2 > Login</h2>
            <p className='error'>{error}</p>

            <form className='signupForm' onSubmit={handleSubmit}>
                <label htmlFor='email' > <b>Email</b>
                    <input type='text' name='email' placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label htmlFor='password' > <b>Password</b>
                    <input type='password' name='password' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <Link  to='/forgetPassword' className='forgetPassword'>Forget Password ?</Link>
                <button className='btn'>Login </button>

            </form>
        </div>
    );
}

export default Login;
