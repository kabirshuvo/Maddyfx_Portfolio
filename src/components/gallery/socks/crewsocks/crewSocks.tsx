"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageCard from "@/components/GalleryImageCard/GalleryImages";

interface CrewSocksDesign {
  id: number;
  src: string;
  alt: string;
}

const CrewSocks: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: CrewSocksDesign[] = [
    {
      id: 1,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/bourbon_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/cake_walk_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/cartoon_racing_car__socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/christmas_light_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/christmas_pattern_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/Classic_stripes_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/colorful_pattern_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/crazy_face_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/Crossfit_gym_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/danching_lady_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/danching_men_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/easter_bunny_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/easter_egg_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/evil_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/Face_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/food_cheif_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/Frog_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 18,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/funny_face_2_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 19,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/funny_face_3_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 20,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/funny_face_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 21,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/geometric_squars_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 22,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/ghost_halloween_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 23,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/hand_drawn_kids_drawing_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 24,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/hitachi_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 25,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/marijuana_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 26,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/military_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 27,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/moon_walker_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 28,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/msy_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 29,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/nurse_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 30,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/red_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 31,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/skull_berbel_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 32,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/skull_gym_crossfit_socks_design_crew_dress_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 33,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/Smilie_emoji_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 34,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/tech_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 35,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/valentine_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 36,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/Vegetable_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
    {
      id: 37,
      alt: "maddyFx_Crew_Socks_Designs",
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/xx_air_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
    },
  ];

  const [designs, setDesigns] = useState<CrewSocksDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Crew Socks Gallery</h1>
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

export default CrewSocks;
