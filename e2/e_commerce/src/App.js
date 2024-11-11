import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PRODUCTS_DATA = [
    {
        id: 1,
        title: "jassim",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120
        }
    }
];

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.productId === productId);
            if (existingItem) {
                return prevItems.map(item =>
                    item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { productId, quantity: 1 }];
            }
        });
    };

    // Initialize products with static PRODUCTS_DATA
    const [products, setProducts] = useState(PRODUCTS_DATA);

    // Add a new product to the list
    const onAddProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]); // Append new product to existing ones
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <NavBar totalItems={totalItems} />
            <Routes>
                <Route 
                    path="/" 
                    element={<ProductList products={products} addToCart={addToCart} cartItems={cartItems} />} 
                />
                <Route 
                    path="/product-list" 
                    element={<ProductList products={products} addToCart={addToCart} cartItems={cartItems} />} 
                />
                <Route 
                    path="/cart" 
                    element={<Cart cartItems={cartItems} />} 
                />
                <Route 
                    path="/add-product" 
                    element={<AddProduct onAddProduct={onAddProduct}/>} 
                />
            </Routes>
        </Router>
    );
};

export default App;
