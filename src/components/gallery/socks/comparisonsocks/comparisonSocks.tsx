"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface ComparisonSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const ComparisonSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: ComparisonSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_ComparisonSocks",
      src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/aucutee_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_ComparisonSocks",
      src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/ms_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_ComparisonSocks",
      src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/nw_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_ComparisonSocks",
      src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/socksy_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_ComparisonSocks",
      src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/sports_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] =
    useState<ComparisonSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">ComparisonSocks Gallery</h1>
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

export default ComparisonSocks;
