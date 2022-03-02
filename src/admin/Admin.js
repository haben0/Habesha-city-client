import React, {useState} from 'react';
import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars
  } from '@fortawesome/free-solid-svg-icons';
import ActivityForm from './components/ActivityForm/ActivityForm';

const Admin = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
          <>
            <div className="sub-header">
            <Container>
                <Row>
                    <Col lg={8} sm={8}>
                        <div className="left-content">
                            <p><em> Habesha City</em> </p>
                        </div>
                    </Col>
                    <Col lg={4} sm={4}>
                    <div className="right-icons">
                     <ul>
                        <li><FontAwesomeIcon icon={faBars} color={"white"} onClick={handleShow} /></li>
                    </ul>
                </div>
                    </Col>
                </Row>
            </Container>            
        </div>
      
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>

            <ActivityForm/>
          </>
    );
};

export default Admin;