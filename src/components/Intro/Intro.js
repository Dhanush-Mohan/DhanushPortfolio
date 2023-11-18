import React from "react";
import "./intro.css";
import bg from "../../assets/dp1.png";
import resume from "../../assets/resume.svg";
import resumedoc from "../../assets/DHANUSH Resume Oct2023.pdf"
import LinkedInIcon from "../../assets/icons8-linkedin-144.png";
import GithubIcon from "../../assets/icons8-github-144.png";
import InstaIcon from "../../assets/icons8-instagram-144.png";
import WhatsAppIcon from "../../assets/icons8-whatsapp-144.png";
import GmailIcon from "../../assets/icons8-gmail-144.png";
import "../../../node_modules/boxicons/css/boxicons.min.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hey">Hey there!</span>
        <span className="introText">
          I'm <span className="introName">Dhanush Mohan</span>
          <br />
          Fullstack Developer
        </span>
        <p className="introPara">
          An enthusiastic programmer aspiring to explore new
          <br />
          opportunities in the field of Technology and Development
          <br />
          keeping the learning process on.
        </p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/dhanush-mohan-62359a259/"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
          </a>
          <a
            href="https://github.com/Dhanush-Mohan"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="GitHub" className="link" />
          </a>
          <a
            href="https://www.instagram.com/dhanush__mohan__/?hl=en"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstaIcon} alt="Instagram" className="link" />
          </a>
          <a
            href="https://wa.me/918925187432"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsAppIcon} alt="Whatsapp" className="link" />
          </a>
          <a
            href="mailto:dhanish4777@gmail.com"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GmailIcon} alt="Gmail" className="link" />
          </a>
        </div>
        <a href={resumedoc} download>
          <button className="btn">
            <div className="resumeDiv">
              <img src={resume} alt="Resume" className="resume" />
              <p>Resume</p>
            </div>
          </button>
        </a>
      </div>
      <div className="introdp">
        <img src={bg} alt="" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
