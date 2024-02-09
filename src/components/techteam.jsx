import React from "react";
import techTeam from "../jsonFIles/techTeam.json";
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";


const Techteam = () => {
    return <>
        <div className='uni-up-margin reveal '>
            <h1 className='title'>Our Tech Team</h1>

            <div className='cards-list teams tech-team-white'>
                {techTeam.techTeam.map((team) => (
                    <div key={team.id} className={`card tech-team-card red-back reveal-from-${team.id % 2 === 0 ? 'left' : 'right'}`}>
                        <div className='card-team-image'>
                            <img src={team.photo} alt={team.name} className='card-team-image' />
                        </div>
                        <div className='card-desc desc-flex'>
                            <div className="team-info tech-team-info">
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
}
export default Techteam;