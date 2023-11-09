import React from 'react'
import "./contact.css"
import LinkedInIcon from "../../assets/icons8-linkedin-144.png";
import GithubIcon from "../../assets/icons8-github-144.png";
import InstaIcon from "../../assets/icons8-instagram-144.png";
import WhatsAppIcon from "../../assets/icons8-whatsapp-144.png";
import GmailIcon from "../../assets/icons8-gmail-144.png";


const Contact = () => {
  return (
    <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Fill in your details here. I'll get in touch with you very shortly.</span>
        <form className='contactForm' action="">
            <input type="text" className="name" placeholder='Enter your Name'/>
            <input type="email" className="email" placeholder='Enter your Email'/>
            <textarea name="message" rows="5" placeholder='Type in your message' className='msg'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={LinkedInIcon} alt="LinkedIn" className="link" />
              <img src={GithubIcon} alt="GitHub" className="link" />
              <img src={InstaIcon} alt="Instagram" className="link" />
              <img src={WhatsAppIcon} alt="Whatsapp" className="link" />
              <img src={GmailIcon} alt="Gmail" className="link" />
            </div>
        </form>
        
    </div>
  )
}

export default Contact