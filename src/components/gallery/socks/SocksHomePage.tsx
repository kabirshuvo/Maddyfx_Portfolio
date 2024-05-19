"use client";
import React, { useState } from "react";
import Link from "next/link";
import ImageCard from "@/components/GalleryImageCard/GalleryImageCard";
import {
  MainSocksGallery,
  initialDesigns,
} from "@/lib/galleryImageData/socksImage";

const SocksGallery = () => {
  const [selectedImage, setSelectedImage] = useState<MainSocksGallery | null>(
    null
  );

  const handleImageClick = (design: MainSocksGallery) => {
    setSelectedImage(design);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="bg-emerald-700 text-white py-12 px-6 text-center w-full h-96 flex flex-col justify-center items-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          MaddyFX Socks Gallery
        </h1>
        <p className="text-lg md:text-xl">Explore Sock Designs.</p>
      </div>

      {/* Image Gallery */}
      <div className="md:col-span-2 -mt-24">
        {/* Individual Image Cards */}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4  p-4">
          {initialDesigns.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <Link href={image.link}>
                <ImageCard image={image} />
              </Link>
              <div className="text-right">{image.description}</div>
            </div>
          ))}
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default SocksGallery;
