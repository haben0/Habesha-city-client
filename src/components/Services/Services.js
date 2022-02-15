import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import Service from './Service';

const Services = () => {
    return (
        <section className="services">
    <Container>
        <Row>
            <Col lg={12}>
                <OwlCarousel items={3}  
                    loop  
                    nav  
                    margin={30} > 
                        <Service/>
                        <Service/>
                        <Service/>
                 </OwlCarousel>
            </Col>
        </Row>
    </Container>
  </section>
    );
};


export default Services;