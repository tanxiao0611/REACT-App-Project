import React from 'react';

const ShoppingHeader = ({ cartItemCount }) => {
    return (
        <header className="shoppingHeader">
            <h1>Shopping Page</h1>
            <div className="cart">
                <span>Cart ({cartItemCount})</span>
            </div>
        </header>
    );
};

export default ShoppingHeader;
