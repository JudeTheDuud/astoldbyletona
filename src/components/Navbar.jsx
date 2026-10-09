import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "../styles/navbar.module.css";
import Logo from "../assets/pngs/Icon Black.png";

const Navbar = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation()
  const isFaq = location.pathname === '/faq'
  const toggleNavbar = (e) => {
    // Prevent any potential event bubbling
    e.stopPropagation();
    e.preventDefault();
    
    const newState = !isNavOpen;
    setIsNavOpen(newState);
    
    // Handle body scroll overflow
    if (newState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto";
  };

  // Close navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isNavOpen) {
        closeNavbar();
      }
    };

    if (isNavOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  // Close navbar when clicking outside
 useEffect(() => {
    const handleClickOutside = (event) => {
      // Make sure we're not clicking the button itself and we're clicking outside the nav
      if (
        navRef.current && 
        !navRef.current.contains(event.target) && 
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        isNavOpen
      ) {
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

  // Cleanup overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
              {isFaq ? (
                // Navigation links for FAQ page
                <>
                  <li>
                    <Link to="/" onClick={closeNavbar}>
                      HOME
                    </Link>
                  </li>
                  <li className={styles.contactNum}>
                    <a href="#" onClick={closeNavbar}>
                      +234 803 892 2601
                    </a>
                  </li>
                  <li className={styles.contactMail}>
                    <a href="mailto:info@astoldbyletona" onClick={closeNavbar}>
                      info@astoldbyletona
                    </a>
                  </li>
                </>
              ) : (
                // Navigation links for home page
                <>
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
                    <a href="#" onClick={closeNavbar}>
                      +234 803 892 2601
                    </a>
                  </li>
                  <li className={styles.contactMail}>
                    <a href="mailto:info@astoldbyletona" onClick={closeNavbar}>
                      info@astoldbyletona
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <button onClick={toggleNavbar} className={styles.navBtn}>
            {!isNavOpen ? <FaBars className={styles.burger} /> : <FaTimes className={styles.burger} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;