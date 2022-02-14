import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OwlCarousel from 'react-owl-carousel';
import Service from './Service';

const Services = () => {
    return (
        <section className="services">
    <Container>
        <Row>
            <Col lg={12}>
                <OwlCarousel items={3}  
                    className="owl-theme"  
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