import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>YOUTUBE</div>
        <Link to="/">
          <img
            src="https://img.favpng.com/24/16/22/youtube-portable-network-graphics-logo-computer-icons-image-png-favpng-BPAdgQaY8pvk2Z118EJFpkLsA.jpg"
            alt="youtube icon"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>{" "}
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavBar;
