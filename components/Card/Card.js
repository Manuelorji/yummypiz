import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <Image src={item.src} alt={item.title} width={120} height={120} />
      <p>{item.title}</p>
    </div>
  );
};

export default Card;
