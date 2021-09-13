import React from "react";
import styles from "./Projects.module.scss";

import ProjectTile from "../../components/ProjectTile/ProjectTile";

const Projects = ({ projectDatas }) => {
  function renderProjectTiles() {
    let tileList = [];

    projectDatas.forEach((projectData, index) => {
      tileList.push(
        <ProjectTile key={"projectTile" + index} projectData={projectData} />
      );
    });

    return tileList;
  }

  return (
    <section className={styles.projects__container} id="projects">
      <h2 className={`sectionHeading ${styles.projects__heading}`}>Projects</h2>
      <div className={styles.projects__tiles}>{renderProjectTiles()}</div>
    </section>
  );
};
export default Projects;
