import React from "react";

import "../styles/footer.sass";

import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="socials">
      <div className="github">
        <a href="https://github.com/GalileoGuilherme" target="_blank">
          <AiFillGithub /> Galileo Guilherme
        </a>
      </div>
      
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/galileo-guilherme-01996693/" target="_blank">
          <AiFillLinkedin /> Galileo Guilherme
        </a>
      </div>
    </div>
  );
};

export default Footer;
