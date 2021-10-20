import * as React from "react";
import Image from "next/image";
import BackgroundImg from "../../../public/images/pikachu.jpg";
import styles from "../heroImg/heroImg.module.css";
const HeroImg = () => {
  return (
    <Image
      className={styles.heroImg}
      src={BackgroundImg}
      alt="Image of Pikachu in the woods"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
  );
};

export default HeroImg;
