import React from "react";
import { animate, delay, motion } from "framer-motion";
import styles from "../styles/wedo.module.css";
import card from '../components/CardInfo'
const WeDo = () => {
  const fadeInAnimatonVariants = {
    initial : {
      opacity: 0,
      y: 100
    },
    animate: (i) =>({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.17 * i,
      }
    })
  }
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
            Strategic guidance and support to ensure <br /> your next steps are the
            right ones.
          </p>
          <button>Work with us</button>
        </div>
        <div className={styles.cardWrap}>
            {card.map((item, i) =>(
                <motion.div
                variants={fadeInAnimatonVariants} 
                initial = 'initial'
                whileInView= 'animate'
                whi
                custom={i}
                className={styles.card} key={i}>
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
