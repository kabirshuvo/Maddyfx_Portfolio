import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

const GoToHomeButton: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHome = () => {
    router.push("/");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="hover:scale-110"
      onClick={goToHome}
      style={styles.button}
    >
      <FaHome />
    </button>
  );
};

const styles = {
  button: {
    position: "fixed" as "fixed",
    bottom: "40px",
    right: "90px",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "#047857",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
    transition: "transform 0.3s ease", // Add transition for smooth hover effect
  },
};

export default GoToHomeButton;
