import React from 'react';

import {Link} from 'react-router-dom';

function Navbar({navStatus, setNavStatus}) {

    const toggleNavbar = () =>{
        setNavStatus(!navStatus)
    };

    return (
        <nav className={`navbar ${navStatus === true ? 'inactive' : ''}`} >
            <div className='navbar-left'>
                <Link to='/' onClick={toggleNavbar}>&lt;Bojidar Boradjiev/&gt;</Link>
            </div>
            <div className={`navbar-right ${navStatus === true ? 'inactive' : ''}`} onClick={toggleNavbar}>
                <li><Link to='/about' onClick={toggleNavbar} >&lt;About/&gt;</Link></li>
                <li><Link to='/projects' onClick={toggleNavbar}>&lt;Projects/&gt;</Link></li>    
                <li><Link to='/contact' onClick={toggleNavbar}>&lt;Contact/&gt;</Link></li>  
  
            </div>  
            <div className={`hamburger`} onClick={toggleNavbar}>
                <i className='fas fa-bars'></i>
            </div>              
        </nav>
    );
};

export default Navbar;
