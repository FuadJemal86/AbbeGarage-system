import React from 'react'
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import logo from '../../AbeGarageCustomTemplate/assets/images/logo.png'
import iconBar from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import '../css/AddCustomer.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../AbeGarageCustomTemplate/assets/images/logo-two.png'
import {  FaMapMarkerAlt,FaTelegramPlane,FaEnvelope,FaPhone,FaFacebookF,FaLinkedinIn,FaGoogle,FaTwitter } from 'react-icons/fa';
// import logo from '../../AbeGarageCustomTemplate/assets/images/logo.png'


function ServerceHeader() {
    const [IsOpen, setIsOpen] = useState(false)
    const togel = () => {
        setIsOpen(!IsOpen)
    }
    return (
        <div className=''>
            <header className="main-header header-style-one">
            <div>
                {IsOpen && (
                    
                    <div className="pop-mobile open">
                        <div className='logo2'> <img src={logo2} alt="" /> </div>
                        <div className="close-btn">
                            <div className="mobile-nav-toggler mb-5" onClick={togel}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </div>
                        </div>

                        <div className="pop-mobile1">
                            <nav className="pop-mobile2">
                                <ul className="uls">
                                    <a href='/'><li>HOME</li></a>
                                    <a href='/about'><li>ABOUT US</li></a>
                                    <a href='/service'><li>SERVICES</li></a>
                                    <a><li>GALLERY</li></a>
                                    <a href='contact'><li>CONTACT US</li></a>
                                    <a href='/login'><li>LOGIN</li></a>
                                </ul>
                            </nav>
                        </div>
                        <div className='d-flex togel-icons'>
                                    <div><a href=""><FaTwitter/></a></div>
                                    <div><a href=""><FaFacebookF/></a></div>
                                    <div><a href=""><FaTelegramPlane/></a></div>
                                    <div><a href=""><FaGoogle/></a></div>
                                </div>
                    </div>
                )}
            </div>

                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="left-column">
                                <div className="text"># 1 Multibrand Car Workshop of Losangle City</div>
                                <div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
                            </div>
                            <div className="right-column">
                                <div className="phone-number">
                                    Schedule Your Appointment Today : <strong>1800 456 7890</strong>
                                </div>
                                <div className="language-switcher">
                                    <div id="polyglotLanguageSwitcher" className="">
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
                                <div className="logo">
                                    <a href="/#"><img src={logo} alt="Logo" /></a>
                                </div>
                            </div>
                            <div className="right-column">
                                {/* Nav Box */}
                                <div className="nav-outer">
                                    {/* Mobile Navigation Toggler */}
                                    <div onClick={togel} className="mobile-nav-toggler">
                                        <img src={iconBar} alt="Menu Toggle" />
                                    </div>

                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                            <ul className="navigation">
                                                <li className="dropdown"><a href="/">Home</a>
                                                </li>
                                                <li className="dropdown"><a href="/about">About Us</a>
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
                                <div className="link-btn">
                                    <a href="#" className="theme-btn btn-style-one">Book a Schedule</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Header Upper */}

                {/* Sticky Header */}
                <div className="sticky-header">
                    {/* Header Upper */}
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner-container">
                                {/* Logo */}
                                <div className="logo-box">
                                    <div className="logo">
                                        <a href="/#"><img src="assets/images/logo.png" alt="Logo" /></a>
                                    </div>
                                </div>
                                <div className="right-column">
                                    {/* Nav Box */}
                                    <div className="nav-outer">
                                        {/* Mobile Navigation Toggler */}
                                        <div className="mobile-nav-toggler">
                                            <img src="assets/images/icons/icon-bar.png" alt="Menu Toggle" />
                                        </div>

                                        {/* Main Menu */}
                                        <nav className="main-menu navbar-expand-md navbar-light">
                                        </nav>
                                    </div>
                                    <div className="search-btn">
                                        <button type="button" className="theme-btn search-toggler">
                                            <span className="stroke-gap-icon icon-Search"></span>
                                        </button>
                                    </div>
                                    <div className="link-btn">
                                        <a href="#" className="theme-btn btn-style-one">Book a Schedule</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Header Upper */}
                </div>
                {/* End Sticky Menu */}
            </header>

        </div>
    )
}

export default ServerceHeader
