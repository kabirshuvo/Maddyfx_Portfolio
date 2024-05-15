"use client";
import React, { useState } from "react";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface SeamlessDesign {
  id: number;
  src: string;
  alt: string;
}

const SeamlessDesigns: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: SeamlessDesign[] = [
    {
      id: 1,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/Baseball_flower_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/floral_multiple_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/Floral_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/pickleball_bat_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/pickleball_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/skull_fishing_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_seamlessPattern1",
      src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/Thonesix_Seamless_pattern_design_by_maddyfx_me.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Seamless Pattern Gallery</h1>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto p-4 -mt-24">
        {/* Image Gallery */}
        {initialDesigns.map((design) => (
          <div
            key={design.id}
            className="break-inside-avoid justify-center items-center"
          >
            <ImageCard image={design} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeamlessDesigns;
