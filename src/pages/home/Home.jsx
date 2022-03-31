import React from "react";
import ButtonArrow from "../../components/buttonArrow/ButtonArrow";
import "./Home.css";

export default function Home() {
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

          <h2 className="homeText checkoutTitle">List to Do</h2>
          <div className="homeCheckout">
            <p>Check, Create, and Update Your List!!</p>
            <ButtonArrow path={"/todo-list"} />
          </div>
          <h2 className="homeText checkoutTitle">About me</h2>
          <div className="homeCheckout">
            <p>Learn More About ME ( Izac )</p>
            <ButtonArrow path={"/about"} />
          </div>
        </section>
      </div>
    </>
  );
}
