import React from 'react'
import styles from '../styles/footer.module.css'
import Logo from '../assets/pngs/Logo Black.png'
import { FaXTwitter, FaThreads, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <footer className={styles.footerWrapper}>
            <div className={styles.logoWrap}>
                <h2><img src={Logo} alt="" /></h2>
                <div className={styles.socialWrap}>
                    <button><FaXTwitter/></button>
                    <button><FaThreads/></button>
                    <button><FaInstagram/></button>
                </div>
            </div>
            <div>Letona &copy; 2024, All Rights Reserved</div>
        </footer>
    </div>
  )
}

export default Footer