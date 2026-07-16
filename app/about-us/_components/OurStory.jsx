"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SpinningText } from "@/app/_components/SpinningText";

const OurStory = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section ref={sectionRef} className="bg-gray-50 relative overflow-hidden">
      {/* Big quote section */}
      <div className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative bg-slate-900">
        {/* Decorative quote marks */}
        <div className="absolute top-8 left-8 text-[200px] font-serif text-blue-400/20 leading-none select-none hidden lg:block">
          "
        </div>

        <div className="max-w-5xl mx-auto relative">
          <motion.blockquote
            style={{ scale, opacity }}
            className="text-center"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-white">
              "We're not generalists —
              <span className="text-blue-400">
                {" "}we're specialists by design.
              </span>
              "
            </p>
            <cite className="text-gray-400 text-base sm:text-lg not-italic">
              — Our philosophy
            </cite>
          </motion.blockquote>
        </div>
      </div>

      {/* Stats section */}
      <div className="border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              {
                stat: "55%",
                label: "Referrals",
                detail: "Most work comes from clients who told a friend.",
                color: "bg-white",
              },
              {
                stat: "0",
                label: "Long contracts",
                detail: "Month-to-month. If we're not delivering, leave.",
                color: "bg-blue-500 text-white",
              },
              {
                stat: "1",
                label: "Point of contact",
                detail: "Talk to the person doing the work. Always.",
                color: "bg-white",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 sm:p-10 lg:p-14 text-center relative ${item.color}`}
              >
                <div
                  className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-3 ${
                    i === 1 ? "text-white" : "text-blue-500"
                  }`}
                >
                  {item.stat}
                </div>
                <div
                  className={`text-lg font-semibold mb-2 ${
                    i === 1 ? "text-white" : "text-black"
                  }`}
                >
                  {item.label}
                </div>
                <p
                  className={`text-sm max-w-xs mx-auto ${
                    i === 1 ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image + Text split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        {/* Image side */}
        <div className="relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] order-2 lg:order-1">
          <Image
            src="/about_us1.jpeg"
            alt="An Oddstone working session reviewing campaign plans together"
            fill
            className="object-cover"
          />

          {/* Spinning text decoration - overlapping edge */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-24 h-24 sm:w-28 sm:h-28 z-10">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl">
              <SpinningText
                radius={7}
                duration={20}
                className="text-[8px] sm:text-[9px] font-bold text-slate-900 tracking-wider"
              >
                {`M A R K E T I N G • R E S U L T S • G R O W T H • `}
              </SpinningText>
            </div>
          </div>
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center p-8 sm:p-10 lg:p-14 xl:p-20 order-1 lg:order-2 bg-white relative"
        >
          <div className="max-w-xl relative">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block h-1 bg-blue-500 mb-6"
            />

            <span className="text-blue-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 block">
              About Oddstone
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight text-black">
              Specialists by design, not generalists by default.
            </h2>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg">
              <p>
                Our team is built with MSc-qualified digital marketing experts from the UK,
                former ex-Meta team members, and practitioners who've worked across global markets,
                luxury brands, and performance-led businesses.
              </p>
              <p>
                We don't believe in making one person do everything. Instead, every account is
                handled by a dedicated crew, where each expert operates in their own forte —
                strategy, performance, creatives, CRO, or analytics. This ensures depth,
                accountability, and measurable impact.
              </p>
              <p>
                Our approach blends brand thinking with performance execution. We focus on
                building scalable systems that drive real business outcomes — not vanity metrics.
              </p>
            </div>

            {/* Quote card */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-500 italic">
                "Oddstone works as an extension of your team, bringing clarity, structure,
                and precision to digital growth."
              </p>
            </div>

            {/* Meta certifications */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <span className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Certified expertise
              </span>
              <div className="flex items-center gap-5 sm:gap-7">
                <Image
                  src="/meta1.jpeg"
                  alt="Meta Certified Media Buying Professional badge"
                  width={104}
                  height={104}
                />
                <Image
                  src="/meta2.jpeg"
                  alt="Meta Certified Media Planning Professional badge"
                  width={114}
                  height={114}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
