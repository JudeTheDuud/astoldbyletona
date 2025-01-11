import React from "react";
import styles from "../styles/wedo.module.css";
import card from '../components/CardInfo'
const WeDo = () => {
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
            {card.map((item) =>(
                <div className={styles.card}>
                    <img src={item.src} alt="" />
                    <h2>{item.header}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeDo;
