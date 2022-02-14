import React from 'react';
import icon1 from '../../assets/images/1.png';

const Service = () => {
    return (
    <div className="item">
        <div className="icon">
        <img src={icon1} alt=""/> 
        </div>
        <div className="down-content">
            <h4>Football Tournament </h4>
            <p>We host Football Tournament through out the year. Get in touch to find out more. All event will availble on the website.</p>
        </div>
    </div>
    );
};

export default Service;