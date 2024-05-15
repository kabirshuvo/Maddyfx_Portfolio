"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface Design {
  id: number;
  src: string;
  alt: string;
}

const SvgImages: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: Design[] = [
    {
      id: 1,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Animal_Tshirt-01.svg",
    },
    {
      id: 2,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Flower_Socks-01.svg",
    },
    {
      id: 3,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Flower_Tshirt-01.svg",
    },
    {
      id: 4,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Glory_Tshirt-01.svg",
    },
    {
      id: 5,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/JOHAN_Cap_Final_Design 1 MOckup-01.svg",
    },
    {
      id: 6,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Landscap_Socks-01.svg",
    },
    {
      id: 7,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Snapback_Cap_PSD_MockUp_3-01.svg",
    },
    {
      id: 8,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/Tech_Socks-01.svg",
    },
    {
      id: 9,
      alt: "maddyFx_svgImages",
      src: "https://maddyfx.me/images/SVG/up-n- smoke_Hat_2 Mockup-01.svg",
    },
  ];

  const [designs, setDesigns] = useState<Design[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">SVG Images Gallery</h1>
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

export default SvgImages;
