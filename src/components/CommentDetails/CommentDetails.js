import React, { useState, useEffect } from 'react';
import './CommentDetails.css';
import Button from '@material-ui/core/Button';
import UserImage from '../UserImage/UserImage';

const CommentDetails = (props) => {
    const {name, body} = props.comment;
    const [user, setUser] = useState([]);
    // const time = Math.round(Math.random() * 59);
    useEffect( () => {
        const url = 'https://randomuser.me/api/?results=1';
        fetch(url)
        .then(response => response.json())
        .then(data => setUser(data.results))
    }, []);
    return (
        <div>           
            <div className="comment-style">
                <div>
                    {
                        user.map((user, index) => <UserImage key={index} user={user}></UserImage>)
                    }
                </div>
                <div className="comment-body">
                    <h3>{name} </h3>
                    <p>{body}</p>
                </div>
            </div>
            <div className='comment-button'>
                <Button size="small" color="primary">Like</Button>
                <Button size="small" color="primary">Reply</Button>
            </div>
            {/* <Time></Time> */}
        </div>
        
    );
};

// function Time(props){
//     const time = props.time;
//     return(
//         <div>
//             <h2> {time}m </h2>
//         </div>
//     )
// }

export default CommentDetails;