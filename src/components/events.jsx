import React from 'react';
import '../styles/main.css';
import EventCarousel from './EventCarousel';
import { Link } from 'react-router-dom';
import eventData from '../jsonFIles/events.json';
import MoreInfo from './eventmoreinfo';

const Event = () => {
  
  return (
    <>
      <div className='uni-up-margin'>
      <h1 className='title'> Our Events</h1>

      <div className='cards-list'>
        {eventData.events.map((event) => (

          <div key={event.id} className={`card reveal-from-${event.id % 2 === 0 ? 'left' : 'right'}`}>
            <div className='card-img'>
              <EventCarousel images={event.imgLinks} />

            </div>
            <div className='card-desc'>

              {event.description}

            </div>
            <div className="mp-up-btn">
              <Link
                className="light-btn"
                to={{
                  pathname: `/moreInfo/${encodeURIComponent(event.id)}`,
                }}
              >
                Read More
              </Link>

            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Event;
