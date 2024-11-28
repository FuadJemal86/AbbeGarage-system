import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import logoImg from '../../AbeGarageCustomTemplate/assets/images/custom/logo.png';
import iconBarImg from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import '../css/AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FaTelegramPlane, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';



function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to open/close the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            {/* Toggle Mobile Menu */}


            <header className="main-header header-style-one">
            
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="left-column">
                                <div className="text">Enjoy the drink while we fix your car</div>
                                <div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
                            </div>
                            <div className="right-column">
                                <div className="phone-number">Schedule Your Appointment Today : <strong>1800 456 7890</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Upper */}
                <div className=''>
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner-container">
                                {/* Logo */}
                                <div className="logo-box">
                                    <div className="logo">
                                        <a href="/"><img src={logoImg} alt="Company Logo" /></a>
                                    </div>
                                </div>
                                <div className="right-column">
                                    {/* Navigation Box */}
                                    <div className="nav-outer">
                                        {/* Mobile Navigation Toggler */}
                                        <div className="mobile-nav-toggler" onClick={toggleMenu}>
                                            <img src={iconBarImg} alt="Toggle Menu" />
                                        </div>

                                        {/* Main Menu */}
                                        <nav className="main-menu navbar-expand-md navbar-light">
                                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                                <ul className="navigation">
                                                    <li><a href="/">Home</a></li>
                                                    <li><a href="/about">About Us</a></li>
                                                    <li><a href="/service">Services</a></li>
                                                    <li><a href="/contact">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="link-btn">
                                        <a href="/login" className="theme-btn btn-style-one">LOGIN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
