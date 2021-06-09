import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home/Home/Home';
import Footer from './components/Home/Footer/Footer';
import Dropdown from './components/Home/Navbar/Dropdown';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenuBar = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('resizing navbar')
      }
    }
    window.addEventListener('resize', hideMenuBar)
    return () => {
      window.removeEventListener('resize', hideMenuBar)
    }
  })


  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} ></Dropdown>
      <Home toggle={toggle} />

      <Footer />
    </>
  );
}

export default App;
