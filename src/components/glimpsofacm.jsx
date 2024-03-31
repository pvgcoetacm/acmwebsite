import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import eventData from '../jsonFIles/events.json'; // Import the JSON file

const GlimpsAcm = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Set events data from imported JSON data
        setEvents(eventData.events);
    }, []);

    return (
        <>
            <div className='uni-up-margin reveal'>
                <h1 className='title'> Glimpses of PVGCOET ACM Activities</h1>
                
                <div className='cards-list teams'>
                    {events.map((event, index) => (
                        <div key={event.id} className={`card red-back reveal-from-${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className='card-desc desc-flex'>
                                <img
                                    src={event.imgLinks[0]} // Displaying only the first image
                                    alt={`Image 1`}
                                    className='card-team-image'
                                />  
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default GlimpsAcm;
