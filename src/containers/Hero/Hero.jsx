import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';

export default (props) => {
  function scrollDown() {
    let navHeight = document.querySelector('nav').offsetHeight;
    let elemOffset = document.querySelector('#home').getBoundingClientRect().bottom + window.pageYOffset

    window.scrollTo(0, elemOffset - navHeight);
  }

  return (
    <header className='hero__container' id='home'>
      <ProgressiveImage className='hero__image' src='static/header.jpg' thumbnail='static/thumbnails/header.jpg' />

      <div className='hero__imageContainer'>
        <div className='hero__bottomContainer'>
          <p className='hero__bottomText'>#idealoTech</p>
          <Socials className='hero__socials' />
        </div>
        {/*<img className='hero__scrollDown' src='static/arrow.png' onClick={scrollDown} />*/}
      </div>
      <p className='hero__text'>
        We're the Product & Technology department of <strong><a href="https://www.idealo.de/" target="_blank">idealo.de</a></strong>, a Berlin-based start-up success story. In 2000 we started out with the mission of helping consumers make the best purchasing decisions. Today, with 1.5 million visits per day, 50,000 shops and more than 330 million product offers, we are one of the most popular German e-commerce websites and one of the leading European shopping and comparison platforms. 
      </p >
    </header >
  );
}
