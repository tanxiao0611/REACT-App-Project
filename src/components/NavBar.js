// NavBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';


const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const handleMouseEnter = (navmenu) => {
        setDropdownOpen(navmenu);
    };
    const handleMouseLeave = () => {
        setDropdownOpen(null);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </Link>
            </div>
            <ul className="navbar-menu">

                <li className="navbar-item"
                    onMouseEnter={() => handleMouseEnter('home')}
                    onMouseLeave={handleMouseLeave}>
                    <Link to="/">Home</Link>
                </li>

                <li className="navbar-item dropdown"
                    onMouseEnter={() => handleMouseEnter('about')}
                    onMouseLeave={handleMouseLeave}>
                    <span className="dropdown-toggle">
                        About
                    </span>
                    {dropdownOpen === 'about' && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <Link to="/about/F1inSchools101">F1 in Schools</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/about/F1SDSZ">F1@SDSZ</Link>
                            </li>
                            <li className="dropdown-item">
                                <Link to="/about/SiriusLucibus">Sirius Lucibus</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="navbar-item dropdown"
                    onMouseEnter={() => handleMouseEnter('project')}
                    onMouseLeave={handleMouseLeave}>
                    <span className="dropdown-toggle">
                        Project
                    </span>
                    {dropdownOpen === 'project' && (
                        <ul className='dropdown-menu'>
                            <li className='dropdown-item'>
                                <Link to="/project/Engineering">Engineering</Link>
                            </li>
                            <li className='dropdown-item'>
                                <Link to="/project/Enterprise">Enterprise</Link>
                            </li>
                            <li className='dropdown-item'>
                                <Link to="/project/ProjectManagement">Project Management</Link>
                            </li>
                        </ul>
                    )}

                </li>
                <li className="navbar-item"
                    onMouseEnter={() => handleMouseEnter('shop')}
                    onMouseLeave={handleMouseLeave}>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav >
    );
};

export default NavBar;
