import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import teamData from '../jsonFIles/teams.json';
import { SocialIcon } from 'react-social-icons';


const Teams = () => {
    const [year, setYear] = useState("teamYear24");
    const handleYearChange = (e) => {
        setYear(e.target.value);
    }
    useEffect(() => {
        console.log("year " + year);
    }, [year])
    return (
        <>
            <div className='uni-up-margin reveal'>
                <h1 className='title'>Our Team</h1>

                <div className="yearSelecter-cont">
                    <select className='yearSelecter' value={year} onChange={handleYearChange} name="" id="">
                        <option value="teamYear24">Current Year 2024-23</option>
                        <option value="teamYear23">Alumni Team 2023-24</option>
                    </select>
                </div>

                <div className='cards-list teams'>
                    {teamData[year].map((team) => (
                        <div key={team.id} className={`card red-back reveal-from-${team.id % 2 === 0 ? 'left' : 'right'}`}>
                            <div className='card-team-image'>
                                <img src={team.photo} alt={team.name} className='card-team-image' />  
                            </div>
                            
                            <div className='card-desc desc-flex'>
                                    <div className="team-info">
                                        <h2>{team.name}</h2>
                                        <p>{team.role}</p>
                                    </div>

                                    <div style={{ marginTop: '5px', fontWeight: 'bold' }}>
                                        <SocialIcon url={team.linkedin} />
                                    </div>
                                </div>
                            <div className="team-button">
                                {/* <Link className="blue-btn" to={`/team/${encodeURIComponent(team.id)}`}>Read More</Link> */}

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default Teams;
