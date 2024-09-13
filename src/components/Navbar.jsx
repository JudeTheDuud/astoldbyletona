import {useRef, useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from '../styles/navbar.module.css'
import Logo from '../assets/pngs/Icon Black.png'
const Navbar = () => {
    const navRef = useRef()
    const [isNavOpen, setIsNavOpen] = useState(false)

    const showNavbar = () =>{
        navRef.current.classList.toggle(styles.responsive)
        setIsNavOpen(!isNavOpen);
        if (!isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }
    }
    

  return (
    <div>
        <div className={styles.navContainer}>
            <div className={styles.navContent}>
            <div className={styles.logo }><img src={Logo} alt="" /></div>
            <nav ref={navRef} className={styles.navWrapper}>
            <ul className={styles.navlinks}>
                <li><a href="">SERVICES</a></li>
                <li><a href="">ABOUT US</a></li>
                <li ><a href="">PROJECTS</a></li>
                <li  className={styles.contactNum}><a href="">+234 903 061 7124</a></li>
                <li  className={styles.contactMail}><a href="mailto:info@astoldbyletona">info@astoldbyletona</a></li>
                <li className={styles}>
                    <li></li>
                    <li></li>
                    </li>
                
            </ul>
            </nav>

           
            <button className={styles.navBtn} onClick={showNavbar}>
                {!isNavOpen ? <FaBars/> : <FaTimes/>}
            </button>
        </div>
        </div>
    </div>
  )
}

export default Navbar