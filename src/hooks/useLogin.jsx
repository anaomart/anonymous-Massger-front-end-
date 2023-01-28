import { useState } from "react";
import useAuthContext from "./useAuthContext";



export default function useLogin() {
    const {dispatch} = useAuthContext();

    const [error , setError] = useState('');
    const url = 'http://localhost:4000/';
   async function Login(email, password) {
    const response =await  fetch(url+'user/login',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(email,password)
    });
    const json =  await response.json();

    if(!response.ok){
        console.log(json.error)
        setError(json.error)
        
    }

    if(response.ok){
        console.log('success login')
        localStorage.setItem('user',JSON.stringify(json))
        dispatch({type:"LOGIN" , payload:json})

    }
    }
    return{
        Login , error
    }
}