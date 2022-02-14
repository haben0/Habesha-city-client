import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import vid from '../../assets/videos/habesha_sefer1.mp4';

const Banner = () => {
    return (
        <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
            <source src={vid} type="video/mp4" />
        </video>
  
        <div className="video-overlay header-text">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="caption">
                        <h6>Hello Beautiful People</h6>
                            <h2>Welcome to Habesha City</h2>
                            <p>We are a Habesha community at the heart of Manchester exicited to present you with a number of event to put on your calendar. We aim to build a city we would love to live in. So what are you waiting for, join us and be part of something special.</p>
                        <div className="main-button-red">
                        <div className="scroll-to-section"><a href="#events">View Upcoming Events</a></div>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>           
        </div>
    </section>
    );
}

export default Banner;