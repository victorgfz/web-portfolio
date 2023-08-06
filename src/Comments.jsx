import React from "react";
import styles from "./Comments.module.css";

const Comments = () => {
  const quotes = [
    {
      id: 1,
      author: "Woman Random",
      job: "CFO & CEO",
      picture: "/src/assets/picture-1.jpg",
      message:
        "Vestibulum pharetra libero ut massa rutrum, sit amet imperdiet odio comtempor iaculis id feugiat enim. Ectus eget sem lobortis pellnlobortis pelln tesque vitae ac augue.",
    },
    {
      id: 2,
      author: "Woman Randomic",
      job: "Management Assistant",
      picture: "/src/assets/picture-2.jpg",
      message:
        "Duis tincidunt lectus eget sem lobortis pelln tesque vitae ac augue. Vestibulum pharetra libero ut massa rutrum, sit amet imperdiet odio comtempor iaculis id feugiat enim.",
    },
  ];

  return (
    <section id="comments" className="wrapper">
      <div className={`${styles.main} container`}>
        {quotes.map((item) => {
          return (
            <div key={item.id} className={styles.box}>
              <p className={styles.message}>{item.message}</p>
              <div className={styles.info}>
                <img className={styles.picture} src={item.picture} />
                <div className={styles.writter}>
                  <p className={styles.author}>{item.author}</p>
                  <p className={styles.job}>{item.job}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comments;
