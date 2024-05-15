"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface FootLinerDesign {
  id: number;
  src: string;
  alt: string;
}

const FootLiner: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: FootLinerDesign[] = [
    {
      id: 1,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Foot_Liner_Socks_Designs/bricks_socks_design_foot_liner_invisible_no_show_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Foot_Liner_Socks_Designs/solid_color_socks_design_foot_liner_invisible_no_show_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Socks/Foot_Liner_Socks_Designs/sstripes_socks_design_foot_liner_invisible_no_show_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<FootLinerDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Foot Liner Socks Gallery</h1>
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

export default FootLiner;
