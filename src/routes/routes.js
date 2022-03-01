import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from '../components/navbar/navbar';

import Home from '../views/home_page/home';
import Explore from '../views/explore_page/explore';
import Tattoos from '../views/tattoos_page/tattoos';
import Artists from '../views/artists_page/artists';
import Studios from '../views/studios_page/studios';

function Routers() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/explore' exact element={<Explore />}/>
            <Route path='/tattoos' exact element={<Tattoos />}/>
            <Route path='/artists' exact element={<Artists />}/>
            <Route path='/studios' exact element={<Studios />}/>
        </Routes>
    </Router>
  )
}

export default Routers