import React from 'react';
import Col from 'react-bootstrap/Col'
import photo1 from '../../../../assets/images/event01.jpg';

const Activity = ({activity}) => {
    return (
        <Col lg={6}>
            <div className="event-item">
                <div className="thumb">
                    <div className="price">                  
                    </div>
                    <a href="event-details-toughMudder.html"><img src={activity.selectedFile} alt=""/></a>
                </div>
                <div className="down-content">
                    <div className="date">
                        <h6>TBC <span>0</span></h6>
                    </div>
                    <a href="event-details-toughMudder.html"><h4>{activity.title}</h4></a>
                    <p>{activity.shortDescription}</p>
                </div>
            </div>
        </Col>    
    );
};

export default Activity;