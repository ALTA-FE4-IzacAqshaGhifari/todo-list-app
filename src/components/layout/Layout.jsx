import React, { useContext } from "react";
import "./Layout.css";

import Navbar from "../navbar/Navbar";
import { ThemeContext } from "../../routes/WebRoute";

export default function Layout(props) {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <main className={isDarkTheme ? "darkMain" : null}>{props.children}</main>
    </>
  );
}
