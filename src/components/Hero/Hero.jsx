import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Martín</h1>
        <p className={styles.description}>
          I'm a frontend starter developer from Argentina with 1 year of experience using HTML, CSS, JavaScript, React & more.</p>
          <p className={styles.description}>
          I have taken most of my education from the biggest coding academy in Argentina and Latin America, Coderhouse.
        </p>
        <p className={styles.description}>
          These are my certifications:
        </p>
        <a className={styles.description} href="https://www.coderhouse.com/certificados/65945a8c52c4d7930e3bf31d?lang">React Frontend Development</a>
        <a className={styles.description} href="https://www.coderhouse.com/certificados/65945a8c52c4d7e36c3bf30e?lang">ReactJS</a>
        <a className={styles.description} href="https://www.coderhouse.com/certificados/651f4571b9172e0019da2567?lang">JavaScript</a>
        <a className={styles.description} href="https://www.coderhouse.com/certificados/64cfa53586ad83dbb467461b?lang">Web Development</a>
        <a href="mailto:martingarmendia09@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
