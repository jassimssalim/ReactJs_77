import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

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

    const increaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const decreaseQualityProductList = (productId) => {
        setCartItems((prevItems) =>
            prevItems
                .map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };
    

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems
                .map(item =>
                    item.productId === productId && item.quantity > 1 
                        ? { ...item, quantity: item.quantity - 1 } 
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.productId !== productId));
        alert("Do you want to remove it?")
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <NavBar totalItems={totalItems} />
            <ProductList 
                addToCart={addToCart} 
                increaseQuantity={increaseQuantity} 
                decreaseQualityProductList={decreaseQualityProductList} 
                cartItems={cartItems} 
            />
            <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                increaseQuantity={increaseQuantity} 
                decreaseQuantity={decreaseQuantity} 
            />
        </div>
    );
};

export default App;
