import "./HeroImageStyles.css";
import React from 'react';
import IntroImg from "../assets/Michael.jpg"; 
import { Link } from "react-router-dom" 

const HeroImage = () => {
  return (
    <div className = "hero">
        <div className = 'mask'>
            <img className = "into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className = "content">
            <p>Hello, I'm Reid</p>
            <h1>Software Developer</h1>
            <div>
                <Link to = "/projects" className="btn">Projects</Link>
                <Link to = "/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage