import React from "react";
import styles from "./Portfolio.module.css";
import img from "./assets/image-1.jpg";

const Portfolio = () => {
  const [topic, setTopic] = React.useState(1);
  const [over, setOver] = React.useState(false);
  const topics = [
    {
      id: 1,
      title: "wordpress",
      photos: [
        {
          id: 1,
          src: "/src/assets/image-1.jpg",
          title: "Image 1",
        },
        {
          id: 2,
          src: "/src/assets/image-2.jpg",
          title: "Image 2",
        },
        {
          id: 3,
          src: "/src/assets/image-3.jpg",
          title: "Image 3",
        },
        {
          id: 4,
          src: "/src/assets/image-4.jpg",
          title: "Image 4",
        },
        {
          id: 5,
          src: "/src/assets/image-5.jpg",
          title: "Image 5",
        },
        {
          id: 6,
          src: "/src/assets/image-6.jpg",
          title: "Image 6",
        },
      ],
    },
    {
      id: 2,
      title: "branding",
      photos: [
        {
          id: 1,
          src: "/src/assets/image-7.jpg",
          title: "Image 1",
        },
        {
          id: 2,
          src: "/src/assets/image-8.jpg",
          title: "Image 2",
        },
        {
          id: 3,
          src: "/src/assets/image-9.jpg",
          title: "Image 3",
        },
        {
          id: 4,
          src: "/src/assets/image-10.jpg",
          title: "Image 4",
        },
        {
          id: 5,
          src: "/src/assets/image-11.jpg",
          title: "Image 5",
        },
        {
          id: 6,
          src: "/src/assets/image-12.jpg",
          title: "Image 6",
        },
      ],
    },
    {
      id: 3,
      title: "statistics",
      photos: [
        {
          id: 1,
          src: "/src/assets/image-1.jpg",
          title: "Image 1",
        },
        {
          id: 2,
          src: "/src/assets/image-2.jpg",
          title: "Image 2",
        },
        {
          id: 3,
          src: "/src/assets/image-3.jpg",
          title: "Image 3",
        },
        {
          id: 4,
          src: "/src/assets/image-4.jpg",
          title: "Image 4",
        },
        {
          id: 5,
          src: "/src/assets/image-5.jpg",
          title: "Image 5",
        },
        {
          id: 6,
          src: "/src/assets/image-6.jpg",
          title: "Image 6",
        },
      ],
    },
    {
      id: 4,
      title: "ecommerce",
      photos: [
        {
          id: 1,
          src: "/src/assets/image-7.jpg",
          title: "Image 1",
        },
        {
          id: 2,
          src: "/src/assets/image-8.jpg",
          title: "Image 2",
        },
        {
          id: 3,
          src: "/src/assets/image-9.jpg",
          title: "Image 3",
        },
        {
          id: 4,
          src: "/src/assets/image-10.jpg",
          title: "Image 4",
        },
        {
          id: 5,
          src: "/src/assets/image-11.jpg",
          title: "Image 5",
        },
        {
          id: 6,
          src: "/src/assets/image-12.jpg",
          title: "Image 6",
        },
      ],
    },
    {
      id: 5,
      title: "photography",
      photos: [
        {
          id: 1,
          src: "/src/assets/image-1.jpg",
          title: "Image 1",
        },
        {
          id: 2,
          src: "/src/assets/image-2.jpg",
          title: "Image 2",
        },
        {
          id: 3,
          src: "/src/assets/image-3.jpg",
          title: "Image 3",
        },
        {
          id: 4,
          src: "/src/assets/image-4.jpg",
          title: "Image 4",
        },
        {
          id: 5,
          src: "/src/assets/image-5.jpg",
          title: "Image 5",
        },
        {
          id: 6,
          src: "/src/assets/image-6.jpg",
          title: "Image 6",
        },
      ],
    },
  ];
  return (
    <section id="portfolio" className="wrapper">
      <div className={`${styles.main} container`}>
        <ul className={styles.topics}>
          {topics.map((item) => {
            return (
              <li
                onClick={() => setTopic(item.id)}
                className={`${styles.topic} ${
                  topic === item.id ? styles.active : styles.inactive
                }`}
                key={item.id}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        {topics.map((item) => {
          return (
            <ul
              key={item.id}
              className={`${styles.photos} ${
                item.id === topic ? styles.active : styles.inactive
              }`}
            >
              {item.photos.map((photo) => {
                return (
                  <li key={photo.id} className={styles.photo}>
                    <img
                      className={styles.img}
                      src={photo.src}
                      alt={photo.title}
                    />
                    <p className={styles.photoTitle}>{photo.title} Project</p>
                  </li>
                );
              })}
            </ul>
          );
        })}
        <a href="./" className={styles.button}>
          View All Works
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
