import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowUp, FaHome, FaImage } from "react-icons/fa";

const GalleryNavBar: React.FC = () => {
  const router = useRouter();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToHome = () => {
    router.push("/");
  };

  const goToGallery = () => {
    router.push("/gallery");
  };

  return (
    <nav className="flex justify-center space-x-4 p-4">
      <button
        onClick={goToTop}
        className="rounded-full p-2 bg-blue-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
      >
        <FaArrowUp />
      </button>
      <button
        onClick={goToHome}
        className="rounded-full p-2 bg-green-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
      >
        <FaHome />
      </button>
      <button
        onClick={goToGallery}
        className="rounded-full p-2 bg-yellow-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
      >
        <FaImage />
      </button>
    </nav>
  );
};

export default GalleryNavBar;
