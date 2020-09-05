import React, { useState, useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = (props) => {
    const postId = props.postId;
    const [comment, setComment] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    })
    

    return (
        <div>
            {
                comment.map((comment, index) => <CommentDetails key={index} comment={comment}></CommentDetails>)
            }
            
        </div>
    );
};

export default Comment;