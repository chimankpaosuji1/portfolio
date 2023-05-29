import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const HeaderScroll = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/chimankpa-osuji-296634101/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <SiNetlify />
      </a>
      <a href="https://github.com/chimankpaosuji1" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderScroll
