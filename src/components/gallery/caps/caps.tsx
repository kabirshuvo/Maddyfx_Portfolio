"use client";
import React, { useState } from "react";
import ImageCard from "@/components/GalleryImageCard/GalleryImages"; // Assuming the ImageCard component is located in a directory named "components" and has an alias "ImageCard"

interface CapDesign {
  id: number;
  src: string;
  alt: string;
}

const CapDesign: React.FC = () => {
  // Dummy data for designs
  const initialDesigns: CapDesign[] = [
    {
      id: 1,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/7_Panel_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 2,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/adilassim_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 3,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Be_the_light_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 4,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/bitcoin_etharium_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 5,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/bitcoin_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 6,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/blue_ridge_bound_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 7,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/blue_ridge_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 8,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/BudsDiesel_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 9,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/buffelo_head_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 10,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/bullybaseball_TBE_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 11,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Burton_Bound_sun_cloud_trucker_hat_cap_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 12,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/camera_lens_707_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 13,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/cant_fuck_with_astronauts_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 14,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/city_scape_fish_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 15,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/cloud_Baseball_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 16,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/cocoa_beach_parasail_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 17,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Colosseum_in_Rome_Mockup_3_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 18,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/cow_girls_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 19,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/dallas_cowboys_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 20,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Death_Match_logo_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 21,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/designated_dinkr_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 22,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/dog_birds_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 23,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Dog_face_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 24,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/dog_face_sun_ocean_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 25,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/dog_mom_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 26,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/dog_with_sunglass_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 27,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/fish_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 28,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Galaxy_x_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 29,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/glory_athletics_5_panel_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 30,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/glory_running_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 31,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/GOD_IS_NEAR_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 32,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Good_vibes_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 33,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/happy_on_hartwell_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 34,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/happy_on_hartwell_trucker_hat_Mockup_cap_design_by_maddyfx_me.jpg",
    },
    {
      id: 35,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Home_Management_Group_logo_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 36,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/hoppy_trout_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 37,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/HR_horse_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 38,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/I_cant_i_have_pickleball_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 39,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/i_love_pickleball_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 40,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/In_my_pickleball_era_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 41,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/inspirational_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 42,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/it_was_in_pickleball_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 43,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 44,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_3_1__snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 45,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_Design_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 46,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_Design_4_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 47,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_Final_Design_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 48,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_Final_Design_4_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 49,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_Cap_Final_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 50,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/JOHAN_white_hat_2_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 51,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/joshmac1_cap_01_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 52,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Keen_On_Keowee_MockUp_Final_Trucker_hat_Cap_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 53,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/lake_austin_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 54,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/lake_blue_ridge_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },

    {
      id: 55,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/lanier_bound_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 56,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Lanier_Lifestyle_MockUp_Final_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 57,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/le_Cap_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 58,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Life_story_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 59,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/love_pickle_ball_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 60,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/ludovico_hat_01_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 61,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/lvn_caostl_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 62,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/mental_health_01_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 63,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/mountain_landscape_trees_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 64,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/mountain_nature_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 65,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/never_not_editing_dad_hat_Cap_Mockup_by_maddyfx_me.jpg",
    },
    {
      id: 66,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/no_cap__snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 67,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/northwest_elk_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 68,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/northwest_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 69,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/nurse_jamie_is_my_botox_filler_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 70,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/ocean_sun_bird_trucker_hat_Mockup_Cap_design_by_maddyfx_me.jpg",
    },
    {
      id: 71,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/one_more_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 72,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/orange_county_snapback_Cap_hat_Mockup_by_maddyfx_me.jpg",
    },
    {
      id: 73,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/OTB_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 74,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/pacific_northwest_1_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 75,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/pacific_northwest_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 76,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/pacific_northwest_3_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 77,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/panther_with_texts_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 78,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/poop_dog_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 79,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/pro_armory_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 80,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/r_logo_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 81,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/retro_landscape_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 82,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/retro_sun_mountain_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 83,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Rooster_Cap_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 84,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/sailboat_gang_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 85,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Skull_Cap_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 86,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/SLOH_logo_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 87,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/southern_land_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 88,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/speed_wagon_snapback_Cap_hat_Mockup_by_maddyfx_me.jpg",
    },
    {
      id: 89,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/st_pius_christmas_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 90,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/sun_mountain_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 91,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/sun_ocean_landscape_trucker_hat_Mockup_cap_design_by_maddyfx_me.jpg",
    },
    {
      id: 92,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/The_Sailboat_Gang_Hat 3_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 93,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/The_Sailboat_Gang_Hat_2_baseball_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 94,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/The_Sailboat_Gang_Hat_baseball_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 95,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/the_sailboat_gang_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 96,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/Thonesix_logo_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 97,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/toasted_buds_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 98,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/train_play_chill_dinkr_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 99,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/typography_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 100,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/up_n_smoke_hat_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 101,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/up_n_smoke_Hat_3_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 102,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/usa_flag_gaming_controller_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 103,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/veho_2_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 104,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/veho_trucker_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 105,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/wfo_flc_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 106,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/wisedom_always_wins_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    {
      id: 107,
      alt: "maddyFx_capDesign",
      src: "https://maddyfx.me/images/Cap_Optimized/world_series_champions_snapback_Cap_hat_Mockup_design_by_maddyfx_me.jpg",
    },
    // Add more design data as needed
  ];

  const [designs, setDesigns] = useState<CapDesign[]>(initialDesigns);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center bg-emerald-700 h-80">
        <h1 className="text-5xl">Cap Gallery</h1>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto p-4 -mt-24">
        {/* Image Gallery */}
        {designs.map((design) => (
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

export default CapDesign;
