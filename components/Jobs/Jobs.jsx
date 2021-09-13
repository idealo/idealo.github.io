import React from "react";
import styles from "./Jobs.module.scss";

import Gallery from "../../components/Gallery/Gallery";

const Jobs = () => {
  return (
    <section className={styles.jobs__container} id="jobs">
      <div className={styles.jobs__headingContainer}>
        <h2 className={`${styles.jobs__heading} sectionHeading`}>Jobs</h2>
      </div>
      <Gallery />
      <div className={styles.jobs__advertisement}>
        <p className={styles.jobs__adHeading}>Want to work with us?</p>
        <p className={styles.jobs__adSubheading}>
          We offer many vacancies in IT!
        </p>
      </div>
      <a
        className={`${styles.jobs__buttonJobs}`}
        href="https://jobs.idealo.com/l/en#section-110677"
        target="_blank"
        rel="noreferrer"
      >
        Find your new job
      </a>
    </section>
  );
};
export default Jobs;
