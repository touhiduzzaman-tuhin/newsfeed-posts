import React from 'react';

const PostImage = (props) => {
    const {picture} = props.image;
    // console.log(picture)
    return (
        <div align='center'>
            <img src={picture.large} alt=""/>
        </div>
    );
};

export default PostImage;