import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import {BsFacebook} from  'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/chimankpa-osuji-296634101/">
          <BsLinkedin />
        </a>
        <a href="https://m.me/chimankpaosuji">
          <BsFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Chimankpa</small>
      </div>
    </footer>
  );
}

export default Footer