import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../routes/WebRoute";

export default function Navbar() {
  const { isDarkTheme, themeButton } = useContext(ThemeContext);

  return (
    <nav className={isDarkTheme ? "navbar darkNavbar" : "navbar"}>
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
          className="navItem navThemeButton"
          onClick={() => {
            themeButton();
          }}
        >
          {isDarkTheme ? (
            <i class="fa-solid fa-moon" />
          ) : (
            <i className="fa-solid fa-sun" />
          )}
          <p className="navText">Theme</p>
        </li>
      </ul>
    </nav>
  );
}
