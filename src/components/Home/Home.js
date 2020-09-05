import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
 
const Home = () => {
    const [post, setPost] = useState([]);
    useEffect( () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
    }, []);

    const [images, setImages] = useState([]);
    useEffect(() => {   
        fetch('https://randomuser.me/api/?results=100')
            .then(response => response.json())
            .then(data => setImages(data.results))
    }, [])

    images.map((each, index) => post[index].image = each.picture.large)
    
       return (
        <div>
            {
                post.map(post => <Post key={post.id} post={post}></Post>)
            }           
        </div>
    );
};

export default Home;