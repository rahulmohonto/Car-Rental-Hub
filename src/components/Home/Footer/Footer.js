import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-center items-center h-16 bg-black text-white">
            <footer className="text-center text-primary"> <small>Rent CarHub &copy; Copyright {(new Date()).getFullYear()}. All Rights Reserved</small> </footer>
        </div>
    );
};

export default Footer;