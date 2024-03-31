import React from "react";
import EventCarousel from "./EventCarousel";
import { useParams } from 'react-router-dom';
import eventData from '../jsonFIles/events.json';
import '../styles/main.css'


const MoreInfo = () => {
  const { id } = useParams();
  console.log(id);


  const event = eventData.events.find(event => event.id === id);
  return (
    <>
      <div className="uni-up-margin event-more-info-uni-up-margin">
        <div className="mega-cont-home-2 home more-info-justify-unset">

          <div className="slider-cont-home">
            <div className="slider slider-moreinfo">
              <div className="slider-overlay"></div>
              <EventCarousel images={event.imgLinks} />
            </div>
          </div>

          <div className="text-cont-home text-moreinfo">
            <div className="title moreinfo-title">{event.title}</div>
            <h3 className="flex-center-moreinfo"> <img src={require('../assets/Date.png')} alt="" /> {event.date}</h3>
            <h4 className="flex-center-moreinfo"> <img src={require('../assets/time.png')} alt="" />  {event.time}</h4>
            <b className="flex-center-moreinfo"> <img src={require('../assets/people.png')} alt="" />   {event.attendance}</b>
          </div>


          <div className="overlay-curly-design-home"></div>
        </div>
        
        <div className="more-info-cont mg-up-moreinfo" style={{ whiteSpace: 'pre-line' }}>
          <h1 className="title moreinfo-title">Event Description</h1>
          {event.description}
        </div>


      </div>
    </>
  );
};

export default MoreInfo;
