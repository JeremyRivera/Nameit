import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="head-container">
            <img src="header-image.png" alt="headerImage" className="head-image" />
            <h1 className="head-text">Name it!</h1>
        </div>
    )
}

export default Header;