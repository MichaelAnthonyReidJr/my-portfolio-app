import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-container">
            <div className = "left-side">
                <div className = "location">
                    <FaHome size ={20} style ={{color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>Saratoga Springs, UT</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className = "phone">
                    <h4><FaPhone size ={20} style ={{color: "#fff", marginRight: "2rem" }} />
                    (201) 294-4360</h4>
                </div>
                <div className = "email">
                    <h4><FaMailBulk size ={20} style ={{color: "#fff", marginRight: "2rem" }} />
                    michael.reid.dev@gmail.com</h4>
                </div>
            </div>
            <div className = "right-side">
                <h4>About the company</h4>
                <p>ReidSilience LLC. Family-owned & operated since 2023 </p>
                <div className = "social">
                <FaFacebook size ={30} style ={{color: "#fff", marginRight: "1rem" }} /> 
                <FaLinkedin size ={30} style ={{color: "#fff", marginRight: "1rem" }} />
                <FaGithub size ={30} style ={{color: "#fff", marginRight: "1rem" }} />   
                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer
