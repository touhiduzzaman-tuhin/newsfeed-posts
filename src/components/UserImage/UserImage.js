import React from 'react';
import './UserImage.css';

const UserImage = (props) => {
    const {picture} = props.user;
    
    return (
        <div>
            <img className='profilePicture'  src={picture.large} alt=""/>
        </div>
    );
};

export default UserImage;