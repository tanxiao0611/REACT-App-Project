
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import F1inSchools101 from './F1inSchools101';
import F1SDSZ from './F1SDSZ';
import SiriusLucibus from './SiriusLucibus';
import Portfolio from './Portfolio';
import Engineering from './Engineering';
import Marketing from './Marketing';
import ProjectManagement from './ProjectManagement';
import Shop from './Shop';
import './App.css';

const App = () => {
  return (
    <div className='backgroundlogo'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/F1inSchools101" element={<F1inSchools101 />} />
          <Route path="/about/F1SDSZ" element={<F1SDSZ />} />
          <Route path="/about/SiriusLucibus" element={<SiriusLucibus />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/Engineering" element={<Engineering />} />
          <Route path="/portfolio/Marketing" element={<Marketing />} />
          <Route path="/portfolio/ProjectManagement" element={<ProjectManagement />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
