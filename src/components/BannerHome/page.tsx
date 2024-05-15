"use client";
import Image from "next/image";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa6";
import { RiDownload2Line } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import Brands from "./brands";

const Banner = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  // const { ref } = useSectionInView("Home", 0.25);

  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      id="home"
      // ref={ref}
      className="relative h-full lg:h-[90vh] overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 2xl:px-40"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center -z-10 bg-[#011231] overflow-hidden"
        style={{ backgroundImage: "url('/images/homeBanner.png')" }}
      ></div>

      <div
        className="relative z-10 flex-row lg:flex items-center justify-center pt-40 md:pt-28 lg:pt-32 2xl:pt-52"
        ref={heroSectionRef}
      >
        <div className="text-center lg:text-start w-full">
          <h2 className="text-2xl lg:text-4xl 2xl:text-6xl pb-4">
            Hi, This is <span className="text-orange-400">MADDY Fx</span>
          </h2>
          <p className="pb-4 text-slate-300 text-sm 2xl:text-xl">
            {" "}
            I am a Profesional ______________
          </p>
          <TypeAnimation
            sequence={[
              "Graphics Designer",
              2000,
              "Adobe Illustrator",
              2000,
              "POD Expert",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="bg-gradient-to-t from-blue-700 to-fuchsia-600 text-transparent bg-clip-text font-extrabold text-2xl lg:text-4xl 2xl:text-6xl"
            repeat={Infinity}
          />
          <p className="w-full text-center lg:text-start lg:w-2/3 2xl:w-3/4 text-sm 2xl:text-2xl pt-4 2xl:pt-8 text-slate-500">
            {" "}
            I am a Graphics Designer and Print On Demand Expert. I am working
            with several Amazon Brands and Individual Buyers as there complete
            Graphic and Amazon Solution. My aim is to provide top quality
            Service on time and in budget with Satisfaction. Please contact me
            to discuss More.
          </p>
          <div className="flex item-center justify-center lg:justify-start gap-6 pt-8 2xl:pt-12">
            <div className="dwnldBtn flex items-center gap-2 2xl:gap-4 2xl:text-2xl">
              <RiDownload2Line className="text-xl 2xl:text-3xl" />{" "}
              <span>Download CV</span>{" "}
            </div>
            <div className="ghostBtn flex items-center gap-2 2xl:gap-4 2xl:text-2xl">
              <span>Contact Me</span> <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          className="w-full pt-12 pb-28 lg:pt-0 lg:pb-0 lg:w-1/2 flex justify-center items-center"
          style={{
            transition: "transform 0.1s ease-out",
          }}
          ref={imageRef}
        >
          <div className="border-4 rounded-3xl border-orange-500 bg-black bg-opacity-75 overflow-hidden transition-transform hover:scale-110 ease-in-out">
            <div className="w-64 h-64 md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px]">
              <Image
                className="object-contain w-full h-full"
                src="https://maddyfx.me/images/Madllee_Maddy.png"
                alt="Hero Image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-3/4 md:w-1/2 bg-white bg-opacity-30 border-t-4 border-orange-500 pl-4 h-16 2xl:h-28 rounded-se-full pr-12">
        <Brands />
      </div>
    </div>
  );
};

export default Banner;
