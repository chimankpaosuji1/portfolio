import React from 'react'
import gqlagos from '../../assets/gqlagos.png'
import gni from '../../assets/gni.png'
// import Avatar from '../../assets/avatar.png'
import swiftend from '../../assets/swiftend.png'
import those from '../../assets/those.png'
import airdrop from '../../assets/airdrop.png'
import hernalytics from '../../assets/hernalytics.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some Of My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gni} alt="post" />
          </div>
          <h3>Great Nigerian Issurance</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://greatnigeriaplc.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gqlagos} alt="post" />
          </div>
          <h3>AERA US CONSULATE</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://gqlagos.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={those} alt="post" />
          </div>
          <h3>Those Music Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://www.those.app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={swiftend} alt="post" />
          </div>
          <h3>Swiftend Web Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://swiftend.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={airdrop} alt="post" />
          </div>
          <h3>Ultainfinityairdrop</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://ultainfinityairdrop.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hernalytics} alt="post" />
          </div>
          <h3>Hernalytics</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://creative-kangaroo-2d2104.netlify.app/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio