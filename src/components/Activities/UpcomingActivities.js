import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Activity from './Activity/Activity';

const UpcomingActivities = () => {
    return (
            <section className="upcoming-events" id="events">
                <Container>
                    <Row>
                            <Col lg={12}>
                                <div className="section-heading">
                                    <h2>Upcoming Events</h2>
                                </div>                              

                            </Col>
                            <Col lg={4}>
                                 <div className="categories">
                                    <h4>Events Catgories</h4>
                                    <ul>
                                        <li><a href="event-details-footballtournament.html">Football Tournament</a></li><br/>
                                        <li><a href="event-details-marathon.html">Half Marathon</a></li><br/>
                                        <li><a href="event-details-toughMudder.html">Tough Mudder</a></li><br/>
                                        <li><a href="event-details-snowdon.html">Mountain Climbing</a></li><br/>
                                        <li><a href="event-details-barbeque.html">Gathering</a></li>
                                    </ul>
                                    <div className="main-button-red">
                                        <a href="events.html">All Upcoming Events</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Activity/>
                                    <Activity/>
                                    <Activity/>
                                    <Activity/>
                                </Row>
                            </Col>
                    </Row>
                </Container>    
            </section>
    );
};

export default UpcomingActivities;