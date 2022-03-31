import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="aboutLayout">
        <section className="contentAbout">
          <h1>
            About <span>"Me"</span>
          </h1>
          <div className="izacPicture" />
          <p>
            "Hello User!!! My name is <span>Izac</span>... i hope you like this{" "}
            <span>InyongList</span>
            {"  "}Web App as much as i do...
            <br />
            Enjoy It!!! and nice to meet you
            <br />
            <br />
            Want to know more about me??
            <br />
            Checkout my Social Media Account:
          </p>
          <div className="SosmedIcon">
            <a
              href="https://www.instagram.com/izac_aqsha/"
              rel="noreferrer"
              target={"_blank"}
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://github.com/IzacFE"
              rel="noreferrer"
              target={"_blank"}
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.facebook.com/aqsha.izac"
              rel="noreferrer"
              target={"_blank"}
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <p>
            Send me Feedback in email : <span>izacaqsha@gmail.com</span>
          </p>
        </section>
      </div>
    </>
  );
}
