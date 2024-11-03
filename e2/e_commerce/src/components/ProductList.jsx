import React from 'react';
import { PRODUCTS_DATA } from '../app_source/src'; 
import './ProductList.css';

const ProductList = ({ addToCart, cartItems, decreaseQualityProductList }) => {
    return (
        <div className="product-list">
            {PRODUCTS_DATA.map(product => {
                const itemInCart = cartItems.find(item => item.productId === product.id);

                return (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h4>{product.title}</h4>
                        <p className="product-description">{product.description}</p>
                        <p>${product.price.toFixed(2)}</p>

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
