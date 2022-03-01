import React from 'react';
import './navbar.css';

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container' >
            LOGO
            <ul className='navbar-list'>
                <Link to='/explore' style={{ textDecoration: 'none' }}><li className='navbar-list-item'>Explore</li></Link>
                <Link to='/tattoos' style={{ textDecoration: 'none' }}><li className='navbar-list-item'>Tattoos</li></Link>
                <Link to='/artists' style={{ textDecoration: 'none' }}><li className='navbar-list-item'>Artists</li></Link>
                <Link to='/studios' style={{ textDecoration: 'none' }}><li className='navbar-list-item'>Studios</li></Link>
            </ul>

            <div className='navbar-btn'>
                <button className='navbar-login-btn'>Log in</button>
                <button className='navbar-signup-btn'>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;