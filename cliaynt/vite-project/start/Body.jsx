import React from 'react'
import vban1 from '../../AbeGarageCustomTemplate/assets/images/custom/misc/vban1.jpg';
import vban2 from '../../AbeGarageCustomTemplate/assets/images/custom/misc/vban2.jpg';
import { FaPlay, FaArrowRight, FaCogs, FaCarBattery, FaTachometerAlt } from 'react-icons/fa';
import resourceImage3 from '../../AbeGarageCustomTemplate/assets/images/resource/image-3.jpg';
import background from '../../AbeGarageCustomTemplate/assets/images/background/bg-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCheck } from '@fortawesome/free-solid-svg-icons';
import banner1 from '../banner/banner5.jpg'
import banner2 from '../../AbeGarageCustomTemplate/assets/images/custom/banner/banner3.webp'



function Body() {
    return (
        <div className='start-body'>

            <section className="about-secti d-none d-md-block">

                <div className='d-flex about-us-main container '>
                    <div className='d-flex oil-image container '>
                        <div> <img src={vban1} alt="Workshop image 1" /></div>
                        <div><img src={vban2} alt="Workshop image 2" /></div>
                    </div>

                    <div className='container'>
                        <div className='well-text'>Welcome to Our Workshop</div>
                        <div className='well-text2'>We have 24 Years expriance</div>

                        <div>
                            <div className='about-paragraph'>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the
                                    end of the day, going forward, a new normal that has evolved from generation X is on
                                    the runway heading towards a streamlined cloud solution. User generated content in
                                    real-time will have multiple touchpoints for offshoring.</p>


                                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                                    test. Override the digital divide with additional clickthroughs from DevOps.
                                    Nanotechnology immersion along the information highway will close the loop on
                                    focusing.</p>
                            </div>
                            <div>
                                <button className='theme-btn btn-style-one style-two' >About Us <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="services-section mt-5">
                <div className="auto-container">
                    <div className="sec-title style-two">
                        <h4 className='well-text22'>Our Featured Services</h4>
                        <div className="textt">Bring to the table win-win survival strategies to ensure proactive domination. At
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

            <section className="features-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="inner-container">
                                <h3 className='text-qality'>Quality Service And <br /> Customer Satisfaction !!</h3>
                                <div className="textt-red">We utilize the most recent symptomatic gear to ensure your vehicle is
                                    fixed or adjusted appropriately and in an opportune manner. We are an individual from
                                    Professional Auto Service, a top-rated auto service network.</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image"><img src={banner1} alt="Feature image" /></div>
                        </div>
                    </div>
                </div>
            </section>


                    
                

            <section className="video-section mt-5 mb-5">
                <div data-parallax='{"y": 50}' className="sec-bg"
                    style={{ backgroundImage: `url(${''})`, backgroundPosition:'center',backgroundRepeat:'no'}}></div>
                <div className="auto-container">
                    <h5>Working since 1992</h5>
                    <h3 className='leder-text'>We are a leader <br /> in Car Mechanical Work</h3>
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

export default Body
