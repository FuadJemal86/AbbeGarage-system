import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import banner1 from '../../AbeGarageCustomTemplate/assets/images/custom/banner/banner3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../AbeGarageCustomTemplate/assets/images/custom/misc/tire.webp'
import image3 from '../../AbeGarageCustomTemplate/assets/images/resource/image-8.jpg'
import image4 from '../../AbeGarageCustomTemplate/assets/images/background/bg-1.jpg'


function AboutBody() {
    return (
        <div className=''>
            <section className="video-section">
                <div data-parallax='{"y": 50}' className="sec-bg"
                    style={{ backgroundImage: `url(${banner1})` }}></div>
                <div className="auto-container">
                    <h5>Working since 1999</h5>
                    <h2 className=''>About Us <br /> </h2>
                    <div className="video-box">
                        <div className="video-btn"><a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                            className="overlay-link lightbox-image video-fancybox ripple"><FontAwesomeIcon icon={faCirclePlay} /></a>
                        </div>
                        <div className="texts">Watch intro video <br /> about us</div>
                    </div>
                </div>
            </section>


            <section className="about-section-three">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="content">
                                <h2>We are highly skilled mechanics <br /> for your car repair</h2>
                                <div className="texts">
                                    <p>
                                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                                    </p>
                                    <p>
                                        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information heading towards a streamlined cloud solution. User generated content in real-time will have multiple.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image">
                                <img src={image1} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="video-section">
                <div
                    data-parallax='{"y": 50}'
                    className="sec-bg"
                    style={{ backgroundImage: `url(${image4})` }}
                ></div>
                <div className="auto-container">
                    <h5>Working since 1992</h5>
                    <h2>We are leader <br /> in Car Mechanical Work</h2>
                    <div className="video-box">
                        <div className="video-btn">
                            <a
                                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                                className="overlay-link lightbox-image video-fancybox ripple"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className=""><FontAwesomeIcon icon={faCirclePlay} /></i>
                            </a>
                        </div>
                        <div className="texts">Watch intro video <br /> about us</div>
                    </div>
                </div>
            </section>






            <section className="team-section">
                <div className="auto-container">
                    <div className="top-content">
                        <div className="row m-0 justify-content-between">
                            <div className="sec-title">
                                <h2>Our Team</h2>
                            </div>
                            <div className="texts">
                                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a <br /> new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User <br /> generated content in real-time will have multiple touchpoints for offshoring.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 team-block-one">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                                <div className="image">
                                    {/* <img src={image3} alt="" /> */}
                                    <div className="overlay-box">
                                        <ul className="social-links">
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Michale Joe</h4>
                                    <div className="designation">Main Supervisor</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 team-block-one">
                            <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                                <div className="image">
                                    {/* <img src={} alt="" /> */}
                                    <div className="overlay-box">
                                        <ul className="social-links">
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Mark John</h4>
                                    <div className="designation">Main Mechanic</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 team-block-one">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
                                <div className="image">
                                    {/* <img src={image3} alt="" /> */}
                                    <div className="overlay-box">
                                        <ul className="social-links">
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Merry Desulva</h4>
                                    <div className="designation">Main Supervisor</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 team-block-one">
                            <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
                                <div className="image">
                                    {/* <img src={image3} alt="" /> */}
                                    <div className="overlay-box">
                                        <ul className="social-links">
                                            <li><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                                            <li><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>John Michale</h4>
                                    <div className="designation">Junior Helper</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            

        </div>
    )
}

export default AboutBody
