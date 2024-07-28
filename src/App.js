
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import F1inSchools101 from './F1inSchools101';
import F1SDSZ from './F1SDSZ';
import SiriusLucibus from './SiriusLucibus';
import Project from './Project';
import Engineering from './Engineering';
import Marketing from './Marketing';
import ProjectManagement from './ProjectManagement';
import Shop from './Shop';
import Footer from './footer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='main-content'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/F1inSchools101" element={<F1inSchools101 />} />
            <Route path="/about/F1SDSZ" element={<F1SDSZ />} />
            <Route path="/about/SiriusLucibus" element={<SiriusLucibus />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/Engineering" element={<Engineering />} />
            <Route path="/project/Marketing" element={<Marketing />} />
            <Route path="/project/ProjectManagement" element={<ProjectManagement />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
