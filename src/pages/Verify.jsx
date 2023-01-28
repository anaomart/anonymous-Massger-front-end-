import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Email() {
    const [message , setMessage ] = useState('')
    const {token} = useParams()
    const url = 'https://anonymous-massger-back-end.onrender.com/'

    async function getMessage(){
        
            const response = await fetch(url+'user/verify/'+token)
            const json = await response.json()
            setMessage(json[Object.keys(json)[0]])
    }
    useEffect(() => {
        getMessage()
        
    }, []);

  return (
    <div
    style={{
        margin: '150px auto',
        background:'#38bdf8',
        width: '25%',
        padding: '5px',
        borderRadius: '50px',
        textAlign: 'center'
    }}
    >{message}</div>
  )
}
