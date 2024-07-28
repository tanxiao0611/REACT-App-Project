import React from 'react';
import Cover from './assets/cover_f1sdsz.png';
import Intro from './assets/f1@sdsz_intro.png';
import Passion from './assets/passion.jpg';
import Legacy from './assets/legacy.png';
import Unity from './assets/unity.jpg';
import './F1SDSZ.css'

const F1SDSZ = () => {
    return (
        <div>
            <img className='cover' src={Cover} alt='Cover' />
            <img className='cover' id='intro' src={Intro} alt='Intro' />
            <header className="header">
                <h1>Our Community</h1>
                <p>Explore how F1@SDSZ has grown into a close-knit community and attracted more and more members.</p>
            </header>
            <div className='card-container'>
                <div className='card'>
                    <img src={Passion} alt='Passion' className='card-image' />
                    <div className="card-content">
                        <h2>Passion</h2>
                        <p>See how Lenovo is playing an important role in creating innovative technologies that benefit people and the planet in addition to generating profits.</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={Legacy} alt='Legacy' className='card-image' />
                    <div className="card-content">
                        <h2>Legacy</h2>
                        <p>See how Lenovo is playing an important role in creating innovative technologies that benefit people and the planet in addition to generating profits.</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={Unity} alt='Unity' className='card-image' />
                    <div className="card-content">
                        <h2>Unity</h2>
                        <p>See how Lenovo is playing an important role in creating innovative technologies that benefit people and the planet in addition to generating profits.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default F1SDSZ;