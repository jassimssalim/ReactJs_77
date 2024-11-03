import React from 'react';
import './NavBar.css'; // Importing the CSS file for styling

const NavBar = ({ totalItems }) => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Shopping Cart</h1>
            <div className="navbar-items">
                <span>Items in Cart: {totalItems}</span>
            </div>
        </nav>
    );
};

export default NavBar;
