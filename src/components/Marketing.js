import React from 'react';
import './photoGallery.css';
import Cover from '../assets/cover_marketing.png'
import Photo1 from '../assets/gallery-marketing01.jpg';
import Photo2 from '../assets/gallery-marketing02.jpg';
import Photo3 from '../assets/gallery-marketing03.jpeg';
import Identity from '../assets/marketing-identity.png';
import Sponsorship from '../assets/marketing-sponsorship.png';
import MKT from '../assets/marketing-mkt.png';
import DigitalMedia from '../assets/marketing-media.png';
import Sustainability from '../assets/marketing-sustainability.png';
import PitDisplay from '../assets/marketing-pitdisplay.png';
import Enterprise from "../assets/Enterprise.pdf"
import Card from './Card';




const Marketing = () => {
    return (
        <div>
            <img className='cover' src={Cover} alt='Cover' />
            <div className='layout-white'>
                <div className='photo-gallery'>
                    <img src={Photo1} alt="Gallery-Marketing" className="photo" />
                    <img src={Photo2} alt="Gallery-Marketing" className="photo" />
                    <img src={Photo3} alt="Gallery-Marketing" className="photo" />
                </div>
            </div>
            <div className='layout-blue'>
                <header className='Header'>
                    What is Marketing Portfoilo intended for?
                </header>
                <p className='text-content'>
                    F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races. Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1 model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills. Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.
                </p>
            </div>
            <div className='layout-white'>
                <header id='cardHeader'>
                    <h1>Our Community</h1>
                    <p>Explore how F1@SDSZ has grown into a close-knit community and attracted more and more members.</p>
                </header>
                <div className='card-container'>
                    <Card
                        image={Identity}
                        title='Team Identity'
                        description='Discover our team identity'
                        link='/identity'
                        linkText='Read more'
                    />
                    <Card
                        image={Sponsorship}
                        title='Sponsorship'
                        description='Discover our sponsors'
                        link='/sponsorship'
                        linkText='Read more'
                    />
                    <Card
                        image={MKT}
                        title='Marketing'
                        description='Discover our Marketing stratgies'
                        link='/marketing'
                        linkText='Read more'
                    />
                </div>
                <div className='card-container'>
                    <Card
                        image={DigitalMedia}
                        title='Digital Media'
                        description='Become our fans!'
                        link='/digitalmedia'
                        linkText='Read more'
                    />
                    <Card
                        image={Sustainability}
                        title='Sustainability'
                        description='Discover our sustainability methods'
                        link='/sustainability'
                        linkText='Read more'
                    />
                    <Card
                        image={PitDisplay}
                        title='Pit Display'
                        description='View our Pit Display design'
                        link='/pitdisplay'
                        linkText='Read more'
                    />
                </div>
            </div>
            <div className='layout-blue'>
                <header className='Header'>
                    Enterprise Portfolio
                </header>
                <iframe
                    src={Enterprise}
                    title="Marketing Material"
                    width="100%"
                    height="600px"
                />
            </div>
        </div>

    )
};

export default Marketing;