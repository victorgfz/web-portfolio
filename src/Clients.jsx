import React from "react";
import styles from "./Clients.module.css";

const Clients = () => {
  const clients = [
    "/src/assets/client-1.png",
    "/src/assets/client-2.png",
    "/src/assets/client-3.png",
    "/src/assets/client-4.png",
    "/src/assets/client-5.png",
  ];
  return (
    <section id="clients" className="wrapper">
      <div className={`${styles.main} container`}>
        <h2 className={styles.title}>Trusted by 2433+ Clients</h2>
        <p className={styles.subtitle}>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis.
        </p>
        <ul className={styles.clients}>
          {clients.map((item, index) => (
            <li key={item} className={styles.client}>
              <img src={item} alt={`Client ${index}`} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
