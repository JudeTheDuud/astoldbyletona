import React from 'react'
import styles from '../styles/hero.module.css'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <h1>ELEVATING <br /> YOUR BRAND.</h1>
        <p>Shaping your vision.</p>
      </div>
      <div className={styles.arrow}><FaArrowDown/></div>
    </div>
  )
}

export default Hero