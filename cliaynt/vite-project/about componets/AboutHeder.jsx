import React from 'react';
import iconBar from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import logo from '../../AbeGarageCustomTemplate/assets/images/logo.png'
import { useState } from 'react';
import '../css/AddCustomer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../AbeGarageCustomTemplate/assets/images/logo-two.png'
import {  FaMapMarkerAlt,FaTelegramPlane,FaEnvelope,FaPhone,FaFacebookF,FaLinkedinIn,FaGoogle,FaTwitter } from 'react-icons/fa';

function Header() {
    const [IsOpen, SetOpen] = useState(false)
    const togel = () => {
        SetOpen(!IsOpen)

    }
    return (

        <header className="main-header header-style-one">
            
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="left-column">
                            <div className="text">#1 Multibrand Car Workshop of Losangle City</div>
                            <div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
                        </div>
                        <div className="right-column">
                            <div className="phone-number">Schedule Your Appointment Today: <strong>1800 456 7890</strong></div>
                            <div className="language-switcher">
                                <div id="polyglotLanguageSwitcher">
                                    <form action="#">
                                        <select id="polyglot-language-options" defaultValue="en">
                                            <option id="en" value="en">English</option>
                                            <option id="fr" value="fr">French</option>
                                            <option id="de" value="de">German</option>
                                            <option id="it" value="it">Italian</option>
                                            <option id="es" value="es">Spanish</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Upper */}
            <div className="header-upper">
                <div className="auto-container">
                    <div className="inner-container">
                        {/* Logo */}
                        <div className="logo-box">
                            <div className="logo"><a href=""><img src={logo} alt="Logo" /></a></div>
                        </div>
                        <div className="right-column">
                            {/* Nav Box */}
                            <div className="nav-outer">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler" onClick={togel}><img src={iconBar} alt="Menu Icon" /></div>

                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation">
                                            <li className="dropdown"><a href="/">Home</a>
                                            </li>
                                            
                                            <li className="dropdown"><a href="/service">Services</a>
                                            </li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="search-btn">
                                <button type="button" className="theme-btn search-toggler">
                                    <span className="stroke-gap-icon icon-Search"></span>
                                </button>
                            </div>
                            <div className="link-btn"><a href="#" className="theme-btn btn-style-one">Book a Schedule</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
