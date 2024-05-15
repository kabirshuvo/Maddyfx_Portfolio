"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface SportsSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const SportsSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: SportsSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/87_player_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/87_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/american_football_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/arizona_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/back_2_back_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/baltimore_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/black_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/chiefs_kingdom_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/evolve_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/football_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/jenejack_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/kc_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/LM_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/memphis_socks_design_athletic_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/sneeker_style_socks_design_athletic_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/sports_grip_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/tenis_ball_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 18,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/tenis_bat_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 19,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/tenis_cross_bat_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 20,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/walk_run_fly_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 21,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/walk_run_fly_stripes_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 22,
      alt: "maddyFx_SportsSocksDesign",
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/yellow_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<SportsSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Sports Socks Gallery</h1>
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

export default SportsSocks;
