import React from 'react';
import Card from './Card';
import Cover from '../assets/cover_f1sdsz.png';
import Intro from '../assets/f1@sdsz_intro.png';
import Passion from '../assets/passion.jpg';
import Legacy from '../assets/legacy.png';
import Unity from '../assets/unity.jpg';
import './F1SDSZ.css'

const F1SDSZ = () => {
    return (
        <div>
            <img className='cover' src={Cover} alt='Cover' />
            <img className='cover' id='intro' src={Intro} alt='Intro' />
            <div className='layout-white'>
                <header id='cardHeader'>
                    <h1>Our Community</h1>
                    <p>Explore how F1@SDSZ has grown into a close-knit community and attracted more and more members.</p>
                </header>
                <div className='card-container'>
                    <Card
                        image={Passion}
                        title="Passion"
                        description="See how Lenovo is playing an important role in creating innovative technologies that benefit people and the planet in addition to generating profits."
                    />
                    <Card
                        image={Legacy}
                        title="Legacy"
                        description="See how Lenovo is playing an important role in creating innovative technologies that benefit people and the planet in addition to generating profits."
                        link="/legacy"
                        linkText="Read more"
                    />
                    <Card
                        image={Unity}
                        title="Unity"
                        description="See how Lenovo is playing an important role in creating innovative technologies that benefit people and the planet in addition to generating profits."
                        link="/unity"
                        linkText="Read more"
                    />
                </div>
            </div>

        </div>
    )
};

export default F1SDSZ;