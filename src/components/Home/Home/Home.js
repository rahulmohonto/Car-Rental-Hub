import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = ({ toggle }) => {

    return (
        <div>
            <Navbar toggle={toggle} />
            <Header />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;