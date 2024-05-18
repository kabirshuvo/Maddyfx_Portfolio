import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaTimes, FaArrowRight } from "react-icons/fa";

interface ModalProps {
  onClose: () => void;
  images?: { id: number; src: string; alt: string }[];
  initialIndex?: number;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  images,
  initialIndex = 0,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const nextImage = () => {
    if (images) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-4 rounded-lg relative flex flex-col items-center">
        {images && (
          <div className="overflow-hidden mb-4">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={500}
              height={500}
            />
          </div>
        )}
        {!images && <div>{children}</div>}
        <div className="flex justify-center w-full space-x-4 mt-4">
          {images && (
            <button
              className="rounded-full bg-gray-700 border border-gray-900 p-2"
              onClick={prevImage}
            >
              <FaArrowLeft className="text-white" />
            </button>
          )}
          <button
            className="rounded-full bg-gray-700 border border-gray-900 p-2"
            onClick={onClose}
          >
            <FaTimes className="text-white" />
          </button>
          {images && (
            <button
              className="rounded-full bg-gray-700 border border-gray-900 p-2"
              onClick={nextImage}
            >
              <FaArrowRight className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
