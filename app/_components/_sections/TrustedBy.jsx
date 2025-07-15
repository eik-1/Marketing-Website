"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import brand1 from "@/public/brands/brand1.png";
import brand2 from "@/public/brands/brand2.png";
import brand3 from "@/public/brands/brand3.webp";
import brand4 from "@/public/brands/brand4.png";

const TrustedBy = ({ logos = [] }) => {
  const defaultLogos = [
    { name: "Airbnb", src: brand1, alt: "brand 1" },
    { name: "Amazon", src: brand2, alt: "brand 2" },
    { name: "FedEx", src: brand3, alt: "brand 3" },
    { name: "Google", src: brand4, alt: "brand 4" },
    { name: "Airbnb", src: brand1, alt: "brand 1" },
    { name: "Amazon", src: brand2, alt: "brand 2" },
    { name: "FedEx", src: brand3, alt: "brand 3" },
    { name: "Google", src: brand4, alt: "brand 4" },
  ];

  const companyLogos = logos.length > 0 ? logos : defaultLogos;

  const infiniteLogos = [...companyLogos, ...companyLogos];

  const logoWidth = 200;
  const totalContentWidth = infiniteLogos.length * logoWidth;
  const containerWidth = 1280;

  const maxDragLeft = Math.min(0, containerWidth - totalContentWidth + 100);

  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-7xl mx-auto lg:px-6 px-3">
        <div className="text-left p-4 mb-2 flex items-center justify-center lg:justify-start">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 lg:inline-block inline-flex">
            Trusted by Top Companies
          </h2>
        </div>

        <div
          className="overflow-hidden relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{
              left: maxDragLeft,
              right: 0,
            }}
            dragElastic={0.1}
            className="flex cursor-grab gap-0 lg:gap-8 active:cursor-grabbing"
            whileDrag={{ cursor: "grabbing" }}
          >
            {infiniteLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-6 py-4 w-[150px] sm:w-[200px]"
              >
                <div className="relative h-12 sm:h-10 lg:h-20 w-full max-w-[160px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    sizes="160px"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fallback gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
