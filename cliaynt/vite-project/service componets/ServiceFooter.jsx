import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import logo from '../../AbeGarageCustomTemplate/assets/images/logo-two.png'
import { FaMapMarkerAlt, FaTelegramPlane, FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaGoogle, FaTwitter } from 'react-icons/fa';



function AboutFooterr() {
    return (
        <div className=''>
            <footer className="main-footer">
                {/* <!--Upper Box--> */}
                <div className="upper-box">
                    <div className="auto-container">
                        <div className="row no-gutters">

                            {/* <!--Footer Info Box--> */}
                            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
                                <div className="info-inner">
                                    <div className="content">
                                        <div className="icon">
                                            <span className=""><FaMapMarkerAlt /></span>
                                        </div>
                                        <div className="texts">54B, Tailstoi Town 5238 MT, <br /> La city, IA 522364</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Footer Info Box--> */}
                            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
                                <div className="info-inner">
                                    <div className="content">
                                        <div className="icon">
                                            <span className=""><FaEnvelope /></span>
                                        </div>
                                        <div className="texts">Email us: <br />
                                            <a href="mailto:contact.contact@autorex.com">fuad47722@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Footer Info Box--> */}
                            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
                                <div className="info-inner">
                                    <div className="content">
                                        <div className="icon">
                                            <span className=""><FaPhone /></span>
                                        </div>
                                        <div className="texts">Call us on: <br /><strong>+ 1800 456 7890</strong></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!--Widgets Section--> */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="widgets-inner-container">
                            <div className="row clearfix">

                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-lg-4">
                                    <div className="widget widget_about">
                                        <div className="logo">
                                            <a href="index.html"><img src={logo} alt="Company Logo" />
                                            </a>
                                        </div>
                                        <div className="texts">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide additional clickthroughs.</div>
                                    </div>
                                </div>

                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-lg-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="widget widget_links">
                                                <h4 className="widget_title">Useful Links</h4>
                                                <div className="widget-content">
                                                    <ul className="list">
                                                        <li><a href="/home">Home</a></li>
                                                        <li><a href="/about">About Us</a></li>
                                                        <li><a href="#">Appointment</a></li>
                                                        <li><a href="testimonial.html">Testimonials</a></li>
                                                        <li><a href="/contact">Contact Us</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="widget widget_links">
                                                <h4 className="widget_title">Our Services</h4>
                                                <div className="widget-content">
                                                    <ul className="list">
                                                        <li><a href="#">Performance Upgrade</a></li>
                                                        <li><a href="#">Transmission Service</a></li>
                                                        <li><a href="#">Brake Repair & Service</a></li>
                                                        <li><a href="#">Engine Service & Repair</a></li>
                                                        <li><a href="#">Tires & Wheels</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-lg-4">
                                    <div className="widget widget_newsletter">
                                        <h4 className="widget_title">Newsletter</h4>
                                        <div className="texts">Get latest updates and offers.</div>
                                        <div className="newsletter-form">
                                            <form className="ajax-sub-form" method="post">
                                                <div className="form-group">
                                                    <input type="email" placeholder="Enter your email" id="subscription-email" />
                                                    <button className="theme-btn" type="submit">
                                                        <span className="flaticon-telegram"><FaTelegramPlane /></span>
                                                    </button>
                                                    <label className="subscription-label" htmlFor="subscription-email"></label>
                                                </div>
                                            </form>
                                        </div>
                                        <ul className="social-links">
                                            <li><a href="#">
                                                <span className="flaticon-facebook"><FaFacebookF /></span>
                                            </a></li>
                                            <li><a href="#">
                                                <span className="flaticon-linkedin"><FaLinkedinIn /></span>
                                            </a></li>
                                            <li><a href="#">
                                                <span className="flaticon-x"><FaTwitter /></span>
                                            </a></li>
                                            <li><a href="#">
                                                <span className=""><FaGoogle /></span>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Footer Bottom--> */}
                <div className="auto-container">
                    <div className="footer-bottom">
                        <div className="copyright-texts">© Copyright <a href="#">Fuad Tech</a> 2020. All rights are reserved.</div>
                        <div className="texts">Created by Fuad <a href="#">ThemeArc</a></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AboutFooterr;
