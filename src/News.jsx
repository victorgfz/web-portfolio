import React from "react";
import styles from "./News.module.css";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Proin gravida nibh vel velit auctor aliquet. ",
      src: "/src/assets/news-1.jpg",
      content:
        "Vestibulum pharetra libero ut massa rutrum, sit amet imperdiet odio comtempor iaculis id feugiat enim. Ectus eget sem lobortis pellnlobortis pelln tesque vitae ac augue.",
      date: "2016/5/10",
    },
    {
      id: 2,
      title: "Proin gravida nibh vel velit auctor aliquet. ",
      src: "/src/assets/news-2.jpg",
      content:
        "Vestibulum pharetra libero ut massa rutrum, sit amet imperdiet odio comtempor iaculis id feugiat enim. Ectus eget sem lobortis pellnlobortis pelln tesque vitae ac augue.",
      date: "2016/5/9",
    },
    {
      id: 3,
      title: "Proin gravida nibh vel velit auctor aliquet. ",
      src: "/src/assets/news-3.jpg",
      content:
        "Vestibulum pharetra libero ut massa rutrum, sit amet imperdiet odio comtempor iaculis id feugiat enim. Ectus eget sem lobortis pellnlobortis pelln tesque vitae ac augue.",
      date: "2016/5/7",
    },
  ];
  return (
    <section id="blog" className="wrapper">
      <div className={`${styles.main} container`}>
        <h2 className={styles.title}>News / Events</h2>
        <p className={styles.dots}>. . .</p>
        <ul className={styles.news}>
          {news.map((item) => {
            return (
              <li key={item.id} className={styles.box}>
                <div className={styles.header}>
                  <img className={styles.img} src={item.src} />
                </div>
                <div className={styles.body}>
                  <h2 className={styles.boxTitle}>{item.title}</h2>
                  <p className={styles.content}>{item.content}</p>
                </div>
                <div className={styles.footer}>
                  <p className={styles.date}>{item.date}</p>
                  <a href="./" className={styles.button}>
                    read more
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;
