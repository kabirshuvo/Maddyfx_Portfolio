import React, { ReactNode, useState } from "react";
import Image from "next/image";

interface SeamlessDesign {
  id: number;
  src: string;
  alt: string;
}
interface ModalProps {
  onClose: () => void;
  images: SeamlessDesign[];
  initialIndex: number;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  images,
  initialIndex,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg relative">
        <button
          className="absolute top-2 right-2 text-red-600 hover:text-gray-900"
          onClick={onClose}
        >
          Close
        </button>
        <div className="overflow-hidden">
          <div className="relative">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={500}
              height={500}
            />
            <button
              className="absolute top-1/2 -translate-y-1/2 left-0"
              onClick={prevImage}
            >
              Previous
            </button>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-0"
              onClick={nextImage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
