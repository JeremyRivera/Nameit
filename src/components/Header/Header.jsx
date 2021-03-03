import React from 'react';
import "./Header.css";

const Header = ({ headerText, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src="header-image.png"
                alt="headerImage"
                className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`}
            />
            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}>{headerText}</h1>
        </div>
    )
}

export default Header;