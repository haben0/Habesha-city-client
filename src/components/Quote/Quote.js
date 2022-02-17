import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Quote = () => {
    return (

        <section className="quote" id="gallery">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={12}>                                
                                <div className="item">
                                    <h3>   “Success is loving life and daring to live it.”  </h3>
                                         <h6>–  Maya Angelou </h6>              
                                </div>                            
                            </Col>
                        </Row>                    
                    </Col>
                </Row>
            </Container>          
                 
        </section>
    );
};

export default Quote;