import React, { Component } from "react";

import GitHubStats from "../GitHubStats/GitHubStats";

import styles from "./ProjectTile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default class ProjectTile extends Component {
  constructor(props) {
    super(props);
  }

  openVideo() {
    window.open(this.props.projectData.videoUrl, "_blank");
  }

  render() {
    const projectTileLogo = require(`/images/tech-logos/logo_${this.props.projectData.config.ownerLogo}.png?resize`);
    return (
      <div className={styles.projectTile__container}>
        <h3 className={styles.projectTile__heading}>
          <a
            className={styles.projectTile__title}
            href={this.props.projectData.github.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.projectData.config.title}
          </a>
          <img
            height={"35px"}
            width={"35px"}
            className={styles.projectTile__logo}
            alt="Programming Logo"
            src={projectTileLogo.src}
            srcSet={projectTileLogo.srcSet}
          />
        </h3>
        <p className={styles.projectTile__description}>
          {this.props.projectData.config.description}
        </p>
        <button
          className={styles.projectTile__videoButton}
          style={{
            display: this.props.projectData.config.videoUrl ? "block" : "none",
          }}
          onClick={this.openVideo.bind(this)}
        >
          <FontAwesomeIcon icon={faPlayCircle} style={{ width: "20px" }} />{" "}
          Video Presentation
        </button>
        <div className={styles.projectTile__content}>
          <GitHubStats
            stars={this.props.projectData.github.stargazers_count}
            html_url={this.props.projectData.github.html_url}
            forks={this.props.projectData.github.forks_count}
            watches={this.props.projectData.github.watchers_count}
            language={this.props.projectData.config.language}
          />
        </div>
      </div>
    );
  }
}
