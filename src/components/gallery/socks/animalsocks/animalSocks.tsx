"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface AnimalSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const AnimalSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: AnimalSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/bunny_rabbit_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/cant_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/cartoon_clean_illustration_of_a_cat_flying_with_jet_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/cat_galaxy_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/caw_farm_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/cow_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/cute_panda_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/Leopard_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/Lion_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/luxary_cream_fudge_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/Octopas_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/Panda_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/pukeko_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/Rooster_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_AnimalSocks",
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/white_bear_panther_ryno_socks_design_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<AnimalSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Animal Socks Gallery</h1>
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

export default AnimalSocks;
