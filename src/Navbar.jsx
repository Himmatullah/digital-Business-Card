import React from "react";

import Smile from "./assets/SmilingFace.png"

import "./index.css";
import Button from "./assets/Button.png"


export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <div>
                <img src={Smile} alt="" />
            </div>
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <p className="link">laurasmith.website</p>.
            <div className="btn">
                 <button className="btn-email email" >Email</button>
                 <button className="btn-email linked fab fa-linkedin">LinkedIn</button>
            </div>
            <div className="about">About</div>
                <div className="about-desc">I am a frontend developer with a particular interest in making things 
                simple and automating daily tasks. I try to keep up with security and best practices,
                and am always looking for new things to learn.</div>
                <div className="about">Interests</div>
                <div className="about-desc">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                Travel geek. Pop culture ninja. Coffee fanatic.
            </div>
        </div>  
        
     </>
    );
}