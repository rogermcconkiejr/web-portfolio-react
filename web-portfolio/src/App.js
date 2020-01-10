import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import ProjectHouse from './components/ProjectHouse';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Intro />
        <ProjectHouse />
        <About />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
