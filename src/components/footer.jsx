import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css'
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer>
            <div className="mega-grid-2-abt">
                <div className="socials-cont col-2 footer-items">
                    <h2>Follow us on Social Media</h2>
                    <div className="social-icons-row">
                        <Link className="social-link" to='https://www.instagram.com/pvg_acm/'>
                            <SocialIcon url='https://www.instagram.com/pvg_acm/' />
                        </Link>
                        <Link className="social-link" to='https://www.linkedin.com/company/pvgcoet-acm-student-chapter'>
                            <SocialIcon url='https://www.linkedin.com/company/pvgcoet-acm-student-chapter' />
                        </Link>
                        <Link className="social-link" to='https://www.acm.org/'>
                            <SocialIcon url='https://www.acm.org/' />
                        </Link>
                    </div>

                </div>

                <div className="legal-cont col-2 footer-items">
                    <a className="footer-link" href="mailto:chatep@acm.org">For Enquiries</a>
                    <a className="footer-link" href="mailto:">For Complaints</a>
                    <a className="footer-link" href="https://www.acm.org/privacy-policy">Privacy Policy</a>
                </div>

                <div className="address-cont col-2 footer-items">
                    <div className="address">
                        Pune Vidhyarthi Grihas College Of Engineering And Technology & G. K. Pate (Wani) Institute of Management
                        44, Vidya Nagari, Shiv Darshan Rd, Parvati,
                        Pune, Maharashtra 411009
                    </div>
                </div>
            </div>
            <div className="tech-team-cont">
                Website Created ❤️ by <Link className="tech-team-link" to='/techTeam'>Tech Team 2023-24</Link>
            </div>
        </footer>
    );
}

export default Footer;
