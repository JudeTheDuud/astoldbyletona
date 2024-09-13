import React from 'react'
import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <h1>ELEVATING <br /> YOUR BRAND.</h1>
        <p>Shaping your vision.</p>
      </div>
    </div>
  )
}

export default Hero