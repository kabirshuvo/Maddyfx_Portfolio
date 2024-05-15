"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface PatternSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const PatternSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: PatternSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/ambulence_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Autume_leaf_animal_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/avocado_smilie_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Banana_Monkey_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Beer_bottle_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/beer_glass_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/berry_fruits_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/black_foot_print_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/bus_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/camps_kitchen_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Chicken_Wings_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Christmas_elements_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Christmas_icons_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/colorful_Geometric_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/colorful_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Crossfit_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/dot_stripe_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 18,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/fabric_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 19,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/floral_leaf_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 20,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/flowers_texts_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 21,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/funny_bird_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 22,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/funny_monster_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 23,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Game_console_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 24,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/geometric_red_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 25,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/grand_pa_grand_ma_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 26,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Helicopter_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 27,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Lemon_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 28,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/lifter_gym_crossfit_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 29,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/man_panda_foot_print_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 30,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/mandala_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 31,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/medical_equipments_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 32,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/medical_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 33,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/monsters_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 34,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/mountain_camping_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 35,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/office_desk_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 36,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/pickle_ball_pad_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 37,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/pizza_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 38,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/plane_air_force_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 39,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/run_way_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 40,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/sailing_boat_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 41,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Santa_Claus_golfing_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 42,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/stroberry_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 43,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Tools_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 44,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/Travel_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 45,
      alt: "maddyFx_PatternSocks",
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/valentine_heart_rose_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<PatternSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Pattern Socks Gallery</h1>
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

export default PatternSocks;
