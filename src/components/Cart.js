import React from 'react';

/*const Cart = ({ cartItems, onRemoveFromCart }) => {
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
};*/

import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                            <button
                                onClick={() => removeFromCart(index)}
                                aria-label="Remove item">
                                &times;
                            </button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                    <Link to="/checkout">
                        <button className='checkout-button'>Proceed to Checkout</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;


