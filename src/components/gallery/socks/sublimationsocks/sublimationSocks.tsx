"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface SublimationSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const SublimationSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: SublimationSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/abstract_hand_drawn_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Berry_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/birthday_cake_balloon_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Bright_color_fantasy_world_of_icecream_hyper_detailed_socks 3 Mockup.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/cat_galaxy_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/construction_building_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/crocodile_river_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Cucchurrumi_abstract_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/cute_magician_dog__hyper_detailed socks city collection.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Desert_night_day_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/End_Climate_Change_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/feather_pattern_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/fishing_deck_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/floral_pattern_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/frog_body_pattern_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/hexagonals_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Kief_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 18,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/mexican_skull_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 19,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/pickle_ball_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 20,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Pirate_ship_advanture_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 21,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/Pride_Sea_Waves_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 22,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/River_Pollution_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 23,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/super_hero_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 24,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/trees_woods_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 25,
      alt: "maddyFx_SublimationSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/wiserd_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] =
    useState<SublimationSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Sublimation Socks Gallery</h1>
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

export default SublimationSocks;
