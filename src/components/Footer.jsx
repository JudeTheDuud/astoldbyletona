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
                    <button><a href="https://x.com/astoldbyletona?t=ULHmUQnBdToOsCNcMN4L-g&s=08" target='_blank'><FaXTwitter/></a></button>
                    {/* <button><FaThreads/></button> */}
                    <button><a href="https://www.instagram.com/astoldbyletona?igsh=ZGlxenM2MHVjNDh5" target='_blank'><FaInstagram/></a></button>
                    <button><a href="mailto:info@astoldbyletona"><AiOutlineMail/></a></button>
                </div>
            </div>
            <div className={styles.phone}>
            <FaPhone/>
            <p>: +234 803 892 2601</p>
            </div>
            <div>Letona &copy; 2025, All Rights Reserved</div>
        </footer>
    </div>
  )
}

export default Footer