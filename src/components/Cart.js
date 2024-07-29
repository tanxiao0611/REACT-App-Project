import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 && <p>No items in cart</p>}
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                </div>
            ))}
            <h3>
                Total: $
                {cartItems.reduce((total, item) => total + item.price, 0)}
            </h3>
        </div>
    );
};

export default Cart;
