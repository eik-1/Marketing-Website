"use client";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import iphoneFrame from "@/public/mobile_svg.png";
import FreeAuditButton from "../FreeAuditButton";
import StarSvg from "../StarSvg";
import VideoPhone from "../VideoPhone";

const Hero = () => {
  // Simplified animation variants for major sections only
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const slideInFromLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.section
        className="h-[100vh] w-auto lg:p-16 p-6 lg:mt-16 mt-32 flex justify-between lg:flex-row flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col lg:gap-4 gap-8 lg:w-1/2 w-full mb-16 lg:mb-0"
          variants={slideInFromLeft}
        >
          <h1 className="lg:text-[4.5rem] text-5xl font-black flex flex-wrap text-black leading-tight flex-col lg:text-left text-center">
            <span>
              Marketing that feels like a{" "}
              <span className="text-blue-500 relative inline-block">
                <em>partnership</em>
                <svg
                  className="absolute pointer-events-none -left-1 lg:-left-8 -top-2 lg:-right-8 -right-12 lg:bottom-0 bottom-10"
                  viewBox="0 -15 480 130"
                  fill="none"
                >
                  <motion.path
                    d=" M397.9620056152344,3.010999917984009 C447.5,9.472999572753906 479.9989929199219,31.972999572753906 466.5,57.702999114990234 C437.5780029296875,112.8290023803711 23.5,105.72699737548828 23.5,52.702999114990234 C23.5,-14.010000228881836 375.7650146484375,-3.5490000247955322 468.8349914550781,25.197999954223633"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </span>{" "}
              ,{" "}
            </span>
            <span className="relative">
              not a{" "}
              <span className="text-red-400 relative inline-block">pitch</span>
            </span>
          </h1>
          <p className="text-gray-500 lg:text-2xl font-medium text-center lg:text-left">
            We work with your budget and goals to deliver results, not fluff.
          </p>
          <div className="mt-4 flex gap-8 items-center justify-center lg:justify-start">
            <FreeAuditButton />
          </div>
          <div className="lg:mt-8 mt-15 flex items-center gap-x-8 gap-y-2 lg:text-[1rem] text-xs text-black font-medium justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <StarSvg className="lg:w-6 lg:h-6 w-4 h-4" />
              <span>Enhanced Online Visibility</span>
            </div>
            <div className="flex items-center gap-2">
              <StarSvg className="lg:w-6 lg:h-6 w-4 h-4" />
              <span>Customized Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <StarSvg className="lg:w-6 lg:h-6 w-4 h-4" />
              <span>Improved Branding</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-1/2 flex justify-center items-center"
          variants={slideInFromRight}
        >
          <VideoPhone
            imageSrc={iphoneFrame}
            className="w-1/2"
            videoSrc="https://videos.pexels.com/video-files/8946986/8946986-uhd_1440_2732_25fps.mp4"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
