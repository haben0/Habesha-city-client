import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

const SubHeader = () => {
    return (
        <div className="sub-header">
            <Container>
                <Row>
                    <Col lg={8} sm={8}>
                        <div className="left-content">
                         <p> Email us at
                            <em> info@habeshacity.com
                            </em> or call us on <em>+44 781 777 444
                            </em>
                         </p>
                        </div>
                    </Col>
                    <Col lg={4} sm={4}>
                    <div className="right-icons">
                     <ul>
                        <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook}/></a></li>
                        <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter}/></a></li>
                    </ul>
                </div>
                    </Col>
                </Row>
            </Container>            
        </div>
    );
}

export default SubHeader;