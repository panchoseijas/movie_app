import React from "react";
import './Footer.css'
import link_icon from '../LI-In-Bug.png'
import gmail_icon from '../Gmail_Logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="contact-info">
                <div className="info-details">
                    <img src={gmail_icon}></img>
                    <a href="mailto:seijasjuanfrancisco@gmial.com">seijasjuanfrancisco@gmail.com</a>
                </div>
                <div className="info-details">
                    <img src={link_icon}></img>
                    <a href="https://www.linkedin.com/in/juan-francisco-seijas-97a427275">Juan Francisco Seijas</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer