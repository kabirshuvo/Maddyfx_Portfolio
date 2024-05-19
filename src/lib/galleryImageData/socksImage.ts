// Main Scoks Gallery
export type MainSocksGallery = {
  id: number;
  src: string;
  alt: string;
  description: string;
  link: string;
};
export const initialDesigns: MainSocksGallery[] = [
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

// Sub Categories

// Animal Socks
export interface AnimalSocksDesign {
  id: number;
  src: string;
  alt: string;
}

export const AnimakSockDesigns: AnimalSocksDesign[] = [
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

// AnkelSocks
export interface AnkelSocksDesign {
  id: number;
  src: string;
  alt: string;
}
export const AnkelSocksinitialDesigns: AnkelSocksDesign[] = [
  {
    id: 1,
    alt: "maddyFx_AnkelSocks",
    src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/26_2_miler_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_AnkelSocks",
    src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/abstract_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_AnkelSocks",
    src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/Desocks_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_AnkelSocks",
    src: "https://maddyfx.me/images/Socks/Ankle_Socks_Designs/fruits_pattern_socks_design_ankle_sock_mockup_by_maddyfx_me.jpg",
  },
];

// Comparison Socks Gallery

export interface ComparisonSocksDesign {
  id: number;
  src: string;
  alt: string;
}

export const ComparisonSockImages: ComparisonSocksDesign[] = [
  {
    id: 1,
    alt: "maddyFx_ComparisonSocks",
    src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/aucutee_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_ComparisonSocks",
    src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/ms_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_ComparisonSocks",
    src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/nw_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_ComparisonSocks",
    src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/socksy_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 5,
    alt: "maddyFx_ComparisonSocks",
    src: "https://maddyfx.me/images/Socks/Compression_Socks_Designs/sports_socks_design_Compression_knee_high_sock_mockup_by_maddyfx_me.jpg",
  },
];

// CrewSockDesignImages
export interface CrewSockDesignImages {
  id: number;
  src: string;
  alt: string;
}

export const CrewSockInitialImages: CrewSockDesignImages[] = [
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

// FloralSockDesignImages
export interface FloralSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const FloralSockInitialImages: FloralSockDesignImages[] = [
  {
    id: 1,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/floral_city_scape_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/flower_butterfly_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/Pot_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/sand_watch_floral_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 5,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/Socks_city_colorful_flowers_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 6,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/St_Patricks_Day_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 7,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/The_flower_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 8,
    alt: "maddyFx_FloralSocksDesign",
    src: "https://maddyfx.me/images/Socks/Floral_Socks_Designs/Valentine_flowers_pattern_socks_design_crew_dress_knitting_sock_mockup_by_maddyfx_me.jpg",
  },
];

// FootlinerSocksDesignImages
export interface FootlinerSocksDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const FootlinerSockInitialDesigns: FootlinerSocksDesignImages[] = [
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

// KneehighSockDesignImages
export interface KneehighSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const KneehighSockinitialDesigns: KneehighSockDesignImages[] = [
  {
    id: 1,
    alt: "maddyFx_ToteBags",
    src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/Babybear_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_ToteBags",
    src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/brandon_bird_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_ToteBags",
    src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/ms_monkey_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_ToteBags",
    src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/santa_christmas_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 5,
    alt: "maddyFx_ToteBags",
    src: "https://maddyfx.me/images/Socks/Knee_High_Socks_Designs/unicorn_socks_design_knee_high_compression_sock_mockup_by_maddyfx_me.jpg",
  },
];

// KnittingSockDesignImages
export interface KnittingSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const KnittingSockinitialDesigns: KnittingSockDesignImages[] = [
  {
    id: 1,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Birds_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/black_white_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/bricks_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Finger_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 5,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/hexa_stripes_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 6,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/medical_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 7,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/pineapple_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 8,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Retro_Landscape_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 9,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/saint_louv_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 10,
    alt: "maddyFx_KnittingSocks",
    src: "https://maddyfx.me/images/Socks/Knitting_Socks_Designs/Winter_socks_design_knitting_crew_sock_mockup_by_maddyfx_me.jpg",
  },
];

// LandscapeSockDesignImages
export interface LandscapeSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const LandscapeSockinitialDesigns: LandscapeSockDesignImages[] = [
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

// LogoSockDesignImages
export interface LogoSockDesignImages {
  id: number;
  src: string;
  alt: string;
}

export const LogoSockinitialDesigns: LogoSockDesignImages[] = [
  {
    id: 1,
    alt: "maddyFx_LogoSocksDesign",
    src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/ambition_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_LogoSocksDesign",
    src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/feet_buddy_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_LogoSocksDesign",
    src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/Ice_cold_cornhole_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_LogoSocksDesign",
    src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/JMYB_logo_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 5,
    alt: "maddyFx_LogoSocksDesign",
    src: "https://maddyfx.me/images/Socks/Logo_Socks_Designs/tellise_maurice_logo_pattern_socks_design_crew_sock_mockup_by_maddyfx_me.jpg",
  },
];

// LowCutSockDesignImages
export interface LowCutSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const LowCutSocinitialDesigns: LowCutSockDesignImages[] = [
  {
    id: 1,
    alt: "maddyFx_LowCutSocksDesign",
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_1_low_cut_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 2,
    alt: "maddyFx_LowCutSocksDesign",
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_2_low_cut_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 3,
    alt: "maddyFx_LowCutSocksDesign",
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_3_low_cut_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 4,
    alt: "maddyFx_LowCutSocksDesign",
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_4_low_cut_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 5,
    alt: "maddyFx_LowCutSocksDesign",
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_5_low_cut_sock_mockup_by_maddyfx_me.jpg",
  },
  {
    id: 6,
    alt: "maddyFx_LowCutSocksDesign",
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_6_low_cut_sock_mockup_by_maddyfx_me.jpg",
  },
];

// PatternSockDesignImages
export interface PatternSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const PatternSockinitialDesigns: PatternSockDesignImages[] = [
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

// SpotsSockDesignImages
export interface SpotsSockDesignImages {
  id: number;
  src: string;
  alt: string;
}

export const SpotsSockinitialDesigns: SpotsSockDesignImages[] = [
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

// SublimationSockDesignImages
export interface SublimationSockDesignImages {
  id: number;
  src: string;
  alt: string;
}
export const SublimationSockinitialDesigns: SublimationSockDesignImages[] = [
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
