import React from 'react';
import "./Card.css"
import image from '../assets/user.png'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Cards = ({ messages }) => {
    console.log(messages)
    const showMessages =()=> {
        
    }
    return (
      <>
      {
         messages.length !== 0 ? <>
            {
                messages.map((message) => (
                    <div className='card' key={messages._id}>
                        <div className="cardInfo">
                            <img src={message.profileImage || image} alt='user avatar' />
                            <div className="data">
                                <span>{message.sent}</span>
                                <span className='time'>{formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}</span>
                            </div>
                        </div>
                        <div className="body">
                            <p> {message.body}</p>
                        </div>
        
                    </div>
                ))
            }
         </> : <p>You Have 0 Messages </p>
      }
      </>
    );
}

export default Cards;
