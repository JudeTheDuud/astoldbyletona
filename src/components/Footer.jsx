import React from 'react'
import styles from '../styles/footer.module.css'
import Logo from '../assets/pngs/Logo Black.png'
import { FaXTwitter, FaThreads, FaInstagram, FaPhone } from 'react-icons/fa6'
import { AiOutlineMail } from "react-icons/ai";

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
                    <button><a href="mailto:info@astoldbyletona"><AiOutlineMail/></a></button>
                </div>
            </div>
            <div className={styles.phone}> <FaPhone/>
            <p>: +234 903 061 7124</p>
            </div>
            <div>Letona &copy; 2024, All Rights Reserved</div>
        </footer>
    </div>
  )
}

export default Footer