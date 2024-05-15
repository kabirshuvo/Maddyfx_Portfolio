import React from "react";
import Link from "next/link";
import ImageCard from "@/components/GalleryImageCard/GalleryImageCard";

// Define type for individual image data
type ImageData = {
  id: number;
  src: string;
  alt: string;
  description: string;
  link: string;
};

const SocksGallery = () => {
  // Sample data for images
  const images: ImageData[] = [
    {
      id: 1,
      src: "https://maddyfx.me/images/Socks/Animal_Socks_Designs/cartoon_clean_illustration_of_a_cat_flying_with_jet_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
      alt: "Image 1",
      description: "Animal Socks Gallery",
      link: "/gallery/socks/animalsocks",
    },
    {
      id: 2,
      src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/26_2_miler_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
      alt: "Ankle Socks Designs",
      description: "Ankle Socks Design Gallery",
      link: "/gallery/socks/ankelsocks",
    },
    {
      id: 3,
      src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/socksy_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
      alt: "comparisonsocks gallery",
      description: "Comparisonsocks Gallery",
      link: "/gallery/socks/compresionsocks",
    },
    {
      id: 4,
      src: "https://maddyfx.me/images/Socks/Crew_Socks_Designs/cake_walk_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
      alt: "crewsocks Image Gallery",
      description: "Crewsocks Image Gallery",
      link: "/gallery/socks/crewsocks",
    },
    {
      id: 5,
      src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/floral_city_scape_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
      alt: "floralsocks Image Gallery",
      description: "floralsocks Gallery",
      link: "/gallery/socks/floralsocks",
    },
    {
      id: 6,
      src: "https://maddyfx.me/images/Socks/Foot_Liner_Socks_Designs/bricks_socks_design_foot_liner_invisible_no_show_sock_mockup_by_maddyfx_me.jpg",
      alt: "footliner Image Gallery",
      description: "Footliner Socks Gallery",
      link: "/gallery/socks/footliner",
    },
    {
      id: 7,
      src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/brandon_bird_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
      alt: "Kneehigh Socks Gallery",
      description: "kneehigh Socks Gallery",
      link: "/gallery/socks/kneehigh",
    },
    {
      id: 8,
      src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/pineapple_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
      alt: "knittingsocks Image Gallery",
      description: "knittingsocks Image Gallery",
      link: "/gallery/socks/knittingsocks",
    },
    {
      id: 9,
      src: "https://maddyfx.me/images/Socks/Landscape_Socks_Designs/beach_surfing_landscape_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
      alt: "landscapesocks Image Gallery",
      description: "landscapesocks Socks Gallery",
      link: "/gallery/socks/landscapesocks",
    },
    {
      id: 10,
      src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/feet_buddy_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
      alt: "Logo Socks Gallery",
      description: "Logo Socks Gallery",
      link: "/gallery/socks/logosocks",
    },
    {
      id: 11,
      src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_1_low_cut_sock_mockup_by_maddyfx_me.jpg",
      alt: "Lowcut Socks Gallery",
      description: "Lowcut Socks Gallery",
      link: "/gallery/socks/lowcutsocks",
    },
    {
      id: 12,
      src: "https://maddyfx.me/images/Socks/Pattern_Socks_Designs/ambulence_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
      alt: "patternsocks Image Gallery",
      description: "patternsocks Image Gallery",
      link: "/gallery/socks/patternsocks",
    },
    {
      id: 13,
      src: "https://maddyfx.me/images/Socks/Sports_Socks_Designs/american_football_socks_design_athletic_sports_sock_mockup_by_maddyfx_me.jpg",
      alt: "sportssocks Image Gallery",
      description: "sportssocks Image Gallery",
      link: "/gallery/socks/sportssocks",
    },
    {
      id: 14,
      src: "https://maddyfx.me/images/Socks/Sublimation_Socks_Designs/abstract_hand_drawn_socks_design_sublimation_DTG_printing_sock_mockup_by_maddyfx_me.jpg",
      alt: "sublimationsocks Image Gallery",
      description: "sublimationsocks Image Gallery",
      link: "/gallery/socks/sublimationsocks",
    },

    // Add more image data as needed
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="bg-emerald-700 text-white py-12 px-6 text-center w-full h-96 flex flex-col justify-center items-center ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          MaddyFX Socks Gallery
        </h1>
        <p className="text-lg md:text-xl">Explore Sock Designs.</p>
      </div>

      {/* Image Gallery */}
      <div className="md:col-span-2 -mt-24">
        {/* Individual Image Cards */}

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4  p-4">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <Link href={image.link}>
                <ImageCard image={image} />
              </Link>
              <div className="text-right">{image.description}</div>
            </div>
          ))}
        </div>

        {/* Other Sections */}
        <div className="bg-gray-300 p-4">Other Section 1</div>
        <div className="bg-gray-300 p-4">Other Section 2</div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default SocksGallery;
