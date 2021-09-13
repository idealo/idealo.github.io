import React from "react";
import styles from "./Gallery.module.scss";
import Image from "next/image";

// load images
import img1 from "/images/jobs_01.jpg";
import img2 from "/images/jobs_02.jpg";
import img3 from "/images/jobs_03.jpg";
import img4 from "/images/jobs_04.jpg";
import img5 from "/images/jobs_05.jpg";
import img6 from "/images/jobs_06.jpg";
import img7 from "/images/jobs_07.jpg";
import img8 from "/images/jobs_08.jpg";

const Gallary = () => {
  function renderImages() {
    let imageList = [img1, img2, img3, img4, img5, img6, img7, img8];
    const images = [];
    imageList.forEach((image, index) => {
      images.push(
        <Image
          alt="Picture of our employees"
          className={styles.gallery__image}
          key={"galleryImage" + index}
          src={image}
        />
      );
    });

    return images;
  }

  return <div className={styles.gallery__container}>{renderImages()}</div>;
};
export default Gallary;
