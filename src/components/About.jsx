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
      className={styles.aboutContainer}
    >
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutSection}>
          <div className={styles.who}>WHO ARE WE?</div>
          <div className={styles.writeUp}>
            {" "}
            &quot;Letona Consulting is a brand consulting agency dedicated to
            getting your business to be the very best version it can be. We help
            brands discover themselves and craft exceptional brand
            experiences.&quot;
          </div>
          <div>
            <button className={styles.aboutBtn}>MORE ABOUT US</button>
          </div>
        </div>
        {/* <div className={styles.aboutImg}>
          <img src={Us} alt="" />
        </div> */}
      </div>
    </motion.div>
  );
};

export default About;
