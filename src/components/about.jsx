import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';

const About = () => {
    return <>
    <h1 className="title">About Us</h1>
        <div className="mega-grid-2-abt">
            
            <div className="col-1 reveal-from-left">
                <img src={require('../assets/aboutimg.png')} alt="" />
            </div>
            
            <div> <hr className="middle-line"/></div> 
            <div className="col-2 reveal-from-right">
                <p className="text">
                    ACM is the world's largest educational and scientific computing society, 
                    aimed at increasing the level and visibility of ACM activities across the globe. 
                    ACM is a society of dedicated professionals, academicians, and research scientists, 
                    who contribute towards the growth of technological innovations. 
                    The purpose of Society is to inculcate computational thinking aiding in career development and a lifelong learning experience. 
                </p>

                <div className="reveal-from-left">
                    <Link className="blue-btn" to='https://india.acm.org/'>Read More</Link>
                </div>

            </div>


            <div className="overlay-upper-left overlay-imgs">
                <img src={require('../assets/left_top.png')} alt="" />
            </div>
            <div className="overlay-down-right overlay-imgs">
            <img src={require('../assets/right_bottom.png')} alt="" />
            </div>
        </div>
    </>
}

export default About;