"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface FloralSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const FloralSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: FloralSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/floral_city_scape_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/flower_butterfly_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/Pot_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/sand_watch_floral_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/Socks_city_colorful_flowers_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/St_Patricks_Day_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/The_flower_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_FloralSocksDesign",
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/Valentine_flowers_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<FloralSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Floral Socks Gallery</h1>
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

export default FloralSocks;
