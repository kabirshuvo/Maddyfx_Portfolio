import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain height
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.button}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed" as "fixed",
    bottom: "40px",
    right: "50px",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "#047857",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default GoToTopButton;
