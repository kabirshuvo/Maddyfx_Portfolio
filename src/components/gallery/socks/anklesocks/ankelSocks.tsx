"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface AnkelSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const AnkelSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: AnkelSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_AnkelSocks",
      src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/26_2_miler_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_AnkelSocks",
      src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/abstract_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_AnkelSocks",
      src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/Desocks_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_AnkelSocks",
      src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/fruits_pattern_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<AnkelSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">AnkelSocks Gallery</h1>
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

export default AnkelSocks;
