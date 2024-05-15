"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface Design {
  id: number;
  src: string;
  alt: string;
}

const ThrowPillows: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: Design[] = [
    {
      id: 1,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/austronutes_cat_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/classic_star_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/crow_baloon_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/face_emoji_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/floral_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/flower_cat_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/guiter_landscape_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/hunny_bee_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/japanise_culture_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/love_rabbits_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/owl_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/pirate_ship_pillow_through_design_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_ThrowPillows",
      src: "https://maddyfx.me/images/Throw_Pillow_Optimized/world_is_mine_pillow_through_design_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<Design[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Throw Pillows Gallery</h1>
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

export default ThrowPillows;
