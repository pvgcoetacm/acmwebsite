import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import '../styles/nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    handleMenuToggle();
  };

  const location = useLocation();

  const isMoreInfoPage = location.pathname.includes('/moreInfo');

  return (
    <>
      {console.log(location)}
      <nav className={`navbarr ${isMenuOpen ? 'open' : ''}`}>
        <div className="">
          <div className="nav_container">
            <div className="logo">
              <img src={require('../assets/logo.png')} className="logo" alt="" />
            </div>
            <div className="hamburger-menu" onClick={handleMenuToggle}>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="links">
          <ul>
            <li className="nav_item">
              {isMoreInfoPage ? (
                <Link to="/" className={location.pathname === '/' ? 'active_nav' : ''} onClick={handleLinkClick}>
                  Home
                </Link>
              ) : (
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={location.pathname === '/' ? 'active_nav' : ''}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              )}
            
            </li>
            <li className="nav_item">
             
              <NavHashLink to='/#event'>Events</NavHashLink>
              
            </li>
            <li className="nav_item">
            <NavHashLink to='/#team'>Our Team</NavHashLink>
              
            </li>
            <li className="nav_item">
            <NavHashLink to='/#about'>About Us</NavHashLink>
            </li>
            <li className="nav_item">
            <NavHashLink to='/#glimpses'>Glimpsess</NavHashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
