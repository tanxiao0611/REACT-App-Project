// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './assets/logo.png';


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </Link>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
