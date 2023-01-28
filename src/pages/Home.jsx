import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import image  from '../assets/user.png'
import icon     from '../assets/share.png'
import './Home.css'
import useAuthContext from '../hooks/useAuthContext';

const Home = () => {
    const [button ,setButton] = useState(false);
    const [userMessages , setUserMessages] = useState([])
    const url = 'http://localhost:4000/'
    const {user} = useAuthContext();
    let profileImage = user.profileImage
    async function messages () {
        const response = await fetch(url+'message/allMessages' ,{
            headers : {
                'content-type': 'application/json',
                'Authorization' : 'Bearer '+user.token
            }
        })
        const json = await response.json() ;
        setUserMessages(json.messages)
        console.log({userMessages})
    }
    useEffect(()=>{
        messages()
    },[])
    return (
        <section>
                <div className='info'>
                    <div className='profile'>
                        <img  src={profileImage || image } alt='avatar' width={'120px'} style={{borderRadius:'50%' , height:'120px'}} />
                    </div>
                    <h3>{user.username}</h3>
                    <div className='shareBtn'>
                    <a href={"send/"+user.id} className='share' style={{display:button ? 'block':'none'}}>{url+"send/"+user.id}</a>
                    <button onClick={()=>{setButton(!button)}}> 
                        <span><img src={icon} alt='share icon'  width={'10px'} /></span>
                        Share Profile
                        </button>
                        </div>
                </div>
                <div className='messages'>  
                    <Cards messages={userMessages}/>  
  
                </div>
        </section>
    );
}

export default Home;
