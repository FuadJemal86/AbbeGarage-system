import React from 'react';
import '../../vite-project/css/AddCustomer.css';
import Footer from '../home componets/Footer';
import iconBar from '../../AbeGarageCustomTemplate/assets/images/icons/icon-bar.png';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import logo from '../../AbeGarageCustomTemplate/assets/images/logo.png'


const AddNewCustomer = () => {
    return (
        <div>
            <div>
            <header className="main-header header-style-one ">
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
                            <div className="logo"><a href="index.html"><img src={logo} alt="Logo" /></a></div>
                        </div>
                        <div className="right-column">
                            {/* Nav Box */}
                            <div className="nav-outer">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler"><img src={iconBar} alt="Menu Icon" /></div>

                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul className="navigation">
                                            <li className="dropdown"><a href="/home">Home</a>
                                                <ul>
                                                    <li><a href="/home">Home Page 1</a></li>
                                                    <li><a href="index-2.html">Home Page 2</a></li>
                                                    <li><a href="index-3.html">Home Page 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="/about">About Us</a>
                                                <ul>
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="history.html">Company History</a></li>
                                                    <li><a href="team.html">Our Team</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="/service">Services</a>
                                                <ul>
                                                    <li><a href="service-1.html">Services 1</a></li>
                                                    <li><a href="service-2.html">Services 2</a></li>
                                                    <li><a href="service-details.html">Single Service</a></li>
                                                </ul>
                                            </li>
                                            
                                            <li className="dropdown"><a href="blog.html">Pages</a>
                                                <ul>
                                                    <li><a href="projects.html">Projects</a></li>
                                                    <li><a href="project-details.html">Project Details</a></li>
                                                    <li><a href="testimonials.html">Testimonials</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                    <li><a href="error.html">404 Error Page</a></li>
                                                    <li><a href="comming-soon.html">Coming Soon Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a href="#">News</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog With Side bar</a></li>
                                                    <li><a href="blog-2.html">Blog 2 Column</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
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
            </div>
            <div className="admin-dashboard">
                {/* header */}
                <div></div>
                {/* Sidebar Menu */}
                <nav className="sidebar d-none d-xl-block">
                    <h2 className="admin-menu">Admin Menu</h2>
                    <ul className="menu-list">
                        <li>Dashboard</li>
                        <hr />
                        <li>Orders</li>
                        <hr />
                        <li>New order</li>
                        <hr />
                        <li>Add employee</li>
                        <hr />
                        <li>Employees</li>
                        <hr />
                        <li>Add customer</li>
                        <hr />
                        <li>Customers</li>
                        <hr />
                        <li>Services</li>
                    </ul>
                </nav>

                {/* Main Content */}
                <div className="main-content">
                    <h3 className="form-title">
                        Add a new customer <span className="underline"></span>
                    </h3>
                    <form className="customer-form">
                        <input type="email" placeholder="Customer email" required />
                        <input type="text" placeholder="Customer first name" required />
                        <input type="text" placeholder="Customer last name" required />
                        <input type="tel" placeholder="Customer phone (555-555-5555)" required />
                        <button type="submit" className="submit-btn">Add Customer</button>
                    </form>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    );
};

export default AddNewCustomer;
