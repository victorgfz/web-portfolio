import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const prices = [
    {
      id: 1,
      value: 10,
      type: "Personal",
      features: [
        "256 MB Memory",
        "1 User",
        "1 Website",
        "Unlimited Bandwith",
        "24/7 Support",
      ],
      src: "/src/assets/pricing-1.jpg",
      status: false,
    },
    {
      id: 2,
      value: 25,
      type: "Professional",
      features: [
        "256 MB Memory",
        "1 User",
        "1 Website",
        "Unlimited Bandwith",
        "24/7 Support",
      ],
      src: "/src/assets/pricing-2.jpg",
      status: true,
    },
    {
      id: 3,
      value: 50,
      type: "Corporate",
      features: [
        "256 MB Memory",
        "1 User",
        "1 Website",
        "Unlimited Bandwith",
        "24/7 Support",
      ],
      src: "/src/assets/pricing-3.jpg",
      status: false,
    },
  ];

  return (
    <section id="pricing" className="wrapper">
      <div className={`${styles.main} container`}>
        <h2 className={styles.title}>Pricing Table</h2>
        <p className={styles.dots}>. . .</p>
        <ul className={styles.prices}>
          {prices.map((item) => {
            return (
              <li
                key={item.id}
                className={`${styles.box} ${
                  item.status ? styles.active : styles.inactive
                }`}
              >
                <div
                  className={`${styles.header} ${
                    item.status ? styles.active : styles.inactive
                  }`}
                >
                  <img className={styles.img} src={item.src} />

                  <div className={styles.value}>
                    <p>
                      <span>$</span>
                      {item.value}.00
                    </p>
                    <p className={styles.permonth}>per month</p>
                  </div>
                </div>
                <p
                  className={`${styles.type} ${
                    item.status ? styles.active : styles.inactive
                  }`}
                >
                  {item.type}
                </p>
                <ul
                  className={`${styles.features} ${
                    item.status ? styles.active : styles.inactive
                  }`}
                >
                  {item.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  className={`${styles.purchase} ${
                    item.status ? styles.active : styles.inactive
                  }`}
                  href="./"
                >
                  Purchase Now
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
