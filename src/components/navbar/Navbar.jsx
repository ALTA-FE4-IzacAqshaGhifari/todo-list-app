import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const [dark, setDark] = useState(true);

  return (
    <nav className="navbar">
      <ul className="navbarNav">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <li className="navItem">
            <i className="fa-solid fa-house" />
            <p className="navText">Home</p>
          </li>
        </Link>

        <Link
          to="/todo-list"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <li className="navItem">
            <i className="fa-solid fa-list-check" />
            <p className="navText">To do List</p>
          </li>
        </Link>

        <Link
          to="/about"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <li className="navItem">
            <i className="fa-solid fa-address-card" />
            <p className="navText">About</p>
          </li>
        </Link>

        <li
          className="navItem"
          // onClick={() => {
          //   setDark(!dark);
          // }}
        >
          <i className="fa-solid fa-sun"></i>
          <p className="navText">Theme</p>
        </li>
      </ul>
    </nav>
  );
}
