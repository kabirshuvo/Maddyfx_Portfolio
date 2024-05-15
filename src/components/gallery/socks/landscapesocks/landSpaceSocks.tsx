"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface LandScapeDesignSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const LandScapeDesignSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: LandScapeDesignSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/beach_surfing_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/blue_mountain_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/car_racing_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/city_scape_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/dark_nignt_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/gadia_mountain_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/Gorilla_in_the_jungle_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/horror_night_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/Mission_Beach_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/mountain_sky_bird_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/North_Pole_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/ocean_beach_d_20_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/ocean_tree_island_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/orange_sun_mountain_cactus_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/retro_sky_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/sand_mountain_hot_air_baloon_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/sheep_farm_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 18,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/sky_cloud_mountain_ocean_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 19,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/sports_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 20,
      alt: "maddyFx_LandScapeDesignSocks",
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/welcome_to_boot_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] =
    useState<LandScapeDesignSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Landscape Design Socks Gallery</h1>
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

export default LandScapeDesignSocks;
