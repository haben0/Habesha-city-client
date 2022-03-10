import React from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';
import Activity from './Activity';

const UpcomingActivity = ({upcomingActivities}) => {
  return (
    !upcomingActivities.length ? 
    (
      <Row>
        <Col lg={6}>
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      </Row>
      ) 
  : 
  (
    <Row>
      {upcomingActivities.map((activity) => <Activity key={activity._id} activity={activity}/>)}
    </Row>
  )
    
  );
};

export default UpcomingActivity;