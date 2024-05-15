"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface KneeHighSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const KneeHighSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: KneeHighSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/Babybear_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/brandon_bird_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/ms_monkey_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/santa_christmas_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/unicorn_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<KneeHighSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">KneeHigh Socks Gallery</h1>
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

export default KneeHighSocks;
