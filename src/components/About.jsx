import React from "react";
import styles from "../styles/about.module.css";
import { motion } from "framer-motion";
const About = () => {
  const fadeInAnimatonVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.17,
      },
    },
  };
  return (
    <motion.div
      variants={fadeInAnimatonVariants}
      initial="initial"
      whileInView="animate"
      id="about"
      viewport={{ once: true }} 
      className={styles.aboutContainer}
    >
      <div className={styles.aboutWrapper}>
        <div className={styles.who}>WHO ARE WE?</div>
        <div className={styles.aboutSection}>
          <div className={styles.ball}></div>
          <div className={styles.writeUp}>
            <div>
              &quot;We are a brand consulting agency that guides your business
              into becoming its most authentic self. We help you discover your
              brand's unique identity, then we empower you to connect with your
              ideal audience through strategic messaging and cohesive design.
              &quot;
            </div>
            <div>Letona Consulting</div>
          </div>
        </div>
        <div className={styles.bottomCard}>
          {/* <button className={styles.aboutBtn}>MORE ABOUT US</button> */}
        </div>
        {/* <div className={styles.aboutImg}>
          <img src={Us} alt="" />
        </div> */}
      </div>
    </motion.div>
  );
};

export default About;
