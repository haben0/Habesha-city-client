import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import PrevActivity from './Activity/PrevActivity';

const PrevActivities = () => {
    return (

        <section class="previous-events" id="gallery">
            <Container>
                <Row>
                <Col lg={12}>
                    <div class="section-heading">
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