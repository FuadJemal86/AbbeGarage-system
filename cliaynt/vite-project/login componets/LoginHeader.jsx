import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import iconBar from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import logo from '../../AbeGarageCustomTemplate/assets/images/logo.png'
import { useState } from 'react';
import '../css/AddCustomer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo2 from '../../AbeGarageCustomTemplate/assets/images/logo-two.png'
import { FaMapMarkerAlt, FaTelegramPlane, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaGoogle, FaTwitter } from 'react-icons/fa';

function LoginHeader() {
    const [IsOpen, SetOpen] = useState(false)
    const togel = () => {
        SetOpen(!IsOpen)
    }
    return (
        <div>
            <header className="main-header header-style-one">
                <div>
                    {IsOpen && (

                        <div className="pop-mobile open ">
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
                                <div><a href=""><FaTwitter /></a></div>
                                <div><a href=""><FaFacebookF /></a></div>
                                <div><a href=""><FaTelegramPlane /></a></div>
                                <div><a href=""><FaGoogle /></a></div>
                            </div>
                        </div>
                    )}
                </div>

                {/* <!-- Header Top --> */}
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

                {/* <!-- Header Upper --> */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container">
                            {/* <!-- Logo --> */}
                            <div className="logo-box">
                                <div className="logo">
                                    <a href="/"><img src={logo} alt="Company Logo" /></a>
                                </div>
                            </div>
                            <div className="right-column">
                                {/* <!-- Navigation Box --> */}
                                <div className="nav-outer">
                                    {/* <!-- Mobile Navigation Toggler --> */}


                                    {/* <!-- Main Menu --> */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <div className="collapse navbar-collapse show  clearfix" id="navbarSupportedContent">
                                            <ul className="navigation">
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/about">About Us</a></li>
                                                <li><a href="/service">Services</a></li>
                                                <li><a href="/contact">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="search-btn"></div>
                                <div className="link-btn">
                                    <a href="/login" className="theme-btn btn-style-one">SIGN UP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Header Upper --> */}

                {/* <!-- Sticky Header  --> */}
                <div className="sticky-header">
                    <div className="header-upper">
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="logo-box">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="Company Logo" /></a>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="nav-outer">
                                        <div className="mobile-nav-toggler loginn">
                                            <img src={iconBar} alt="Toggle Menu" />
                                        </div>
                                        <nav className="main-menu navbar-expand-md navbar-light"></nav>
                                    </div>
                                    <div className="search-btn"></div>
                                    <div className="link-btn">
                                        <a href="/login" className="theme-btn btn-style-one">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Sticky Menu --> */}

                {/* <!-- Mobile Menu  --> */}
                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn"><span className="icon flaticon-remove"></span></div>
                    <nav className="menu-box">
                        <div className="nav-logo">
                            <a href="/"><img src={logo} alt="Company Logo" /></a>
                        </div>
                        <div className="menu-outer">
                            {/* <!-- Menu items --> */}
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default LoginHeader;
