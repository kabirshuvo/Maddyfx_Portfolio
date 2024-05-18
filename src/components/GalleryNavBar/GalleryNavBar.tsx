import React from "react";
import { useRouter } from "next/navigation";
import {
  FaArrowUp,
  FaHome,
  FaImage,
  FaHatCowboy,
  FaPenNib,
  FaSocks,
  FaCouch,
  FaShoppingBag,
  FaTshirt,
} from "react-icons/fa";
import "./GalleryNavBar.css";

const GalleryNavBar: React.FC = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const goToGallery = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="grid grid-cols-4 lg:grid-cols-8 gap-4 p-4">
      <div className="tooltip">
        <button
          onClick={goToHome}
          className="rounded-full p-2 bg-green-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaHome />
        </button>
        <span className="tooltip-text">Home</span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/caps")}
          className="rounded-full p-2 bg-yellow-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaHatCowboy />
        </button>
        <span className="tooltip-text">Caps</span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/logos")}
          className="rounded-full p-2 bg-purple-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaPenNib />
        </button>
        <span className="tooltip-text">Logos</span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/seamless")}
          className="rounded-full p-2 bg-red-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaImage />
        </button>
        <span className="tooltip-text">Seamless Patterns</span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/socks")}
          className="rounded-full p-2 bg-teal-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaSocks />
        </button>
        <span className="tooltip-text">Socks Gallery</span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/throwpillows")}
          className="rounded-full p-2 bg-orange-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaCouch />
        </button>
        <span className="tooltip-text">Throw Pillows</span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/totebags")}
          className="rounded-full p-2 bg-lime-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaShoppingBag />
        </button>
        <span className="tooltip-text">Tote Bags </span>
      </div>
      <div className="tooltip">
        <button
          onClick={() => goToGallery("/gallery/tshirts")}
          className="rounded-full p-2 bg-indigo-950 text-white transform hover:scale-125 transition-transform duration-300 ease-in-out"
        >
          <FaTshirt />
        </button>
        <span className="tooltip-text">T-Shirts</span>
      </div>
    </nav>
  );
};

export default GalleryNavBar;
