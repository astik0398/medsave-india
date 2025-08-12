import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  console.log('location===', location);
  
  useEffect(() => {
    if (location.hash) {
      // Scroll to the element with id matching the hash
      const id = location.hash.replace("#", "");
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          // Retry if element not yet rendered
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
