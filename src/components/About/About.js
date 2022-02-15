import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutus from '../../assets/images/aboutus.png';

const About = () => {
    return (
        <section className="about-us" id="about">
            <Container>
                <Row>
                    <Col lg={6} className="align-self-center">
                        <Row>
                            <Col lg={12}>
                                <div className="item">
                                        <h3>About Us</h3>
                                            <p>We are a friendly group of habesha base in Manchester. We organise a variety of activies from football to Mountain Climbing to running and other fun activies. </p>
                                    <div className="main-button-red">
                                         <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                                </div>
                                    </div>
                            </Col>
                            <Col lg={12}>
                                <div className="item">
                                    <h3>Join Our Football Session at Salford Albert Park  </h3>
                                        <p>Tuseday 9-10pm for over 35</p>
                                        <p>Thursday 8-10pm everyone welcome</p>
                                        <p>Sunday 9-11am everyone welcome</p>
                                    <div className="main-button-yellow">
                                        <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                                    </div>
                                </div>                    
                            </Col>
                           
                        </Row>                        
                    </Col>
                    <Col lg={6} >
                                 <article>
                                    <img src={aboutus} alt=""/>              
                                </article>
                    </Col>
                </Row>                
            </Container>            
        </section>
    );
};

export default About;