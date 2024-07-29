import React, { useState } from 'react';
import ShoppingHeader from './shoppingHeader';
import ProductList from './ProductList';
import Cart from './Cart';
import './shopping.css';

const Shopping = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 29.99, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'path/to/image3.jpg' }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = product => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="Shopping">
      <ShoppingHeader cartItemCount={cartItems.length} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default Shopping;
