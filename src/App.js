import './App.css';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import Event from './components/events';
import Home from './components/home';
import Footer from './components/footer'
import MoreInfo from './components/eventmoreinfo';
import Teams from './components/teams';
import About from './components/about';
import  Techteam  from './components/techteam';
import GlimpsAcm from './components/glimpsofacm';

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
          <Route path='/glimpses' element={<GlimpsAcm/>}></Route>
          <Route path='/team' element={<Teams/>}></Route>
          <Route path='/moreInfo/:id' element={<MoreInfo />}></Route>
          <Route path='/techTeam' element={<Techteam/>}></Route>
        </Routes>
        <ScrollToTop/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
