import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/dp2.png";
import resume from "../../assets/resume.svg"
import "../../../node_modules/boxicons/css/boxicons.min.css"

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hey">Hey there!</span>
        <span className="introText">
          I'm <span className="introName">Dhanush Mohan</span>
          <br />
          Python Developer
        </span>
        <p className="introPara">
          An enthusiastic programmer aspiring to explore new opportunities in
          the field of Technology and Development keeping the learning process
          on.
        </p>
        <div className="social">
            <Link href="#" className="socialItem"><i className="bx bxl-linkedin"></i></Link>
            <Link href="#" className="socialItem"><i className="bx bxl-github"></i></Link>
            <Link href="#" className="socialItem"><i className="bx bxl-instagram"></i></Link>
            <Link href="#" className="socialItem"><i className="bx bxl-whatsapp"></i></Link>
            <Link href="#" className="socialItem"><i className="bx bxl-gmail"></i></Link>
        </div>
        <Link><button className="btn">
            <div className="resumeDiv">
                <img src={resume} alt="Resume" className="resume" />
                <p>Resume</p>
            </div>
            </button></Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
