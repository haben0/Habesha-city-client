import React, {useState} from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../../actions/activities';
import FileBase from 'react-file-base64'


const ActivityForm = () => {
const [activityData, setActivityData] = useState({title: '', activityDate: '', activityTime: '', location: '', shortDescription: '', description: '',  selectedFile: '', tags: ''});  
const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();

  dispatch(createActivity(activityData));
}

    return (
      <Container>
        <Row>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={activityData.title} onChange={(e) => setActivityData({...activityData, title: e.target.value})}/>
          </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="date">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" value={activityData.activityDate} onChange={(e) => setActivityData({...activityData, activityDate: e.target.value})}/>
          </Form.Group>

          <Form.Group as={Col} controlId="time">
            <Form.Label>Event Time</Form.Label>
            <Form.Control type="time" value={activityData.activityTime} onChange={(e) => setActivityData({...activityData, activityTime: e.target.value})}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter where event is taking place" value={activityData.location} onChange={(e) => setActivityData({...activityData, location: e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="shortDesc">
          <Form.Label>Short Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={activityData.shortDescription} onChange={(e) => setActivityData({...activityData, shortDescription: e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={activityData.description} onChange={(e) => setActivityData({...activityData, description: e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="tag">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="Enter tag" value={activityData.tags} onChange={(e) => setActivityData({...activityData, tags: e.target.value})}/>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
          {/* <Form.Control type="file" value={activityData.selectedFile} onDone={(e) => setActivityData({...activityData, selectedFile: e.target.value})}/> */}
          <FileBase type='file' multiple={false} onDone={({ base64 }) => setActivityData({...activityData, selectedFile: base64 })} />
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