"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface ToteBagsDesign {
  id: number;
  src: string;
  alt: string;
}

const ToteBags: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: ToteBagsDesign[] = [
    {
      id: 1,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/bear_landscape_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/birds_in_the_ocean_beach_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/cars_in_the_woods_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/cat_flying_on_get_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/cat_inside_sunflower_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/cat_on_parachuite_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/cat_on_train_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/cloud_creem_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/colorful_floral_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/floral_pattern_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/god_is_great_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/mashroom_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/maxican_skull_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/pink_flower_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/Rabbit_moon_landscape_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/USA_flag_roster_tote_bag_design_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_ToteBags",
      src: "https://maddyfx.me/images/Tote_Bag_Optimized/women_in_haven_tote_bag_design_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<ToteBagsDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Tote Bags Gallery</h1>
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

export default ToteBags;
