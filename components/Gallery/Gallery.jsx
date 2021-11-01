import React from "react";
import styles from "./Gallery.module.scss";

// load images
import img1 from "/images/job/jobs_01.jpg?resize&width=300&height=300";
import img2 from "/images/job/jobs_02.jpg?resize&width=300&height=300";
import img3 from "/images/job/jobs_03.jpg?resize&width=300&height=300";
import img4 from "/images/job/jobs_04.jpg?resize&width=300&height=300";
import img5 from "/images/job/jobs_05.jpg?resize&width=300&height=300";
import img6 from "/images/job/jobs_06.jpg?resize&width=300&height=300";
import img7 from "/images/job/jobs_07.jpg?resize&width=300&height=300";
import img8 from "/images/job/jobs_08.jpg?resize&width=300&height=300";

const Gallary = () => {
  function renderImages() {
    let imageList = [img1, img2, img3, img4, img5, img6, img7, img8];
    const images = [];
    imageList.forEach((image, index) => {
      images.push(
        <img
          alt="Picture of our employees"
          className={styles.gallery__image}
          key={"galleryImage" + index}
          srcSet={image.srcSet}
          src={image.src}
        />
      );
    });

    return images;
  }

  return <div className={styles.gallery__container}>{renderImages()}</div>;
};
export default Gallary;
