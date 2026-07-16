"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Kicker from "@/app/_components/Kicker";

export default function ServiceDetailContent({ service }) {
  const {
    title,
    shortDescription,
    image,
    heroKicker,
    heroSubtitle,
    highlights,
  } = service;

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-white pt-28 sm:pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-6">
              <Kicker>{heroKicker}</Kicker>
              <h1 className="mt-4 text-4xl md:text-6xl font-black text-black leading-[0.95]">
                {title}
              </h1>
              <p className="mt-4 text-gray-700 text-lg">{heroSubtitle}</p>
              <p className="mt-2 text-gray-600">{shortDescription}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/get-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 transition-all duration-300 shadow-xl"
                >
                  Get My Free Audit
                </a>
                <a
                  href="/get-audit"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 hover:border-blue-400 text-gray-800 font-semibold px-6 py-3 transition-all duration-300"
                >
                  Book a Quick Call
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg">
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="w-full bg-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-blue-100 bg-neutral-50 p-5"
              >
                <p className="text-gray-800 font-semibold">{h}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black text-black">
              How we work
            </h2>
            <p className="mt-3 text-gray-700">
              Discovery → Strategy → Execution. We start with your goals and
              constraints, then build a plan that fits. Clear reporting,
              frequent check-ins, no nonsense.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
