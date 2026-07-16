"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MorphingText } from "@/app/_components/MorphingText";

const AboutHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center bg-white pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 relative"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.05] mb-2">
              Small team.
            </h1>

            {/* Morphing text */}
            <div className="mb-2">
              <MorphingText
                texts={["Big results.", "Real growth.", "No bullshit."]}
                className="h-12 sm:h-16 md:h-20 lg:h-24 text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] text-blue-500 lg:text-left max-w-none"
              />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
              We're a UK marketing agency that actually answers the phone.
            </p>

            <Link href="/get-audit">
              <motion.button
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 text-lg font-semibold bg-black text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors cursor-pointer"
              >
                Work with us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

          </motion.div>

          {/* Right - Image with creative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Rotating border decoration */}
            <motion.div
              style={{ rotate }}
              className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-3xl"
            />

            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/about-hero.jpg"
                alt="The Oddstone team at work"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;
