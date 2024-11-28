import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import banner1 from '../../AbeGarageCustomTemplate/assets/images/custom/banner/banner1.jpg';
import vban1 from '../../AbeGarageCustomTemplate/assets/images/custom/misc/vban1.jpg';
import vban2 from '../../AbeGarageCustomTemplate/assets/images/custom/misc/vban2.jpg';
import resourceImage3 from '../../AbeGarageCustomTemplate/assets/images/resource/image-3.jpg';
import resourceImage4 from '../../AbeGarageCustomTemplate/assets/images/resource/image-4.jpg';
import background from '../../AbeGarageCustomTemplate/assets/images/background/bg-1.jpg';
import { FaPlay, FaArrowRight, FaCogs, FaCarBattery, FaTachometerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';








function IconExample() {
    return (
        <div>
            <FaPlay />  {/* Play icon */}
            <FaArrowRight />  {/* Right arrow icon */}
            {/* Add other icons as needed */}
        </div>
    );
}


function Body() {
    
    return (
        <div className='page-wrapper'>
            
            

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
                        <div className="text">Watch intro video <br /> about us</div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image-box">
                                <img src={vban1} alt="Workshop image 1" />
                                <img src={vban2} alt="Workshop image 2" />
                                <div className="year-experience" data-parallax='{"y": 30}'><strong>17</strong> years <br />
                                    Experience</div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl-lg-5">
                            <div className="sec-title">
                                <h5>Welcome to Our Workshop</h5>
                                <h2>We have 24 years experience</h2>
                                <div className="text">
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                                        end of the day, going forward, a new normal that has evolved from generation X is on
                                        the runway heading towards a streamlined cloud solution. User generated content in
                                        real-time will have multiple touchpoints for offshoring.</p>
                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                                        test. Override the digital divide with additional clickthroughs from DevOps.
                                        Nanotechnology immersion along the information highway will close the loop on
                                        focusing.</p>
                                </div>
                                <div className="link-btn mt-40"><a href="/about"
                                    className="theme-btn btn-style-one style-two"><span>About Us <i
                                        className=""><FaArrowRight /></i></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section ">
                <div className="auto-container">
                    <div className="sec-title style-two">
                        <h2>Our Featured Services</h2>
                        <div className="text">Bring to the table win-win survival strategies to ensure proactive domination. At
                            the end of the day, going forward, a new normal that has evolved from generation X is on the
                            runway heading towards a streamlined cloud solution.</div>
                    </div>
                    <div className="row">
                        {/* Repeatable service blocks */}
                        <div className="col-lg-4 service-block-one">
                            <div className="inner-box hvr-float-shadow">
                                <h5>Service and Repairs</h5>
                                <h2>Performance Upgrade</h2>
                                <a href="#" className="read-more">read more +</a>
                                <div className="icon"><span className=""><FaCogs /></span></div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block-one">
                            <div className="inner-box hvr-float-shadow">
                                <h5>Service and Repairs</h5>
                                <h2>Performance Upgrade</h2>
                                <a href="#" className="read-more">read more +</a>
                                <div className="icon"><span className=""><FaCarBattery /></span></div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block-one">
                            <div className="inner-box hvr-float-shadow">
                                <h5>Service and Repairs</h5>
                                <h2>Performance Upgrade</h2>
                                <a href="#" className="read-more">read more +</a>
                                <div className="icon"><span className=""><FaTachometerAlt /></span></div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block-one">
                            <div className="inner-box hvr-float-shadow">
                                <h5>Service and Repairs</h5>
                                <h2>Performance Upgrade</h2>
                                <a href="#" className="read-more">read more +</a>
                                <div className="icon"><span className=""><FaCogs /></span></div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block-one">
                            <div className="inner-box hvr-float-shadow">
                                <h5>Service and Repairs</h5>
                                <h2>Performance Upgrade</h2>
                                <a href="#" className="read-more">read more +</a>
                                <div className="icon"><span className=""><FaCogs /></span></div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block-one">
                            <div className="inner-box hvr-float-shadow">
                                <h5>Service and Repairs</h5>
                                <h2>Performance Upgrade</h2>
                                <a href="#" className="read-more">read more +</a>
                                <div className="icon"><span className=""><FaCogs /></span></div>
                            </div>
                        </div>
                        {/* Additional service blocks go here */}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner-container">
                                <h2>Quality Service And <br /> Customer Satisfaction !!</h2>
                                <div className="text">We utilize the most recent symptomatic gear to ensure your vehicle is
                                    fixed or adjusted appropriately and in an opportune manner. We are an individual from
                                    Professional Auto Service, a top-rated auto service network.</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image"><img src={resourceImage3} alt="Feature image" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sec-title style-two">
                                <h2>Why Choose Us</h2>
                                <div className="text">Bring to the table win-win survival strategies to ensure proactive
                                    domination. Moving towards a new normal with streamlined solutions.</div>
                            </div>
                            {/* Icon boxes */}
                            <div className="icon-box">
                                <div className="icon"><span className=""><FontAwesomeIcon icon={faWrench} /> </span></div>
                                <h4>Certified Expert Mechanics</h4>
                            </div>
                            <div className="icon-box">
                                <div className="icon"><span className=""><FaTachometerAlt /></span></div>
                                <h4>Fast And Quality Service</h4>
                            </div>
                            <div className="icon-box">
                                <div className="icon"><span className=""><FaCarBattery /></span></div>
                                <h4>Best Prices in Town</h4>
                            </div>
                            <div className="icon-box">
                                <div className="icon"><span className=""><FaCogs /></span></div>
                                <h4>Awarded Workshop</h4>
                            </div>
                            {/* Additional icon boxes go here */}
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-title style-two">
                                <h2>Additional Services</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="image"><img src={resourceImage4} alt="Service image" /></div>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list">
                                        <li>General Auto Repair & Maintenance</li>
                                        <li>Transmission Repair & Replacement</li>
                                        <li>Tire Repair and Replacement</li>
                                        <li>State Emissions Inspection</li>
                                        <li>Break Job / Break Services</li>
                                        <li>Electrical Diagnostics</li>
                                        <li>Fuel System Repairs</li>
                                        <li>Starting and Charging Repair</li>
                                        <li>Steering and Suspension Work</li>
                                        <li>Emission Repair Facility</li>
                                        <li>Wheel Alignment</li>
                                        <li>Computer Diagaonstic Testing</li>
                                        {/* Additional list items go here */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                <div data-parallax='{"y": 50}' className="sec-bg"
                    style={{ backgroundImage: `url(${background})` }}></div>
                <div className="auto-container">
                    <h5>Working since 1992</h5>
                    <h2>We are a leader <br /> in Car Mechanical Work</h2>
                    <div className="video-box">
                        <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                            className="overlay-link lightbox-image video-fancybox ripple"><FontAwesomeIcon icon={faCirclePlay} /></a>
                        </div>
                        <div className="text">Watch intro video <br /> about us</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            
        </div>
    );
}

export default Body;
