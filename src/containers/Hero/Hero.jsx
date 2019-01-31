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
        <strong>idealo</strong> is a Berlin-based, start-up, success story. Seventeen years ago, idealo started with the mission of helping our users to make the best purchasing decisions. Today, we are the leading price comparison website in Europe and one of the largest portals in the German e-commerce market. We achieved this by obtaining more than 1.3 million page impressions per day, 50.000 Online-Shops, around 3300 million product offers and more than 4 million app downloads.
      </p >
    </header >
  );
}
