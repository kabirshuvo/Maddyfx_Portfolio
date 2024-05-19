"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaRegPaperPlane } from "react-icons/fa";
import { navLinks } from "@/lib/data";
import clsx from "clsx";

export default function Header() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-4 md:px-8 2xl:px-20 sm:flex items-center justify-between bg-opacity-80 z-[999] relative bg-black shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]  text-slate-300 border-b border-slate-700 overflow-hidden"
    >
      {/* logo */}
      <div className="hidden sm:block md:flex justify-center items-center">
        <Image
          src="https://maddyfx.me/images/MaddyFX%20Logo-wide.png"
          alt="Logo"
          width={100}
          height={30}
          // className="2xl:w-[50px] 2xl:h-[50px]"
        />
      </div>

      {/* menu */}
      <nav>
        <ul className="grid grid-cols-3 md:pb-0 sm:flex items-center justify-center sm:gap-6 2xl:gap-10 ">
          {navLinks.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span className="transform transition-transform duration-500 ease-in-out hover:scale-110">
                <Link
                  //why my transform is not working
                  className=" text-xs sm:text-sm md:text-base xl:text-l "
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </span>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* contact btn */}
      <div className="orangeBtn hidden sm:block md:flex justify-center items-center">
        <Link href="/contact">
          <p className="flex items-center justify-center gap-2 text-sm ">
            <span>Let&apos;s talk</span> <FaRegPaperPlane />
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
