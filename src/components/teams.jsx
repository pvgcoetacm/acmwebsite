import React from 'react';
import { Link } from 'react-router-dom';
import teamData from '../jsonFIles/teams.json';
import { SocialIcon } from 'react-social-icons';
const Teams = () => {
    return (
        <>
            <div className='uni-up-margin reveal'>
                <h1 className='title'>Our Team</h1>
                <div className='cards-list teams'>
    {teamData.teams.map((team) => (
        <div key={team.id} className={`card red-back reveal-from-${team.id % 2 === 0 ? 'left' : 'right'}`}>
            <div className='card-team-image'>
                <img src={team.photo} alt={team.name} className='card-team-image' />
            
            <div className='card-desc'>
                <div className="team-info">
                    <h2>{team.name}</h2>
                    <p>{team.role}</p>
                </div>
            </div>
            </div>
            <div className="team-button">
                <Link className="blue-btn" to={`/team/${encodeURIComponent(team.id)}`}>Read More</Link>
                <div style={{ marginLeft: '95px', marginTop: '5px', fontWeight: 'bold' }}>
                    <SocialIcon url={team.linkedin} />
                </div>
            </div>
        </div>
    ))}
</div>

            </div>
        </>
    );
};

export default Teams;
