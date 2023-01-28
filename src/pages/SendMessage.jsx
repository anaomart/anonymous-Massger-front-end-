import React, { useEffect } from 'react'
import useAuthContext from '../hooks/useAuthContext';
import image  from '../assets/user.png'
import "./SendMessage.css"
import { useParams } from 'react-router-dom';
import { useState } from 'react';
export default function SendMessage() {
    const [display ,setDisplay] = useState('none');
    const [message , setMessage] = useState('');
    const [userName, setUserName] = useState('noBody')
    const url = 'http://localhost:4000/'
    const {user} = useAuthContext();
    const {id } = useParams();
    useEffect(()=>{
       async function getUserName() {
            let response =  await fetch(url+'user/userName/'+id)
            let json = await response.json()
            setUserName(json.username)
            console.log(userName);
        }
        getUserName();
    },[])

    async function sendMessage() {
        let response =await fetch(url+'message/send/'+ id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify({body:message})
        })
        console.log(await response.json())
        setDisplay('block')
    }
  return (
    <section>
    <div className='info'>
        <div className='profile'>
            <img  src={image} alt='avatar' width={'100px'} />
        </div>
        <h3> Send Message To  <span style={{color:'black'}}>{userName || "no one"}</span></h3>
    </div>
    <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
    <button  onClick={sendMessage} className='sendMessageBtn'>Send</button>
    <div  style={{
        display: display,
        padding: '5px',
        width: '25%',
        margin: '0 auto'
        ,background:'#23e7fe',
        borderRadius: '40px',
    }}>Message Send </div>
</section>
  )
}
