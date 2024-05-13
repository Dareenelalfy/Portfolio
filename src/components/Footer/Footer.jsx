import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <hr class="footer-line"></hr>
      <div className="app__footer_info">
        <div class="social-buttons">
          <a
            href="https://github.com/dareenelalfy"
            class="github-button"
            
          > <FaGithub style={{ color: "white" , fontSize:27}} /></a>
          <a
            href="https://www.linkedin.com/in/dareenelalfy"
            class="linkedin-button"
            
          ><FaLinkedin style={{ color: "white" ,fontSize:27}} /></a>
        </div>
        <div className="app__footer_info-create">
        <p>Created By Dareen El Alfy</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
