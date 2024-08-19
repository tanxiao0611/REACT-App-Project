// Checkout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        emailOrPhone: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Checkout Data:', formData);
        alert('Checkout Successful!');
        navigate('/shop');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name on Card:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Card Number:</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Expiration Date:</label>
                    <input
                        type="text"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div>
                    <label>CVV:</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email or Phone Number:</label>
                    <input
                        type="text"
                        name="emailOrPhone"
                        value={formData.emailOrPhone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Shipping Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Complete Purchase</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
