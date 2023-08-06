import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={`${styles.wrapper} wrapper`}>
      <div className="container">
        <ul className={styles.ul}>
          <li className={styles.li}>
            <img className={styles.icon} src="/src/assets/footer-1.png" />
            <p className={styles.p}>info@businesspro.com</p>
          </li>
          <li className={styles.li}>
            <img className={styles.icon} src="/src/assets/footer-2.png" />
            <p className={styles.p}>
              Proin gravida, Nibh vel Aenean Sollicitudin
            </p>
          </li>
          <li className={styles.li}>
            <img className={styles.icon} src="/src/assets/footer-3.png" />
            <p className={styles.p}>+977-1234567890</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
