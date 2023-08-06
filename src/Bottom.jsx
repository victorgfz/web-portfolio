import React from "react";
import styles from "./Bottom.module.css";

const Bottom = () => {
  return (
    <section className={`${styles.wrapper} wrapper`}>
      <footer className={`${styles.main} container`}>
        <p className={styles.p}>
          Copyright © 2022 WePro. Designed by TemplatesJungle
        </p>
        <img src="/src/assets/icons.png" />
        <p className={styles.p}>Privacy Policy | Terms & Conditions</p>
      </footer>
    </section>
  );
};

export default Bottom;
