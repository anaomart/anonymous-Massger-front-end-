import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function PasswordRecovery() {
    const [password, setPassword] = useState('');
    const {token} = useParams()
    const [message , setMessage] = useState('');
    console.log(token)
    const url = 'http://localhost:4000/'

    async function handleClick(e){
        e.preventDefault();

        let response = await axios({
            method: 'POST',
            url: 'user/passwordRecovery/'+token,
            baseURL:url,
            headers: { 'Content-Type': 'application/json'},
            data: {
                newPassword: password
            }
        });
        let json = await response;
        setMessage(json.data.message);
    }
   

    const style = {
        label: {
            display: 'block',

        },
        input: {
            border: '1px solid #38bdf8',
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
    }
    return (
        <section>
            <form onSubmit={handleClick}>
                <label >
                    <b>Password</b>
                    <input style={style.input} 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    type="password" placeholder='new password' />

                </label>
                <label style={style.label} >
                    <b> Confirm Password</b>
                    <input style={style.input} type="password" placeholder='Confirm new password ' />

                </label>
                <button style={style.btn}>
                    Confirm
                </button>
                <div className='success' style={{backgroundColor:'#38bdf8', width:'30%' }}>{message}</div>
            </form>
            </section>
    )
}
