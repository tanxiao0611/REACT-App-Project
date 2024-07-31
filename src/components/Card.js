import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ image, title, description, link, linkText }) => {
    return (
        <div className='card'>
            <img src={image} alt={title} className='card-image' />
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={link} className="card-button">
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string,
    linkText: PropTypes.string,
};

export default Card;
