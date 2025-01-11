import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
    document.body.style.overflow = ""; // Reset any overflow styles
  }, [pathname]);

  return null;
};

export default ScrollToTop;
