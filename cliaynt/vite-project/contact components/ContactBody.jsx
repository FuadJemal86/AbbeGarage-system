import React from 'react'
import banner from '../../AbeGarageCustomTemplate/assets/images/background/bg-3.jpg'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


function ContactBody() {
    return (
        <div className='page-wrapper'>
            <section className="page-title" style={{ background: `url(${banner})` }}>
                <div className="auto-container">
                    <h2>Contact</h2>
                    <ul className="page-breadcrumb">
                        <li><a href="index.html">home  </a></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <h1 data-parallax='{"x": 200}'>Car Repairing</h1>
            </section>

            <section class="contact-section">
                <div class="auto-container">
                    <div class="contact-title">
                        <h2>Drop us message</h2>
                        <div class="texts">Praising pain was born and I will give you a complete account of the system, and </div>
                    </div>
                    <div class="row clearfix">

                        {/* <!--Form Column--> */}
                        <div class="form-column col-lg-7">
                            <div class="inner-column">
                                {/* <!--Contact Form--> */}
                                <div className="contact-form">
                                    <form method="post" action="sendemail.php" id="contact-form">
                                        <div className="row clearfix">
                                            <div className="form-group col-md-12">
                                                <input type="text" name="form_name" placeholder="Your Name" required />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <input type="text" name="email" placeholder="Your Email" required />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <input type="text" name="form_subject" placeholder="Subject" required />
                                            </div>

                                            <div className="form-group col-md-12">
                                                <textsarea name="form_message" placeholder="Massage"></textsarea>
                                            </div>

                                            <div className="form-group col-md-12">
                                                <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                                <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait..."><span>Submit now</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <!--End Contact Form--> */}
                            </div>
                        </div>

                        {/* <!--Info Column--> */}
                        <div class="info-column col-lg-5">
                            <div class="container">
                                <h4 className='fs-1 mb-2'>Our Address</h4>
                                <div class="texts">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service.</div>
                                <ul>
                                    <li><i class=""><FaMapMarkerAlt /></i><span>Address:</span> Ethopia, Jimma Town 5238 MT, La city, IA 5224</li>
                                    <li><i class=""><FaEnvelope /></i><span>email:</span> fuad47722@gmail.com</li>
                                    <li><i class=""><FaPhone /></i><span>phone:</span> 0902920301</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    )
}

export default ContactBody
