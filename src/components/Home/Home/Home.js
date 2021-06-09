import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = ({ toggle }) => {

    return (
        <div>
            <Navbar toggle={toggle} />
            <Header />
            <Services />
        </div>
    );
};

export default Home;