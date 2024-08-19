import React, { useState } from 'react';
/*
import ShoppingHeader from './shoppingHeader';
import ProductList from './ProductList'; */
import Cart from './Cart';



import Cover from '../assets/cover_shopping.png';
import Wristband from '../assets/merch_wristband.png';
import Mask from '../assets/merch_mask.png';
import KeyChain from '../assets/merch_keychain.png';
import Button from '../assets/merch_button.png';
import CarModel from '../assets/merch_carmodel.png';
import Ornament from '../assets/merch_ornament.png'
import Tshirt from '../assets/merch_tshirt.png';
import Polo from '../assets/merch_polo.png';
import Trousers from '../assets/merch_trousers.png';

import './shopping.css';

/*const Shopping = () => {
  const [products] = useState([
    { id: 1, name: 'Wristband', price: 7.99, image: Wristband },
    { id: 2, name: 'Mask', price: 1.99, image: Mask },
    { id: 3, name: 'Key Chain', price: 10.99, image: KeyChain },
    { id: 4, name: 'Button', price: 5.99, image: Button },
    { id: 5, name: 'Car Model', price: 120.99, image: CarModel },
    { id: 6, name: 'Ornament', price: 20.99, image: Ornament },
    { id: 7, name: 'T-shirt', price: 36.99, image: Tshirt },
    { id: 8, name: 'Polo Shirt', price: 48.99, image: Polo },
    { id: 9, name: 'Trousers', price: 48.99, image: Trousers }

  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = product => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <img className='cover' src={Cover} alt='Cover' />
      <div className="Shopping">
        <ShoppingHeader cartItemCount={cartItems.length} />
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};*/

const products = [
  { id: 1, name: 'Wristband', price: 7.99, image: Wristband },
  { id: 2, name: 'Mask', price: 1.99, image: Mask },
  { id: 3, name: 'Key Chain', price: 10.99, image: KeyChain },
  { id: 4, name: 'Button', price: 5.99, image: Button },
  { id: 5, name: 'Car Model', price: 120.99, image: CarModel },
  { id: 6, name: 'Ornament', price: 20.99, image: Ornament },
  { id: 7, name: 'T-shirt', price: 36.99, image: Tshirt },
  { id: 8, name: 'Polo Shirt', price: 48.99, image: Polo },
  { id: 9, name: 'Trousers', price: 48.99, image: Trousers }

];

const headerStyle = {
  fontFamily: 'Anton, sans-serif',
  color: 'rgb(51, 52, 68)',
};

const Shopping = () => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };


  return (
    <div>
      <img className='cover' src={Cover} alt='Cover' />
      <header className='shoppingHeader'>
        <h1 style={headerStyle}>Shop Our Merch!</h1>
        <div className='cart-button-container'>
          <button className='cart-button' onClick={toggleCartVisibility}>
            Cart ({cart.length} items)
          </button>
          {cartVisible && (
            <div className="cart-dropdown">
              <Cart cart={cart} removeFromCart={removeFromCart} />
              <button className="close-cart" onClick={toggleCartVisibility}>Close</button>
            </div>
          )}
        </div>
      </header>
      <div className='Shopping'>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button className='product-button' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopping;