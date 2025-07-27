"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ChooseUsCard = ({ icon, title, description }) => {
  const cardVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    rest: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: 5,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    rest: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-transparent items-start justify-between my-2 sm:my-4 p-3 sm:p-4 rounded-xl cursor-pointer group"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        variants={iconVariants}
        className="flex-shrink-0 mx-auto sm:mx-0"
      >
        <Image
          src={icon}
          alt={title}
          width={200}
          height={200}
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-all duration-300"
        />
      </motion.div>
      <motion.div
        className="flex flex-col text-center sm:text-left flex-1 mt-2 sm:mt-0"
        variants={textVariants}
      >
        <motion.h3
          className="text-base sm:text-lg lg:text-xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1 sm:mt-2 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ChooseUsCard;
