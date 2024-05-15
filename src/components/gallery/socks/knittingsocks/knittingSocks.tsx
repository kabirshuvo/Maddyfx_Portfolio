"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface KnittingSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const KnittingSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: KnittingSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Birds_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/black_white_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/bricks_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Finger_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/hexa_stripes_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/medical_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/pineapple_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Retro_Landscape_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/saint_louv_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_KnittingSocks",
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Winter_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<KnittingSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Knitting Socks Gallery</h1>
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

export default KnittingSocks;
