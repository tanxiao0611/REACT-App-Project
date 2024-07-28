import React from 'react';
import './F1inSchools101.css'
import Cover from './assets/cover_aboutf1iS.png';
import WorldFinals from './assets/world_finals_2023.mp4'
import Management from './assets/management.jpg'
import Engineering from './assets/engineering.jpg'
import Marketing from './assets/marketing.png'
import Events from './assets/events.jpg'

const F1inSchools101 = () => {
    return (
        <div className='f1iS-container'>
            <img className='cover' src={Cover} alt='Cover' />
            <div className="content">
                <video className='side-video' controls>
                    <source src={WorldFinals} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='text'>
                    <h2>Intro</h2>
                    <p>
                        F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races. Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1 model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills. Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.
                    </p>
                </div>
            </div>
            <div className='content'>
                <div className='text'>
                    <h2>Management</h2>
                    <p>F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races.
                        Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1
                        model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills.
                        Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public
                        speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.</p>
                </div>
                <img src={Management} alt='Management' className='side-image' />
            </div>
            <div className='content'>
                <img src={Engineering} alt='Engineering' className='side-image' />
                <div className='text'>
                    <h2>Engineering</h2>
                    <p>F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races.
                        Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1
                        model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills.
                        Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public
                        speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.</p>
                </div>
            </div>
            <div className='content'>
                <div className='text'>
                    <h2>Marketing</h2>
                    <p>F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races.
                        Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1
                        model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills.
                        Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public
                        speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.</p>
                </div>
                <img src={Marketing} alt='Marketing' className='side-image' />
            </div>
            <div className='content'>
                <img src={Events} alt='Events' className='side-image' />
                <div className='text'>
                    <h2>Events</h2>
                    <p>F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races.
                        Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1
                        model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills.
                        Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public
                        speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.</p>
                </div>
            </div>
        </div>
    );
};

export default F1inSchools101;