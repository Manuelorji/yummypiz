import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.src}
          alt={item.title}
          className={styles.image}
          layout="fill"
        />
      </div>

      <p>{item.title}</p>
    </div>
  );
};

export default Card;
