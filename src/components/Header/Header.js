import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
    return (
  <header className="header-area header-sticky">
       <Container>
            <Row>    
                <Col>
                    <nav className="main-nav">
                        <a href="index.html" className="logo">
                            Habesha City
                        </a>
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="events.html">Events</a></li>
                            <li className="scroll-to-section"><a href="#about">About us</a></li>                                                                        
                            <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>                           
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>        
                </Col>             
            </Row>
        </Container>
  </header>
    );
}

export default Header;