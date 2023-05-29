import React from 'react'
import CTA from './CTA'
import ME from '../../assets/computer.jpeg'
import HeaderScroll from './HeaderScroll'
import "./header.css"

const Header = () => {
  return (
    <header id='home'>
      <div className= "container header__container">
        <h5>Hello, i am</h5>
        <h1>Chimankpa Chidozie Osuji</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderScroll />

        <div className="me">
          <img src={ME} alt="my-pic" />
        </div> 
        
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header
