import React from "react";
import styles from "./Landing.module.css";
import slideArrow from "./assets/slide-arrow.png";

const Landing = () => {
  const infos = [
    {
      id: 1,
      number: "01",
      title: "boost your business",
      content:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis",
    },
    {
      id: 2,
      number: "02",
      title: "lawyer consulting",
      content:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis",
    },
    {
      id: 3,
      number: "03",
      title: "online consulting",
      content:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis",
    },
    {
      id: 4,
      number: "04",
      title: "it management",
      content:
        "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis",
    },
  ];
  const [slide, setSlide] = React.useState(1);

  return (
    <section id="home" className="wrapper">
      <div className={styles.arrows}>
        <img
          onClick={() => {
            if (slide > 1) setSlide(slide - 1);
            else setSlide(4);
          }}
          src={slideArrow}
          className={`${styles.leftArrow}`}
          alt="Slide Arrow"
        />
        <img
          onClick={() => {
            if (slide < 4) setSlide(slide + 1);
            else setSlide(1);
          }}
          src={slideArrow}
          className={`${styles.rightArrow}`}
          alt="Slide Arrow"
        />
      </div>
      <div className={`${styles.main} container`}>
        <h2 className={styles.subtitle}>We can help you</h2>
        {infos.map((item) => (
          <h1
            key={item.id}
            className={`${styles.title} ${
              slide === item.id ? styles.active : styles.inactive
            }`}
          >
            {item.title}.
          </h1>
        ))}
        <div className={styles.buttons}>
          <a className={styles.firstButton} href="">
            Get started now
          </a>
          <a className={styles.secondButton} href="">
            take a tour
          </a>
        </div>

        <ul className={styles.numbers}>
          {infos.map((item) => {
            return (
              <li
                className={`${styles.number} ${
                  slide === item.id ? styles.active : styles.inactive
                }`}
                key={item.id}
              >
                {item.number}
              </li>
            );
          })}
        </ul>

        <ul className={styles.slides}>
          {infos.map((item) => {
            return (
              <li
                onClick={() => setSlide(item.id)}
                key={item.id}
                className={`${styles.slide} ${
                  slide === item.id ? styles.active : styles.inactive
                }`}
              >
                <div
                  className={`${styles.slideIcon} ${
                    slide === item.id ? styles.active : styles.inactive
                  }`}
                >
                  Icon
                </div>
                <h2 className={styles.slideTitle}>{item.title}</h2>
                <p className={styles.slideContent}>{item.content}</p>
                <a className={styles.slideButton} href="./">
                  Read more
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Landing;
