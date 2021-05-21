import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube icon"
            style={{ height: "100px", width: "200px" }}
          />
        </Link>
        <Link className="button blue" to="/">
          Home
        </Link>{" "}
        <Link className="button blue" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
