import React from "react";
import { Link } from "react-router-dom";
import YouTube_Logo from '../Assets/YouTube_Logo.svg'
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <img
          src={YouTube_Logo}
          alt="YouTube Logo"
          className='nav-logo'
        />
      </Link>
      <Link className="nav-about" to="/about">
        About
      </Link>
    </nav>

  );
};

export default NavBar;
