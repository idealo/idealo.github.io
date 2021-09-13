import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

import Socials from "../../components/Socials/Socials";
import header from "/images/header.jpg";

const Hero = () => {
  return (
    <header className={styles.hero__container} id="home">
      <Image
        alt="Headerimage with pair programming employee"
        className={styles.hero__image}
        src={header}
        placeholder="blur"
      />

      <div className={styles.hero__imageContainer}>
        <div className={styles.hero__bottomContainer}>
          <div style={{ width: "100%" }}>
            <p className={styles.hero__bottomText}>#idealoTech</p>
          </div>
          <Socials className={styles.hero__socials} />
        </div>
        {/*<img className='hero__scrollDown' src='./arrow.png' onClick={scrollDown} />*/}
      </div>
      <p className={styles.hero__text}>
        We`&apos;re the Product & Technology department of{" "}
        <strong>
          <a
            aria-label="Idealo Website"
            href="https://www.idealo.de/"
            target="_blank"
            rel="noreferrer"
          >
            idealo.de
          </a>
        </strong>
        , a Berlin-based start-up success story. In 2000 we started out with the
        mission of helping consumers make the best purchasing decisions. Today,
        with 1.5 million visits per day, 50,000 shops and more than 330 million
        product offers, we are one of the most popular German e-commerce
        websites and one of the leading European shopping and comparison
        platforms.
      </p>
    </header>
  );
};
export default Hero;
