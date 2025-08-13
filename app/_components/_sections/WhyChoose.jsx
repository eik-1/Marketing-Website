"use client";
import { motion } from "framer-motion";

import ChooseUsCard from "../ChooseUsCard";
import { img1, img2, img3, img4 } from "@/public/choose_us";
import PixelTrail from "../PixelTrail";

const WhyChooseUs = () => {
  const features = [
    {
      icon: img1,
      title: "Certified Experts",
      description:
        "Experience quality without breaking the bank. We are a team of experienced professionals who are dedicated to delivering results that matter.",
    },
    {
      icon: img3,
      title: "Transparent Pricing",
      description:
        "Clear, upfront pricing with no hidden fees. You'll know exactly what you're paying for and the results you can expect.",
    },
    {
      icon: img4,
      title: "Tailored Plans",
      description:
        "Every business is unique. We create customized marketing strategies that fit your specific goals, budget, and industry.",
    },
    {
      icon: img2,
      title: "100% Satisfaction",
      description:
        "Don't take our word for it. See for yourself how our clients feel about our work.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardColumnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const mobileCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="how-we-work"
      className="w-full bg-blue-100 py-12 sm:py-16 lg:py-24 overflow-hidden relative"
    >
      <div className="absolute inset-0 z-1">
        <PixelTrail
          pixelSize={20}
          delay={130}
          fadeDuration={1000}
          pixelClassName="bg-blue-700/80"
        />
      </div>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Text Content */}
        <motion.div
          className="w-full lg:w-1/3 flex flex-col text-center lg:text-left"
          variants={textVariants}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 sm:mb-8 w-fit mx-auto lg:mx-0"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            [ WHY ODDSTONE ]
          </motion.div>
          <motion.h3
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-4 leading-tight"
            variants={titleVariants}
          >
            The Razor Difference
          </motion.h3>
          <motion.p
            className="text-gray-600 text-base sm:text-lg mt-4 max-w-md mx-auto lg:mx-0"
            variants={textVariants}
          >
            We are a team of experienced professionals who are dedicated to
            delivering results that matter. We are not here to sell you a dream,
            we are here to deliver results that you can see and feel.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="w-full lg:w-2/3 lg:pl-8 xl:pl-20"
          variants={textVariants}
        >
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row relative">
            <motion.div
              className="w-1/2 flex flex-col px-4 py-4 relative"
              variants={cardColumnVariants}
            >
              <motion.div
                className="absolute top-0 right-0 h-full w-1 bg-blue-900 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.div variants={textVariants}>
                <ChooseUsCard
                  icon={features[0].icon}
                  title={features[0].title}
                  description={features[0].description}
                />
              </motion.div>
              <motion.hr
                className="my-4 border-blue-900 border-2 rounded-full origin-left"
                variants={dividerVariants}
              />
              <motion.div variants={textVariants}>
                <ChooseUsCard
                  icon={features[1].icon}
                  title={features[1].title}
                  description={features[1].description}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="w-1/2 flex flex-col px-4 py-4 mt-20 xl:mt-30"
              variants={cardColumnVariants}
            >
              <motion.div variants={textVariants}>
                <ChooseUsCard
                  icon={features[2].icon}
                  title={features[2].title}
                  description={features[2].description}
                />
              </motion.div>
              <motion.hr
                className="my-4 border-blue-900 border-2 rounded-full origin-left"
                variants={dividerVariants}
              />
              <motion.div variants={textVariants}>
                <ChooseUsCard
                  icon={features[3].icon}
                  title={features[3].title}
                  description={features[3].description}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile & Tablet Layout */}
          <motion.div
            className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={mobileCardVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                className="relative"
              >
                <ChooseUsCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
                {/* Add divider between cards on mobile, except for last one */}
                {index < features.length - 1 && (
                  <motion.hr
                    className="mt-6 mb-2 border-blue-900 border-2 rounded-full origin-left sm:hidden"
                    variants={dividerVariants}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
