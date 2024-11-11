import React from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const NavBar = ({ totalItems }) => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Shopping Cart</h1>
            <div className="navbar-items">
                 <Link to="/product-list">Product List</Link>

                 <Link to="/cart">Cart</Link>
                 <Link to="/add-product">Add A Product</Link>

                <span>Items in Cart: {totalItems}</span>
            </div>
        </nav>
    );
};

export default NavBar;
