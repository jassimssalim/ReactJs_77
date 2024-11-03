import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../app_source/src'; 
import './ProductList.css';

const ProductList = ({ addToCart, cartItems, decreaseQualityProductList }) => {
    const [descriptionVisible, setDescriptionVisible] = useState({});

    const toggleDescription = (id) => {
        setDescriptionVisible(prev => ({
            ...prev,
            [id]: !prev[id] 
        }));
    };

    return (
        <div className="product-list">
            {PRODUCTS_DATA.map(product => {
                const itemInCart = cartItems.find(item => item.productId === product.id);
                const isVisible = descriptionVisible[product.id]; 

                return (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3>{product.title}</h3>
                        <p>₱  {product.price.toFixed(2)}</p>

                        <div className="description-toggle" onClick={() => toggleDescription(product.id)} style={{ cursor: 'pointer' }}>
                            {isVisible ? (
                                <span>&#x25B2; {/* Up arrow */}</span>
                            ) : (
                                <span>&#x25BC; {/* Down arrow */}</span>
                            )}
                        </div>

                        {isVisible && (
                            <p className="product-description">{product.description}</p>
                        )}

                        {!itemInCart ? (
                            <button className="addCart" onClick={() => addToCart(product.id)}>
                                Add to Cart
                            </button>
                        ) : (
                            <div className="cart-controls">
                                <button onClick={() => addToCart(product.id)}>+</button>
                                <span>{itemInCart.quantity}</span>
                                <button onClick={() => decreaseQualityProductList(product.id)}>-</button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
