import React from "react";
import { NavLink, Link } from "react-router-dom";
import YouTube_Logo from '../Assets/YouTube_Logo.svg'
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container row">
        <Link to='/'>
          <img
            src={YouTube_Logo}
            alt="YouTube Logo"
            className='nav-logo'
          />
        </Link>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to='/' className='navlink'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className='navlink'>About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
