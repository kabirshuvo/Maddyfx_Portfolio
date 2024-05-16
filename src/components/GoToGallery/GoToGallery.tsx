import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaImage } from "react-icons/fa"; // Import image icon from react-icons/fa

const GoToGalleryButton: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down to a certain height
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Navigate to gallery page
  const goToGallery = () => {
    router.push("/gallery");
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
        <button onClick={goToGallery} style={styles.button}>
          <FaImage /> {/* Use image icon */}
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed" as "fixed",
    bottom: "40px",
    right: "130px",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "#047857",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default GoToGalleryButton;
