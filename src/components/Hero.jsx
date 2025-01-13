import React from 'react'
import styles from '../styles/hero.module.css'
import {Link as ScrollLink} from 'react-scroll'
import { FaArrowDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
   const fadeInAnimatonVariants = {
      initial : {
        opacity: 0,
        x: 100
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
        }
      }
    }
   const fadeInAnimatonVariants2 = {
      initial : {
        opacity: 0,
        x: -100
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.35,
        }
      }
    }
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <motion.h1
        variants={fadeInAnimatonVariants} 
        initial = 'initial'
        whileInView= 'animate'
        >ELEVATING <br /> YOUR BRAND.</motion.h1>
        <motion.p
        variants={fadeInAnimatonVariants2} 
        initial = 'initial'
        whileInView= 'animate'
        >Shaping your vision.</motion.p>
      </div>
      <div className={styles.arrow}><ScrollLink to = 'about' offset={-90}><FaArrowDown/></ScrollLink></div>
    </div>
  )
}

export default Hero