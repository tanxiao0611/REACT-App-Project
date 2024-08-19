import React from 'react';

const ShoppingHeader = ({ cartItemCount }) => {
    const headerStyle = {
        fontFamily: 'Anton, sans-serif',
        color: 'rgb(51, 52, 68)',
    };

    return (
        <header className="shoppingHeader">
            <h1 style={headerStyle}>Add Your Favorite Merchandises!</h1>
            <div className="cart">
                <span>Cart ({cartItemCount})</span>
            </div>
        </header>
    );
};
export default ShoppingHeader;
