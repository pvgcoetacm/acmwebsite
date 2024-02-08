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
      <div className="uni-up-margin">
      <div className="mega-cont-home-2 home more-info-justify-unset">
        
      <div className="slider-cont-home">
            <div className="slider slider-moreinfo">
                <div className="slider-overlay"></div>
            <EventCarousel images={event.imgLinks}/>
            </div>
        </div>

        <div className="text-cont-home text-moreinfo">
        <div className="title">{event.title}</div>
            <h3>Date:  {event.date}</h3>
            <h4>Time:  {event.time}</h4>
            <b>Attendance:  {event.attendance}</b>
        </div>

        
        <div className="overlay-curly-design-home"></div>
    </div>
        <div className="more-info-cont mg-up-moreinfo">
          {event.description}
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
