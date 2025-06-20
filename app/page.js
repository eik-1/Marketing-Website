"use client";
import { motion } from "framer-motion";

import Navbar from "@/app/_components/Navbar";
import Hero from "./_components/_sections/Hero";
import Footer from "./_components/Footer";
import WhatWeDo from "./_components/_sections/WhatWeDo";

export default function Home() {
  return (
    <main>
      <motion.div
        aria-hidden="true"
        className="absolute lg:top-40 top-60 lg:-right-20 -left-40 lg:w-[50rem] lg:h-[50rem] w-[25rem] h-[25rem] bg-[#a9d1ffd8] z-[-1] rounded-full"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <Navbar />
      <Hero />
      {/* <WhatWeDo /> */}

      {/* <Footer /> */}
    </main>
  );
}
