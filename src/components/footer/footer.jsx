import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Made by Hari Jeon</p>
    </footer>
  );
});

export default Footer;
