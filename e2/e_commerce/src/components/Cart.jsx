import React from 'react';
import './Cart.css'; // Import the CSS file

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.productId} className="cart-item">
                        <h3>Product {item.productId}</h3>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => increaseQuantity(item.productId)}>+</button>
                        <button onClick={() => decreaseQuantity(item.productId)}>-</button>
                        <button onClick={() => removeFromCart(item.productId)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
