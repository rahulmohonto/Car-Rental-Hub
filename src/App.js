import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home/Home/Home';
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


      <footer className="text-center text-primary"> <small>Rent CarHub &copy; Copyright {(new Date()).getFullYear()}. All Rights Reserved</small> </footer>
    </>
  );
}

export default App;
