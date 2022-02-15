import React from 'react';
import photo from '../../../assets/images/blackpool.jpg';

const PrevActivity = () => {
    return (
        <div class="item">
        <img src={photo} alt=""/>
        <div class="down-content">
          <h4>Blackpool Tournament</h4>
          <div class="info">
            <a href="event-details-blackpool.html">View Gallery</a>
          </div>
        </div>
      </div>
    );
};

export default PrevActivity;