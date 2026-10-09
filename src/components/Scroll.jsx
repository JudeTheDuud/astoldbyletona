import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/scroll.module.css";

import cart from '../assets/pngs/hermon.jpg';
import mobile from '../assets/pngs/catalyst.jpg';
import textile from '../assets/pngs/jet.jpg';
import packaging from '../assets/pngs/care.jpg';
import lemod from '../assets/pngs/lemod.jpg';
import biri from '../assets/pngs/biri.jpg';
import cafe from '../assets/pngs/CafeNextDoorRaw.jpg';
import jj from '../assets/pngs/jaatja.png'
import mbo from '../assets/pngs/mbo.png'

const svgs = [cart, mobile, packaging, mbo, jj];

// Create enough repetitions for smooth infinite scroll
// We need at least 3 full sets: one visible, one for transition, one for reset
const repeatedSvgs = [...svgs, ...svgs, ...svgs];

const InfiniteScrollSVGs = () => {
  return (
    <div className={styles.scrollWrapper}>
      <motion.div
        className={styles.scrollContent}
        animate={{ x: ["0%", "-33.333%"] }} // Move exactly one full set (100% / 3 sets = 33.333%)
        whileHover={{ animationPlayState: "paused" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15, 
          repeatType: "loop" // Ensures it jumps back smoothly
        }}
      >
        {repeatedSvgs.map((src, index) => (
          <img key={index} src={src} alt={`icon-${index}`} className={styles.icon} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollSVGs;