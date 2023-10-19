import React from 'react';
import './navbar.css'; 
import logo from '../../assets/logo1-light.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skils</Link>
            <Link className="desktopMenuListItem">Experience</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Education</Link>
        </div>
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar;