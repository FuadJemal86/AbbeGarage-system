import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../AbeGarageCustomTemplate/assets/css/style.css';
import '../../AbeGarageCustomTemplate/assets/css/responsive.css';
import '../../AbeGarageCustomTemplate/assets/css/color.css';
import banner1 from '../../AbeGarageCustomTemplate/assets/images/custom/banner/banner3.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import image4 from '../../AbeGarageCustomTemplate/assets/images/background/bg-1.jpg'

function ServiceBody() {
    return (
        <div className='page-wrapper'>
            <section className="page-title" style={{ background: `url(${banner1})` }}>
                <div className="auto-container">
                    <h2>Services</h2>
                    <ul className="page-breadcrumb">
                        <li><a href="/service">home</a></li>
                        <li>Services</li>
                    </ul>
                </div>
                <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
            </section>

            <section className="services-section style-three">
                <div className="auto-container">
                    <div className="sec-title style-two">
                        <h2>Services that we offer</h2>
                        <div className="texts">
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Performance Upgrade', icon: 'flaticon-power' },
                            { title: 'Transmission Services', icon: 'flaticon-gearbox' },
                            { title: 'Break Repair & Service', icon: 'flaticon-brake-disc' },
                            { title: 'Engine Service & Repair', icon: 'flaticon-car-engine' },
                            { title: 'Tyre & Wheels', icon: 'flaticon-tire' },
                            { title: 'Denting & Painting', icon: 'flaticon-spray-gun' },
                            { title: 'Air Conditioning Evac', icon: 'flaticon-air-conditioning' },
                            { title: 'General Service & Washing', icon: 'flaticon-car-service' }
                        ].map((service, index) => (
                            <div key={index} className="col-lg-4 service-block-one">
                                <div className="inner-box hvr-float-shadow">
                                    <h5>Service and Repairs</h5>
                                    <h2>{service.title}</h2>
                                    <a href="service-details.html" className="read-more">read more +</a>
                                    <div className="icon"><span className={service.icon}></span></div>
                                </div>
                            </div>
                        ))}
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

        </div>
    )
}

export default ServiceBody
