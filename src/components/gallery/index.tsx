"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Link from "next/link";
import ImageCard from "@/components/GalleryImageCard/GalleryImageCard";
import GalleryNavBar from "../GalleryNavBar/GalleryNavBar";
import { images, ImageData } from "@/lib/galleryImageData/mainGalleryImages"; // Import the image data

export default function GallerySection() {
  return (
    <div className="flex flex-col items-center pb-16" id="gallery">
      {/* Hero Section */}
      <div className="bg-emerald-700 text-white py-12 px-6 text-center w-full h-96 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          MaddyFX Image Gallery
        </h1>
        <p className="text-lg md:text-xl">Explore My Works.</p>
        <div>
          <GalleryNavBar />
        </div>
      </div>

      {/* Image Gallery */}
      <div className="md:col-span-2 -mt-24">
        {/* Individual Image Cards */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto p-4">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <Link href={image.link}>
                <ImageCard image={image} />
              </Link>
              <div className="text-right">{image.description}</div>
            </div>
          ))}
        </div>

        {/* Other Sections */}
        <div className="bg-transparent p-4 text-cyan-700 hover:text-cyan-500 flex justify-center items-center">
          <button className="px-4 py-2 border border-white rounded-lg">
            <Link href="/">Go Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
