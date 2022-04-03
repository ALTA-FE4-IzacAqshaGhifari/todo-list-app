import React, { useContext } from "react";
import { ThemeContext } from "../../routes/WebRoute";
import "./About.css";

export default function About() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="aboutLayout">
        <section
          className={
            isDarkTheme ? "contentAbout darkContentAbout" : "contentAbout"
          }
        >
          <h1>About "Me"</h1>
          <div className="aboutMainContent">
            <div className="izacPicture" />
            <div className="aboutMainText">
              <p>
                "Hello User!!!
                <br />
                <br />
                My name is <span>Izac</span>... i created this InyongList Web
                App using ReactJS Library and Todoist API.
                <br />I hope you like InyongList as much as i do... Have a nice
                day!!!
              </p>
            </div>
          </div>

          <p>
            Want to know more about me??
            <br />
            Checkout my social media accounts:
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
            <a
              href="https://www.linkedin.com/in/izac-aqsha-ghifari-ab9991227/"
              rel="noreferrer"
              target={"_blank"}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <p>
            Want to send feedbacks? email me at <span>izacaqsha@gmail.com</span>
          </p>
        </section>
      </div>
    </>
  );
}
