import React from "react";
import { Link } from "react-router-dom";
import "./ButtonArrow.css";

export default function ButtonArrow(props) {
  return (
    <>
      <Link
        to={props.path}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className="arrowContainer">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </Link>
    </>
  );
}
