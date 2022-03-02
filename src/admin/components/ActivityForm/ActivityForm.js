import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';


const ActivityForm = () => {
    return (
      <Container>
        <Row>
        <Form>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="date">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>

          <Form.Group as={Col} controlId="time">
            <Form.Label>Event Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter where event is taking place" />
          </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tag">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="Enter tag" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>      

        

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Row>

      </Container>
      
    );
};

export default ActivityForm;