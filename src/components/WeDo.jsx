import React from "react";
import { animate, delay, motion } from "framer-motion";
import styles from "../styles/wedo.module.css";
import card from "../components/CardInfo";
import { Link as ScrollLink } from "react-scroll";
const WeDo = () => {
  const fadeInAnimatonVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.17 * i,
      },
    }),
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div id="wedo" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textWrap}>
          <h1>
            Built to scale,
            <br />
            driven by efficiency.
          </h1>
          <p>
            Strategic guidance and support to ensure <br /> your next steps are
            the right ones.
          </p>
          <ScrollLink to="contact" offset={-90}>
            <button  onClick={closeNavbar}>Work with us</button>
          </ScrollLink>
        </div>
        <div className={styles.cardWrap}>
          {card.map((item, i) => (
            <motion.div
              variants={fadeInAnimatonVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }} 
              whi
              custom={i}
              className={styles.card}
              key={i}
            >
              <img src={item.src} alt="" />
              <h2>{item.header}</h2>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeDo;
