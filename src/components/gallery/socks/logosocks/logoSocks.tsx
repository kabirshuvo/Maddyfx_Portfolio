"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface LogoSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const LogoSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: LogoSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_LogoSocksDesign",
      src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/ambition_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_LogoSocksDesign",
      src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/feet_buddy_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_LogoSocksDesign",
      src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/Ice_cold_cornhole_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_LogoSocksDesign",
      src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/JMYB_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_LogoSocksDesign",
      src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/tellise_maurice_logo_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<LogoSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Logo Socks Gallery</h1>
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

export default LogoSocks;
