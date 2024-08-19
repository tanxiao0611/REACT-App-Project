import React from 'react';

const Product = ({ product, onAddToCart }) => {
    const buttonStyle = {
        backgroundColor: 'rgb(248, 194, 119)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontFamily: 'Anton, sans-serif'
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button style={buttonStyle} onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
