import React from 'react'
import "./ForgetPassword.css"
import { useState } from 'react';
export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message  , setMessage] = useState('')
    const url = 'https://anonymous-massger-back-end.onrender.com/'
    async function handleClick(e) {
        e.preventDefault();
        let response = await fetch(url + 'user/passwordRecovery', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({email})
        })
        let json = await response.json()
        setMessage(json.message)
        console.log(json.message)
    }
    const style = {
        input: {
            border: '1px solid #38bdf8',
            margin: '200px auto  0 auto',
            width: '50%',
            borderRadius: '19px',
            padding: '10px 25px',
        }
        , btn: {
            padding: '10px 30px',
            margin: '10px',
            borderRadius: '50px',
            background: '#38bdf8',
            border: 0,
            cursor:'pointer'
        },
        message:{
            background: '#38bdf8',
            padding: '10px 25px',
            width: '25%',
            margin: '10px auto',
            borderRadius: '50px',
        }
    }
    return (

        <form onSubmit={handleClick}>
            <section>
                <h2> Reset Your Password</h2>
                <input className='forgetPasswordInput'
                    style={style.input}
                    type="text" placeholder='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button
                    style={style.btn}

                >Send</button>
                                <div style={style.message}>{message}</div>

            </section>
        </form>
    )
}
