import React, { useState } from 'react';
import useSignup from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom';

import "./Signup.css"
const Signup = () => {
    let count = 0;
    const navigate = useNavigate();
    const [image , setImage ] = useState('')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [success ,setSuccess] = useState(false);
    const {signup , error ,successValue} = useSignup()
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    async function handleSubmit(e) {
        e.preventDefault();
        if(!email.match(emailRegex) || !password.match(passwordRegex)){
            return 
        }
        await signup(name.trim(),email,password , image)
    }

    return (
        <div className='login'>
            <h2 >Sign Up</h2>
            <p className='error'>{error}</p>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor='name'><b>Name</b>
                    <input type='text' name='name' placeholder='Name'
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                        required />
                </label>
                <label htmlFor='email'><b>Email</b>
                    <input type='text' name='Email' placeholder='Email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }}

                        required />
                    <p className='inputError' style={{ display: email && !email.match(emailRegex) ? 'block' : 'none' }}>Please enter a valid   email address</p>
                </label>
                <label htmlFor='password'><b>Password</b>
                    <input type='password' name='password' placeholder='Password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                        required />
                    <p className='inputError' style={{ display: password && !password.match(passwordRegex) ? 'block' : 'none' }}>Please enter a valid   Strong Password Must be 8 or More characters and contain at least 1 number and 1 special character</p>

                </label>
                <label >
                    <b>Photo</b> 
                    <input type='file' name='image' alt='image' onChange={(e)=>{
                        setImage(e.target.files[0])
                        console.log(image)
                        }} />
                </label>
                <p className='success' style={{display:(!error ) ?'block':'none'}}>Success</p>
                <button className='btn'>Sign up</button>

            </form>
        </div>
    );
}

export default Signup;
