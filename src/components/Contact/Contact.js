import React from "react";
import "./contact.css";
import LinkedInIcon from "../../assets/icons8-linkedin-144.png";
import GithubIcon from "../../assets/icons8-github-144.png";
import InstaIcon from "../../assets/icons8-instagram-144.png";
import WhatsAppIcon from "../../assets/icons8-whatsapp-144.png";
import GmailIcon from "../../assets/icons8-gmail-144.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b47jkvc",
        "template_fgp146d",
        form.current,
        "4uf02Sl6oS8NJ0v4H"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Fill in your details here. I'll get in touch with you very shortly.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Enter your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Enter your Email"
          name="from_email"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Type in your message"
          className="msg"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
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
      </form>
    </section>
  );
};

export default Contact;
