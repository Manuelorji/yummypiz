import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({ position = "absolute" }) => {
  return (
    <footer style={{ position: position }} className={styles.footer}>
      <span>YummyPiz ©2022</span>
      <span> Delicious Pizza & snacks</span>
    </footer>
  );
};

export default Footer;
