import React from 'react';
import Cover from '../assets/cover_engineering.png'
import Photo1 from '../assets/gallery-engineering01.jpg';
import Photo2 from '../assets/gallery-engineering02.jpg';
import Photo3 from '../assets/gallery-engineering03.jpg';
import Drawings from '../assets/engineering-drawings.png';
import Renderings from '../assets/engineering-rendering.png';
import EngineeringPortfolio from '../assets/DesignandEngineering.pdf'
import Card from './Card';


const Engineering = () => {
    return (
        <div>
            <img src={Cover} className='cover' alt='Cover' />
            <div className='layout-white'>
                <div className='photo-gallery'>
                    <img src={Photo1} alt="Gallery-Design and Engineering" className="photo" />
                    <img src={Photo2} alt="Gallery-Design and Engineering" className="photo" />
                    <img src={Photo3} alt="Gallery-Design and Engineering" className="photo" />
                </div>
            </div>
            <div className='layout-blue'>
                <header className='Header'>
                    What is Design & Engineering Portfoilo intended for?
                </header>
                <p className='text-content'>
                    F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races. Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1 model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills. Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.
                </p>
            </div>
            <div className='layout-white'>
                <header id='cardHeader'>
                    <h1>Gallery</h1>
                    <p>Explore how F1@SDSZ has grown into a close-knit community and attracted more and more members.</p>
                </header>
                <div className='card-container'>
                    <Card
                        image={Drawings}
                        title='Engineering Drawings'
                        description='Discover our engineering drawings'
                        link='/drawings'
                        linkText='Read more'
                    />
                    <Card
                        image={Renderings}
                        title='Car Renderings'
                        description='Discover our car renderings'
                        link='/renderings'
                        linkText='Read more'
                    />
                </div>
            </div>
            <div className='layout-blue'>
                <header className='Header'>
                    Design and Engineering Portfolio
                </header>
                <iframe
                    src={EngineeringPortfolio}
                    title="Design and Engineering Material"
                    width="100%"
                    height="600px"
                />
            </div>
        </div>
    )
};

export default Engineering;