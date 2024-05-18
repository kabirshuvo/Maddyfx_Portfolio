"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Link from "next/link";
import ImageCard from "@/components/GalleryImageCard/GalleryImageCard";
import GalleryNavBar from "../GalleryNavBar/GalleryNavBar";

// Define type for individual image data
type ImageData = {
  id: number;
  src: string;
  alt: string;
  description: string;
  link: string;
};

export default function GallerySection() {
  // Sample data for images
  const images: ImageData[] = [
    {
      id: 1,
      src: "https://maddyfx.me/images/Cap_Optimized/Be_the_light_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
      alt: "Cap Image",
      description: "Caps Gallery",
      link: "/gallery/caps",
    },
    {
      id: 2,
      src: "https://maddyfx.me/images/Logo_Optimized/Socks_City_logo_design_by_maddyfx_me.jpg",
      alt: "Logo Image",
      description: "Logos Gallery",
      link: "/gallery/logos",
    },
    {
      id: 3,
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/floral_multiple_Seamless_pattern_design_by_maddyfx_me.jpg",
      alt: "Image gallery for seamless patterns ",
      description: "Seamless Gallery",
      link: "/gallery/seamless",
    },
    {
      id: 4,
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_2_low_cut_sock_mockup_by_maddyfx_me.jpg",
      alt: "Image gallery for socks",
      description: "Socks Gallery",
      link: "/gallery/socks",
    },
    {
      id: 5,
      src: "/images/service_9.png",
      alt: "Image gallery for line art drawing",
      description: "LineArt Gallery",
      link: "/gallery/svgs",
    },
    {
      id: 6,
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/guiter_landscape_pillow_through_design_by_maddyfx_me.jpg",
      alt: "Image gallery for throw pillows",
      description: "Throw Pillow Gallery",
      link: "/gallery/throwpillows",
    },
    {
      id: 7,
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/floral_pattern_tote_bag_design_by_maddyfx_me.jpg",
      alt: "Image gallery for tote bags",
      description: "Tote Bags Gallery",
      link: "/gallery/totebags",
    },
    {
      id: 8,
      src: "https://maddyfx.me/images/Tshirt_Optimized/cute_cat_tshirt_design_Mockup_by_maddyfx_me.jpg",
      alt: "Image gallery for tshirts",
      description: "T-SHirts Gallery",
      link: "/gallery/thirts",
    },
    // Add more image data as needed
  ];

  return (
    <div className="flex flex-col items-center" id="gallery">
      {/* Hero Section */}
      <div className="bg-emerald-700 text-white py-12 px-6 text-center w-full h-96 flex flex-col justify-center items-center ">
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
        {/* <div className="bg-gray-300 p-4">Other Section 2</div> */}
      </div>
    </div>
  );
}
