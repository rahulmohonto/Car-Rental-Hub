import React from 'react';
import {
    Link
} from "react-router-dom";

const Navbar = ({ toggle }) => {

    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-lg font-mono" role="navigation">

            <Link to="/" className="pl-8"> Home</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <a href="#services" className="p-4">Services</a>
                <a href="#about" className="p-4">About</a>
                <a href="#contact" className="p-4">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;