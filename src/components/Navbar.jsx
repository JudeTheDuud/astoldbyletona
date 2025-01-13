import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/navbar.module.css";
import Logo from "../assets/pngs/Icon Black.png";

const Navbar = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link to="/" className={styles.logo} onClick={closeNavbar}>
            <img src={Logo} alt="" />
          </Link>
          <nav
            ref={navRef}
            className={`${styles.navWrapper} ${isNavOpen ? styles.responsive : ""}`}
          >
            <ul className={styles.navlinks}>
              <li>
                <ScrollLink
                  to="about"
                  offset={-90}
                  onClick={closeNavbar}
                >
                  ABOUT US
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="wedo"
                  offset={-90}
                  onClick={closeNavbar}
                >
                  SERVICES
                </ScrollLink>
              </li>
              <li>
                <Link to="/faq" onClick={closeNavbar}>
                  FAQS
                </Link>
              </li>
              <li className={styles.contactNum}>
                <a href="" onClick={closeNavbar}>
                  +234 903 061 7124
                </a>
              </li>
              <li className={styles.contactMail}>
                <a href="mailto:info@astoldbyletona" onClick={closeNavbar}>
                  info@astoldbyletona
                </a>
              </li>
            </ul>
          </nav>

          <button className={styles.navBtn} onClick={showNavbar}>
            {!isNavOpen ? <FaBars /> : <FaTimes />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
