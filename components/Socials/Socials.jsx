import React from "react";
import styles from "./Socials.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faMedium,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Socials = (props) => {
  return (
    <p
      className={`${styles.centeredContainer}  ${
        props.className ? props.className : ""
      }`}
    >
      <a
        href="https://twitter.com/idealoTech"
        rel="noreferrer"
        aria-label="Twitter"
        className={styles.socials__item}
      >
        <FontAwesomeIcon style={{ width: "20px" }} icon={faTwitter} />
      </a>
      <a
        href="https://medium.com/idealo-tech-blog"
        rel="noreferrer"
        aria-label="Medium"
        className={styles.socials__item}
      >
        <FontAwesomeIcon style={{ width: "20px" }} icon={faMedium} />
      </a>
      <a
        href="https://www.linkedin.com/company/idealo-internet-gmbh/"
        aria-label="LinkedIn"
        rel="noreferrer"
        className={styles.socials__item}
      >
        <FontAwesomeIcon style={{ width: "20px" }} icon={faLinkedin} />
      </a>
      <a
        href="https://www.instagram.com/idealo/"
        rel="noreferrer"
        aria-label="Instagram"
        className={styles.socials__item}
      >
        <FontAwesomeIcon style={{ width: "20px" }} icon={faInstagram} />
      </a>
      <a
        href="https://www.facebook.com/idealoDE/"
        rel="noreferrer"
        aria-label="Facebook"
        className={styles.socials__item}
      >
        <FontAwesomeIcon style={{ width: "20px" }} icon={faFacebook} />
      </a>
    </p>
  );
};
export default Socials;
