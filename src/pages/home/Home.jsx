import React, { useContext } from "react";
import ButtonArrow from "../../components/buttonArrow/ButtonArrow";
import { ThemeContext } from "../../routes/WebRoute";
import "./Home.css";

export default function Home() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="layoutHome">
        <section className="homeContent">
          <div className="logoContainer">
            <h1 className="logoInyong">
              <i className="fa-solid fa-clipboard-check"></i> InyongList
            </h1>
            <h2 className="introduction homeText">
              The best todo list that you ever use!!
            </h2>
          </div>

          <h2
            className={
              isDarkTheme
                ? "homeText checkoutTitle darkCheckoutTitle"
                : "homeText checkoutTitle"
            }
          >
            List to Do
          </h2>
          <div
            className={
              isDarkTheme ? "homeCheckout  homeCheckoutDark" : "homeCheckout "
            }
          >
            <p>Check, Create, and Update Your List!!</p>
            <ButtonArrow path={"/todo-list"} />
          </div>
          <h2
            className={
              isDarkTheme
                ? "homeText checkoutTitle darkCheckoutTitle"
                : "homeText checkoutTitle"
            }
          >
            About me
          </h2>
          <div
            className={
              isDarkTheme ? "homeCheckout  homeCheckoutDark" : "homeCheckout "
            }
          >
            <p>Learn More About ME ( Izac )</p>
            <ButtonArrow path={"/about"} />
          </div>
        </section>
      </div>
    </>
  );
}
