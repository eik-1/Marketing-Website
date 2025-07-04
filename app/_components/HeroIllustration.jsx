"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import ill1 from "@/public/hero-illustration.png";

const HeroIllustration = () => {
  const bounceVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const slowBounceVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-end items-center w-full h-full">
      <div className="w-full h-full ml-30">
        <Image
          src={ill1}
          alt="hero illustration"
          width={500}
          height={500}
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default HeroIllustration;
