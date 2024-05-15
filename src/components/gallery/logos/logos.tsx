"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface LogoDesign {
  id: number;
  src: string;
  alt: string;
}

const LogoDesigns: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: LogoDesign[] = [
    {
      id: 1,
      alt: "maddyFx_LogoDesign1",
      src: "https://maddyfx.me/images/Logo_Optimized/Cocoa_Beach_Parasail_Logo_2_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_LogoDesign2",
      src: "https://maddyfx.me/images/Logo_Optimized/Socks_City_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_LogoDesign3",
      src: "https://maddyfx.me/images/Logo_Optimized/DAO42_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_LogoDesign4",
      src: "https://maddyfx.me/images/Logo_Optimized/High_Class_Frenchies_royal_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_LogoDesign5",
      src: "https://maddyfx.me/images/Logo_Optimized/it_socks_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_LogoDesign6",
      src: "https://maddyfx.me/images/Logo_Optimized/Jimmy_Socks_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_LogoDesign7",
      src: "https://maddyfx.me/images/Logo_Optimized/Light_House_marina_round_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_LogoDesign8",
      src: "https://maddyfx.me/images/Logo_Optimized/Lighthouse_Marina_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_LogoDesign9",
      src: "https://maddyfx.me/images/Logo_Optimized/MP_logo_White_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_LogoDesign10",
      src: "https://maddyfx.me/images/Logo_Optimized/ponce_inlet_water_sports_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_LogoDesign11",
      src: "https://maddyfx.me/images/Logo_Optimized/dansan_logo_design_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_LogoDesign12",
      src: "https://maddyfx.me/images/Logo_Optimized/The_Fluffy_Frenchie_Boutique_logo_design_by_maddyfx_me.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Logo Gallery</h1>
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

export default LogoDesigns;
