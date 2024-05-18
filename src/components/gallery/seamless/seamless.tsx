"use client";
import React, { useState } from "react";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";
import GoToTopButton from "@/components/GoToTopButton/TopButton";
import Modal from "@/components/Modal/Modal";
import {
  initialDesigns,
  SeamlessDesign,
} from "@/lib/galleryImageData/seamlessImages";
import GalleryNavBar from "@/components/GalleryNavBar/GalleryNavBar";

const SeamlessDesigns: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<SeamlessDesign | null>(
    null
  );

  const handleImageClick = (design: SeamlessDesign) => {
    setSelectedImage(design);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl text-white">Seamless Pattern Gallery</h1>
        <GalleryNavBar />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto p-4 -mt-24">
        {initialDesigns.map((design) => (
          <div
            key={design.id}
            className="break-inside-avoid justify-center items-center cursor-pointer"
            onClick={() => handleImageClick(design)}
          >
            <ImageCard image={design} />
          </div>
        ))}
      </div>
      <GoToTopButton />
      {selectedImage && (
        <Modal
          onClose={closeModal}
          images={initialDesigns}
          initialIndex={initialDesigns.findIndex(
            (image) => image.id === selectedImage.id
          )}
        />
      )}
    </div>
  );
};

export default SeamlessDesigns;
