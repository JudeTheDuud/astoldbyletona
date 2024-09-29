import React from "react";
import Us from "../assets/svgs/enter.svg";
import styles from "../styles/about.module.css";
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutSection}>
          <div className={styles.who}>WHO ARE WE?</div>
          <div className={styles.writeUp}>
            {" "}
            &quot;Letona Consulting is a brand consulting agency dedicated to getting
            your business to be the very best version it can be. We help brands
            discover themselves and craft exceptional brand experiences.&quot;
          </div>
          <div><button className={styles.aboutBtn}>MORE ABOUT US</button></div>
        </div>
        {/* <div className={styles.aboutImg}>
          <img src={Us} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default About;