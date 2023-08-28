import React from "react";
import './Footer.css'



const Footer = () => {
    return (
        <footer>
            <div className="contact-info">
                <div className="info-details">
                    <img src="Gmail_icon.png"></img>
                    <a href="mailto:seijasjuanfrancisco@gmial.com">seijasjuanfrancisco@gmail.com</a>
                </div>
                <div className="info-details">
                    <img src='LI-In-Bug.png'></img>
                    <a href="https://www.linkedin.com/in/juan-francisco-seijas-97a427275">Juan Francisco Seijas</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer