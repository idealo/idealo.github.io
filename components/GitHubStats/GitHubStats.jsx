import React from "react";
import styles from "./GitHubStats.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";

const GitHubStats = ({ html_url, language, forks, stars, watches }) => {
  function openRepo() {
    window.open(html_url, "_blank");
  }

  return (
    <div
      className={styles.gitHubStats__container}
      onClick={openRepo.bind(this)}
    >
      <div className={styles.gitHubStats__stat}>
        <p className={styles.gitHubStats__icon}>
          <FontAwesomeIcon style={{ width: "20px" }} icon={faCode} />
        </p>
        <p className={styles.gitHubStats__description}>{language}</p>
      </div>
      <div className={styles.gitHubStats__stat}>
        <p className={styles.gitHubStats__icon}>
          <FontAwesomeIcon style={{ width: "20px" }} icon={faCode} />
        </p>
        <p className={styles.gitHubStats__description}>{forks}</p>
      </div>
      <div className={styles.gitHubStats__stat}>
        <p className={styles.gitHubStats__icon}>
          <FontAwesomeIcon style={{ width: "20px" }} icon={faStar} />
        </p>
        <p className={styles.gitHubStats__description}>{stars}</p>
      </div>
      <div className={styles.gitHubStats__stat}>
        <p className={styles.gitHubStats__icon}>
          <FontAwesomeIcon style={{ width: "20px" }} icon={faUsers} />
        </p>
        <p className={styles.gitHubStats__description}>{watches}</p>
      </div>
    </div>
  );
};
export default GitHubStats;
