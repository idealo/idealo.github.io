import React, { Component } from "react";
import Image from "next/image";

import styles from "./Navigation.module.scss";
import logo from "/images/idealo_logo.svg";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "",
    };
  }

  render() {
    return (
      <nav className={styles.navigation__container}>
        <div className={styles.navigation__list}>
          <span
            className={`${styles.navigation__item}   ${styles.navigation__itemlogo}`}
          >
            <Image
              width="100px"
              height="50px"
              className={styles.navigation__logo}
              src={logo}
              alt="idealo.de Logo"
            />
          </span>
          <a
            href="https://jobs.idealo.de"
            aria-label="Jobs at idealo"
            target="_blank"
            rel="noreferrer"
            className={styles.navigation__item}
          >
            Jobs
          </a>
        </div>
      </nav>
    );
  }
}
