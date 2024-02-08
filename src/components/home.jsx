import React, { Component } from 'react';
import { Link, Link as ScrollLink } from 'react-router-dom';
import About from './about';
import Event from './events'
import Teams from './teams';
import '../scripts/animate'
import EventCarousel from './EventCarousel';

const  Home =()=>{
    const allimgs =[
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705908183/acmAssets/image30_xjfzr8.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705908181/acmAssets/image28_um0kll.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907644/acmAssets/image24_ttjlkv.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907644/acmAssets/image21_er2vck.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907644/acmAssets/image22_nutrz0.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907644/acmAssets/image23_mjcvcz.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907643/acmAssets/image52_oefids.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907643/acmAssets/image51_gar0bs.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907643/acmAssets/image50_woojl0.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907643/acmAssets/image49_mo7cb1.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906538/acmAssets/image38_erkpil.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906538/acmAssets/image32_rafile.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906537/acmAssets/image31_wfaszb.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906538/acmAssets/image33_tunh38.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906536/acmAssets/image41_afwr3x.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906536/acmAssets/image34_oorjt9.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906536/acmAssets/image43_jimcvb.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906536/acmAssets/image45_f1ra9x.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705906536/acmAssets/image35_v7vqwg.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907648/acmAssets/image46_x8xzry.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705907643/acmAssets/image47_ndavii.jpg',
        'https://res.cloudinary.com/dn07sxmaf/image/upload/v1705909002/acmAssets/image3_imwg4m.jpg'

      ]
    return<>
    <div className="uni-up-margin home">
    <div className="overlay-left-acm-home">
            <img src={require('../assets/acm_overlay_0 3.png')} alt="" />
        </div>
    <div className="mega-cont-home-2 home">
        

        <div className="text-cont-home">
            <p className="title-home-banner">
            PVGCOET <br/> ACM Student <br /> Chapter
            </p>
            <p className="text">
            lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ipsum
            </p>
            <div className="two-btns-home">
                <div className="blue-btn">
                  <a href="#whyjoin">Why join</a>
                </div>
                <div className="">
                    <Link className="light-btn" to='https://docs.google.com/forms/d/1vCa3Gzku4dQ4HBN3NOIflM6QPtosuAxOu399rwxd2iQ/viewform?edit_requested=true'>Newsletter</Link>
                </div>
            </div>
        </div>
        

        <div className="slider-cont-home">
            <div className="slider">
                <div className="slider-overlay"></div>
            <EventCarousel images={allimgs}/>
            </div>
        </div>
        <div className="overlay-curly-design-home"></div>
    </div>

    

<div id='event'>
<Event/>
</div>

    <div id='team'>
        <Teams/>
    </div>

    <div id='about'>
        <About/>
    </div>

    <div id='whyjoin'>
        <h1 className="title">Why join</h1>
        <div className="mini-grid-2 reveal-from-right">
            <img className="whyjoin-num" src={require('../assets/one.png')} alt="" />
            <p className="text">Access to ACM's extensive digital library and resources, including technical journals, magazines, and conference proceedings</p>
        </div>
        <div className="mini-grid-2 reveal-from-right">
            <img className="whyjoin-num"  src={require('../assets/two.png')} alt="" />
            <p className="text"> Opportunities to network with industry professionals, faculty members, and other students through events, seminars, and workshops.</p>
        </div>
        <div className="mini-grid-2 reveal-from-right">
            <img className="whyjoin-num"   src={require('../assets/three.png')} alt="" />
            <p className="text">Exposure to cutting-edge research and developments in the field through guest speakers and events.</p>
        </div>
        <div className="mini-grid-2 reveal-from-right">
            <img className="whyjoin-num"  src={require('../assets/four.png')} alt="" />
            <p className="text">Opportunities to participate in programming contests, hackathons, and other tech-related competitions.</p>
        </div>
        <div className="mini-grid-2 reveal-from-right">
            <img className="whyjoin-num"  src={require('../assets/five.png')} alt="" />
            <p className="text">Access to scholarship and funding opportunities.</p>
        </div>
        <div className="mini-grid-2 reveal-from-right">
            <img className="whyjoin-num"  src={require('../assets/six.png')} alt="" />
            <p className="text">Opportunities to develop leadership skills through involvement in chapter activities and events.</p>
        </div>
        <div className="mini-grid-2 reveal-from-right">

            <img className="whyjoin-num"  src={require('../assets/seven.png')} alt="" />
            <p className="text">Access to mentorship and career guidance from faculty members and industry professionals.</p>
        </div>
    </div>
    </div>
    
    </>
}
export default Home;