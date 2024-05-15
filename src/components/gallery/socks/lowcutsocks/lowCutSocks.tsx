"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface LowCutSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const LowCutSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: LowCutSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_LowCutSocksDesign",
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_1_low_cut_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_LowCutSocksDesign",
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_2_low_cut_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_LowCutSocksDesign",
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_3_low_cut_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_LowCutSocksDesign",
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_4_low_cut_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_LowCutSocksDesign",
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_5_low_cut_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_LowCutSocksDesign",
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_6_low_cut_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<LowCutSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Lowcut Socks Gallery</h1>
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

export default LowCutSocks;
