import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

const ContactUs = () => {
    return (

        <section className="contact-us" id="contact">
            <Container>
                <Row>
                    <Col lg={8} className="align-self-center">
                        <Row>
                            <Col lg={12}>
                                <form id="contact" action="" method="post">
                                    <Row>
                                        <Col lg={12}>
                                            <h2>Let's get in touch</h2>
                                        </Col>
                                        <Col lg={4}>
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="YOURNAME...*" required=""/>
                                            </fieldset>                                            
                                        </Col>
                                        <Col lg={4}>
                                            <fieldset>
                                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="YOUR EMAIL..." required=""/>
                                            </fieldset>
                                        </Col>
                                        <Col lg={4}>
                                            <fieldset>
                                                <input name="subject" type="text" id="subject" placeholder="SUBJECT...*" required=""/>
                                            </fieldset>
                                        </Col>
                                        <Col lg={12}>
                                            <fieldset>
                                                <textarea name="message" type="text" className="form-control" id="message" placeholder="YOUR MESSAGE..." required=""></textarea>
                                            </fieldset>
                                        </Col>
                                        <Col lg={12}>
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="button">SEND MESSAGE NOW</button>
                                            </fieldset>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>                               
                    </Col>
                    <Col lg={4}>
                        <div className="right-info">
                            <ul>
                                <li>
                                    <h6>Phone Number</h6>
                                    <span>+44 781 777 444</span>
                                </li>
                                <li>
                                    <h6>Email Address</h6>
                                    <span>info@habeshacity.com</span>
                                </li>
                                <li>
                                    <h6>Street Address</h6>
                                    <span>Manchester TBC</span>
                                </li>
                                <li>
                                    <h6>Website URL</h6>
                                    <span>www.habeshacity.com</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
           <Footer/>
        </section> 

    );
};

export default ContactUs;