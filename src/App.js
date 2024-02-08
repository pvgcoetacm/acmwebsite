import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Event from './components/events';
import Home from './components/home';
import Footer from './components/footer'
import MoreInfo from './components/eventmoreinfo';
import Teams from './components/teams';
import About from './components/about';
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/event' element={<Event />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/team' element={<Teams/>}></Route>
          <Route path='/moreInfo/:id' element={<MoreInfo />}></Route>
        </Routes>
        <ScrollToTop/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
