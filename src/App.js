import React from 'react';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';
import './mediaqueries.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
