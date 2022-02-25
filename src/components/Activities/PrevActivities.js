import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import PrevActivity from './Activity/PrevActivity';

const PrevActivities = () => {
    const previousActivities = useSelector((state) => state.previousActivities)

    console.log(previousActivities);
    return (
        <section className="previous-events" id="gallery">
            <Container>
                <Row>
                <Col lg={12}>
                    <div className="section-heading">
                        <h2>Previous Events</h2>
                    </div>
                </Col>
                <Col lg={12}>
                <OwlCarousel items={4}
                            loop  
                            nav
                            dots  
                            margin={30}>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                    <PrevActivity/>
                </OwlCarousel>
                </Col>
                </Row>
            </Container> 
        </section>
    );
};

export default PrevActivities;