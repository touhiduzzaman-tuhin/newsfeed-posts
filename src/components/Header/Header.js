import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div align="center">
            <nav>
                <a href="/home">Home Page</a>
                <a href="/postDetails">Post Details</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;