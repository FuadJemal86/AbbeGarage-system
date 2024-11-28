import React from 'react'
import '../startCss/start.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImg from '../../AbeGarageCustomTemplate/assets/images/custom/logo.png';
import iconBarImg from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay,faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import banner1 from '../../AbeGarageCustomTemplate/assets/images/custom/banner/banner1.jpg';


function Start() {
    return (
        <div>
            <header className='main-header'>
                <div className="top-head">
                    <div className="">
                        <div className="inner-containerr">
                            <div className="left-column">
                                <div className="text">Enjoy the drink while we fix your car</div>
                                <div className="office-hour d-none d-md-block">Monday - Saturday 7:00AM - 6:00PM</div>
                            </div>
                            <div className="right-column d-none d-md-block">
                                <div className="phone-number ">Schedule Your Appointment Today : <strong>1800 456 7890</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="header-upperr">
                        <div className="auto-containerr">
                            <div className="inner-containerr2">
                                {/* Logo */}
                                <div className="logo-boxx">
                                    <div className="logoo">
                                        <a href="/"><img src={logoImg} alt="Company Logo" /></a>
                                    </div>
                                </div>
                                <div className="right-columnn">
                                    {/* Navigation Box */}
                                    <div className="nav-outerr">
                                        {/* Mobile Navigation Toggler */}
                                        <div className="mobile-nav-togglerr" >
                                            {/* <img src={''} alt="Toggle Menuu" /> */}
                                        </div>

                                        {/* Main Menu */}
                                        <nav className="main-menuu navbar-expand-md navbar-light d-none d-md-block">
                                            <div className="collapsee navbar-collapsee showw clearfixx" id="navbarSupportedContent">
                                                <ul className="navigation">
                                                    <li><a href="/">Home</a></li>
                                                    <li><a href="/about">About Us</a></li>
                                                    <li><a href="/service">Services</a></li>
                                                    <li><a href="/contact">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="link-btnn">
                                        <div className='d-block d-md-none '><a href='/login'><FontAwesomeIcon icon={faRightToBracket} /></a></div>
                                        <div className=' d-none d-md-block'><a href="/login" className="theme-btn btn-style-one">LOGIN</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="video-section">
                <div data-parallax='{"y": 50}' className="sec-bg"
                    style={{ backgroundImage: `url(${banner1})` }}></div>
                <div className="auto-container">
                    <h5>Working since 1999</h5>
                    <h2>Tuneup Your Car <br /> to Next Level</h2>
                    <div className="video-box">
                        <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                            className="overlay-link lightbox-image video-fancybox ripple"><FontAwesomeIcon icon={faCirclePlay} /></a>
                        </div>
                        <div className="wach-intro">WACHE INTRO VIDEO <br /> ABOUT US</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Start
