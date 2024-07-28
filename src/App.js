
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import F1inSchools101 from './components/F1inSchools101';
import F1SDSZ from './components/F1SDSZ';
import SiriusLucibus from './components/SiriusLucibus';
import Project from './components/Project';
import Engineering from './components/Engineering';
import Marketing from './components/Marketing';
import ProjectManagement from './components/ProjectManagement';
import Shop from './components/Shop';
import Footer from './components/footer.js';
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
