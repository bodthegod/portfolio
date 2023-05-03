import React from "react";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Portfolio</h1>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
      <div className={styles.hero}>
        <h2 className={styles.heroTitle}>Welcome to My Portfolio</h2>
        <p className={styles.heroText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          elit quis nulla suscipit blandit.
        </p>
      </div>
      <div className={styles.about} id="about">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          elit quis nulla suscipit blandit. Sed malesuada ligula ac tortor
          faucibus mollis. Integer facilisis orci ac mi sagittis malesuada.
        </p>
      </div>
      <div className={styles.projects} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.sliderItem}>
            <img src="image1.jpg" alt="Project 1" className={styles.sliderImg} />
            <h3 className={styles.sliderCaption}>Project 1</h3>
          </div>
          <div className={styles.sliderItem}>
            <img src="image2.jpg" alt="Project 2" className={styles.sliderImg} />
            <h3 className={styles.sliderCaption}>Project 2</h3>
          </div>
          <div className={styles.sliderItem}>
            <img src="image3.jpg" alt="Project 3" className={styles.sliderImg} />
            <h3 className={styles.sliderCaption}>Project 3</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
