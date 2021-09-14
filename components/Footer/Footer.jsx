import React from "react";
import styles from "./Footer.module.scss";

import Socials from "../../components/Socials/Socials";

const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__content}>
        <Socials />
        <p className={styles.footer__links}>
          <a
            href="https://www.idealo.de/preisvergleich/AGB.html"
            aria-label="AGB"
            target="_blank"
            rel="noreferrer"
          >
            Impressum
          </a>
          <a
            href="https://www.idealo.de/preisvergleich/Datenschutz.html"
            aria-label="Datenschutz"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutz
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
