import React from 'react';
import { Link } from 'react-router-dom';
const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-green-500' : 'hidden'}
            onClick={toggle}>
            <Link to="/" className="p-4">Home</Link>
            <a href="#services" className="p-4">Services</a>
            <Link to="/about" className="p-4">About</Link>
            <Link to="/contact" className="p-4">Contact</Link>
        </div>
    );
};

export default Dropdown;
// grid grid-rows-4 text-center items-center bg-green-500