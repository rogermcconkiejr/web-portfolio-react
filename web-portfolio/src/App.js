import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import ProjectHouse from './components/ProjectHouse';
import Footer from './components/Footer';
import Form from './components/Form';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Intro />
        <Skills />
        <ProjectHouse />
        <About />
        <Form />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
