import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css'
import { FaEnvelope } from 'react-icons/fa'; // Import the email icon
import { FiInstagram, FiLinkedin } from 'react-icons/fi';
const Footer = () => {
    return (
        <>
            <footer>
                <div className="mega-grid-2-abt">
                    <div className="address-cont col-2 footer-items" style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={require('../assets/acmLogoWhiteMode-removebg-preview-removebg-preview.png')} alt="PVGCOET ACM" style={{ width: '100px', height: 'auto' }} />
                        </div>


                        <div className="address">
                            PVGCOET ACM Student Chapter is an auxiliary organization of ACM. PVGCOET ACM is one of the most reputed and distinguished technical chapters working with vision and determination since its inception in 2023.
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <h3>We would love to hear from you</h3>
                            <Link className="social-link" to='mailto:acmpvgcoet@gmail.com' style={{ display: 'flex', alignItems: 'center' }}>
                                <FaEnvelope style={{ marginRight: '1rem', fontSize: '2em' }} />
                                acmpvgcoet@gmail.com
                            </Link>
                        </div>
                    </div>


                    <div className="address-cont col-2 footer-items" style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <img src={require('../assets/bottomAcmLogo.png')} alt="ACM Official Logo" style={{ width: '80px', height: 'auto' }} />
                        </div>


                        <div className="address">
                            ACM is the world's largest educational and scientific computing society, aimed at increasing the level and visibility of ACM activities across the globe.
                        </div>
                        <div style={{ marginTop: 25 }} >
                      <Link to='https://dl.acm.org/'> ACM Digital Library</Link>
                      <br /><br />
                            <Link to='https://india.acm.org/'>ACM - Association for Computing Machinery </Link>
                        </div>
                       


                    </div>

                    <div className="address-cont col-2 footer-items" style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ borderRadius: '10%', overflow: 'hidden' }}>
                            <img src={require('../assets/pvgcoet.png')} alt="PVGCOET ACM" style={{ width: '55px', height: 'auto' }} />
                        </div>
                        <div className="address">
                            Pune Vidhyarthi Grihas College Of Engineering And Technology  & G. K. Pate (Wani) Institute of Management
                            44, Vidya Nagari, Shiv Darshan Rd, Parvati,
                            Pune, Maharashtra 411009
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <h3>Follow us on Social Media</h3>

                            <div className="social-icons-row">
                                <Link className="social-link" to='mailto:acmpvgcoet@gmail.com'>
                                    <FaEnvelope style={{ marginRight: '1rem', fontSize: '2em' }} />
                                </Link>

                                <Link className="social-link" to='https://www.instagram.com/pvg_acm/'>
                                    <FiInstagram style={{ marginRight: '1rem', fontSize: '2em' }} />
                                </Link>

                                <Link className="social-link" to='https://www.linkedin.com/company/pvgcoet-acm-student-chapter'>
                                    <FiLinkedin style={{ marginRight: '1rem', fontSize: '2em' }} />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </footer>
            <div className="tech-team-cont">
                Designed and Developed with ❤️ <Link className="tech-team-link" to='/techTeam'>  by Tech Team 2023-24</Link>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '10rem' }}>
                    Ⓒ PVGCOET ACM Student Chapter , 2024
                </div>

            </div>

        </>
    );
}

export default Footer;
