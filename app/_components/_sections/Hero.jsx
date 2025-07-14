"use client";
import { motion } from "framer-motion";

import FreeAuditButton from "../FreeAuditButton";
import StarSvg from "../StarSvg";
import HeroIllustration from "../HeroIllustration";

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
        className="lg:h-[100vh] h-fit w-auto lg:p-16 p-6 lg:mt-16 mt-28 flex justify-between lg:flex-row flex-col items-center relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background SVG */}
        <div className="absolute inset-0 w-full h-full z-0">
          <svg
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-auto lg:min-w-[800px] min-w-[1800px]"
            width="1102"
            height="551"
            viewBox="0 -36 1102 551"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYEnd meet"
          >
            <motion.path
              d="M0,515 A551,551 0 0,1 1102,515 L1102,515 L0,515 Z"
              fill="#E6F3FF"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
            <motion.path
              d="M151,515 A400,400 0 0,1 951,515 L951,515 L151,515 Z"
              fill="#CCE7FF"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            />
            <motion.path
              d="M301,515 A250,250 0 0,1 801,515 L801,515 L301,515 Z"
              fill="#99D6FF"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            />
          </svg>
        </div>

        <motion.div
          className="flex flex-col lg:gap-4 gap-8 lg:w-1/2 w-full mb-16 lg:mb-0 relative z-10"
          variants={slideInFromLeft}
        >
          <h1 className="lg:text-[4.5rem] text-[2.75rem] font-black flex flex-wrap text-black leading-tight flex-col lg:text-left text-center">
            <span>
              Marketing that feels like a{" "}
              <span className="text-blue-500 relative inline-block">
                <em>partnership</em>
                <svg
                  className="absolute pointer-events-none lg:-left-8 -left-5 -top-2 lg:-right-8 -right-5 lg:bottom-0"
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
          <p className="text-black lg:text-2xl font-medium text-center lg:text-left">
            We work with your budget and goals to deliver results, not fluff.
          </p>
          <div className="mt-4 flex gap-8 items-center justify-center lg:justify-start">
            <FreeAuditButton />
          </div>
          <div className="lg:mt-8 mt-10 flex items-center gap-x-8 gap-y-2 lg:text-[1rem] text-sm text-black font-medium justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <StarSvg className="lg:w-6 lg:h-6 w-4 h-4" />
              <span>Enhanced Visibility</span>
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
          className="lg:w-1/2 w-full flex justify-center items-center relative z-10"
          variants={slideInFromRight}
        >
          <HeroIllustration />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
