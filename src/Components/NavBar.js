import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://i.pinimg.com/originals/ad/8e/5f/ad8e5f82820190e47acd691f3d21d725.png"
            alt="youtube icon"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavBar;
