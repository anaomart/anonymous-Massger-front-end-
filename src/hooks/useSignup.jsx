import {useState} from 'react'
export default function useSignup() {
    const [successValue , setSuccessValue] = useState(false)
    const [error , setError] = useState(true);
    const url = 'https://anonymous-massger-back-end.onrender.com/'
    async function signup(name,email,password,image = '') {
        setError(null) ;

        const formData = new FormData()
        formData.append('image',image)
        formData.append('email',email)
        const response = await fetch(url+'user/signup' ,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name,email,password})
        })
        const imageUpload = await fetch(url+'user/profileImage' ,{
            method:'POST',
            body:formData
        })
        
        const json = await response.json();

        if(!response.ok) {
            console.log(json.error)
            setError(json.error)
        }
        if(response.ok){
            console.log("success")
            console.log({successValue})

            console.log(json.message)
        }
        console.log(error)
        setSuccessValue(error ? false :true) ;
    }

    return {signup ,
        error , successValue}
}