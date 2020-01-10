import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Resume from './components/Resume';
import ProjectHouse from './components/ProjectHouse';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Intro />
        <ProjectHouse />
        <About />
        <Resume />
      </Router>
    </div>
  );
}

export default App;
