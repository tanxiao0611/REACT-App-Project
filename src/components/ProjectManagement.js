import React from 'react';
import Cover from '../assets/cover_pm.png';
import Photo1 from '../assets/gallery-pm01.jpg';
import Photo2 from '../assets/gallery-pm02.jpg';
import Photo3 from '../assets/gallery-pm03.jpg';
import PMPortfolio from '../assets/ProjectManagement.pdf';


const ProjectManagement = () => {
    return (
        <div>
            <img className='cover' src={Cover} alt='Cover' />
            <div className='layout-white'>
                <div className='photo-gallery'>
                    <img src={Photo1} alt="Gallery-Project Management" className="photo" />
                    <img src={Photo2} alt="Gallery-Project Management" className="photo" />
                    <img src={Photo3} alt="Gallery-Project Management" className="photo" />
                </div>
            </div>
            <div className='layout-blue'>
                <header className='Header'>
                    What is Project Management Portfoilo intended for?
                </header>
                <p className='text-content'>
                    F1 in Schools is one of the world's largest STEM challenges. Founded in the UK in 2000, the competition emulates the operations of real F1 teams and races. Each year, students from over 17,000 schools across 51 countries participate, forming and managing their own teams to design and manufacture the fastest F1 model cars in the world. The process can be summarized as plan, design, build, test, and race. F1 in Schools helps students develop various skills. Professional skills include 3D modeling, aerodynamics, marketing, and project management, while non-professional skills encompass communication, public speaking, and time management, all of which provide lifelong benefits. The video on the left shows the Aramco F1 in Schools 2023 World Finals. Explore the event here.
                </p>
            </div>
            <div className='layout-white'>
                <header className='Header'>
                    Project Management Portfolio
                </header>
                <iframe
                    src={PMPortfolio}
                    title="Project Management Material"
                    width="100%"
                    height="600px"
                />
            </div>
        </div>
    )
};

export default ProjectManagement;