import React from "react";
import "./Layout.css";

import Navbar from "../navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}
