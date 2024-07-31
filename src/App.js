
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import F1inSchools101 from './components/F1inSchools101';
import F1SDSZ from './components/F1SDSZ';
import SiriusLucibus from './components/SiriusLucibus';
import Project from './components/Project';
import Engineering from './components/Engineering';
import Enterprise from './components/Enterprise';
import ProjectManagement from './components/ProjectManagement';
import Shopping from './components/Shopping.js';
import Footer from './components/footer.js';
import Identity from './components/Identity.js';
import Sponsorship from './components/Sponsorship.js'
import Marketing from './components/Marketing.js';
import './App.css';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div className='App'>
      <div className='main-content'>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/F1inSchools101" element={<F1inSchools101 />} />
          <Route path="/about/F1SDSZ" element={<F1SDSZ />} />
          <Route path="/about/SiriusLucibus" element={<SiriusLucibus />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/Engineering" element={<Engineering />} />
          <Route path="/project/Enterprise" element={<Enterprise />} />
          <Route path="/project/Enterprise/identity" element={<Identity />} />
          <Route path="/project/Enterprise/sponsorship" element={<Sponsorship />} />
          <Route path="/project/Enterprise/marketing" element={<Marketing />} />
          <Route path="/project/ProjectManagement" element={<ProjectManagement />} />
          <Route path="/shop" element={<Shopping />} />
        </Routes>

      </div>
      {!isHomePage && <Footer />}
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;