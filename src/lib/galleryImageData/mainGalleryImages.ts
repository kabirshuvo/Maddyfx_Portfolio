// Define type for individual image data
export type ImageData = {
  id: number;
  src: string;
  alt: string;
  description: string;
  link: string;
};

// Sample data for images
export const images: ImageData[] = [
  {
    id: 1,
    src: "https://maddyfx.me/images/Cap_Optimized/Be_the_light_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    alt: "Cap Image",
    description: "Caps Gallery",
    link: "/gallery/caps",
  },
  {
    id: 2,
    src: "https://maddyfx.me/images/Logo_Optimized/Socks_City_logo_design_by_maddyfx_me.jpg",
    alt: "Logo Image",
    description: "Logos Gallery",
    link: "/gallery/logos",
  },
  {
    id: 3,
    src: "https://maddyfx.me/images/Seamless_Pattern_Optimized/floral_multiple_Seamless_pattern_design_by_maddyfx_me.jpg",
    alt: "Image gallery for seamless patterns",
    description: "Seamless Gallery",
    link: "/gallery/seamless",
  },
  {
    id: 4,
    src: "https://maddyfx.me/images/Socks/Low_cut_Socks_Designs/Finger_socks_design_2_low_cut_sock_mockup_by_maddyfx_me.jpg",
    alt: "Image gallery for socks",
    description: "Socks Gallery",
    link: "/gallery/socks",
  },
  {
    id: 5,
    src: "/images/service_9.png",
    alt: "Image gallery for line art drawing",
    description: "LineArt Gallery",
    link: "/gallery/svgs",
  },
  {
    id: 6,
    src: "https://maddyfx.me/images/Throw_Pillow_Optimized/guiter_landscape_pillow_through_design_by_maddyfx_me.jpg",
    alt: "Image gallery for throw pillows",
    description: "Throw Pillow Gallery",
    link: "/gallery/throwpillows",
  },
  {
    id: 7,
    src: "https://maddyfx.me/images/Tote_Bag_Optimized/floral_pattern_tote_bag_design_by_maddyfx_me.jpg",
    alt: "Image gallery for tote bags",
    description: "Tote Bags Gallery",
    link: "/gallery/totebags",
  },
  {
    id: 8,
    src: "https://maddyfx.me/images/Tshirt_Optimized/cute_cat_tshirt_design_Mockup_by_maddyfx_me.jpg",
    alt: "Image gallery for tshirts",
    description: "T-Shirts Gallery",
    link: "/gallery/thirts",
  },
];
