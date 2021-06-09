import React from 'react';
import './Footer.css';
// import FooterColumn from '../FooterColumn/FooterColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterColumn from './FooterColumn';

const Footer = () => {
    const noNamed = [
        { name: "36/A Manik Mia Avenue, Banani, Dhaka" },
        { name: "Phone: 09653845" },
        { name: "Email: infoCarHub@Rental.com" },

    ]
    const aboutUs = [
        { name: "We are the top Car Rental agency in Sydney, with agents available to answer any question 24/7", link: "//google.com/map" },
        { name: "", link: "//google.com/map" },

    ]
    const quickLinks = [

        { name: "Rental Issue", link: "/#" },
        { name: "Sales Manages", link: "/#" },
        { name: "Contact", link: "/#" },
        { name: "Terms & Conditions", link: "/#" },
        { name: "Our Blog", link: "/#" },
    ]
    const Company = [
        { name: "About US", link: "/#" },
        { name: "Location", link: "/#" },
        { name: "Support Center", link: "/#" },
        { name: "Terms Conditions", link: "/#" },
        { name: "Submit Listing", link: "/#" },
    ]
    return (
        <footer id="contact" className="footer-area clear-both bg-gray-dark">
            <div className="container pt-7">
                <div className="row py-12">
                    <FooterColumn key={1} menuTitle={""} menuItems={noNamed} />
                    <FooterColumn key={2} menuTitle="Company" menuItems={Company} />
                    <FooterColumn key={3} menuTitle="Quick Links" menuItems={quickLinks} />
                    <FooterColumn key={4} menuTitle="About Us" menuItems={aboutUs}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterColumn>
                </div>
            </div>
        </footer>

    );
};

export default Footer;