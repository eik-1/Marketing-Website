"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudyCard({ study, index }) {
  const number = String(index + 1).padStart(2, "0");

  // Get the primary result to highlight
  const primaryResult = study.results[0];
  const secondaryResult = study.results[1];

  const getResultDisplay = (result) => {
    if (result.before && result.after) return result.after;
    if (result.change) {
      const value = result.change.replace("~", "");
      return `${result.direction === "down" ? "↓" : "↑"}${value}`;
    }
    return result.value;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/case-studies/${study.id}`} className="group block">
        <div className="border-t-2 border-black pt-8 pb-12">
          {/* Top row: Number + Industry */}
          <div className="flex items-start justify-between mb-6">
            <span className="text-8xl sm:text-9xl font-black text-black/5 leading-none select-none">
              {number}
            </span>
            <span className="text-xs uppercase tracking-widest text-gray-500 mt-2">
              {study.industry}
            </span>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 -mt-16 sm:-mt-20">
            {/* Left: Title and subtitle */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-[1.1] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {study.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {study.subtitle}
              </p>

              {/* Markets */}
              <div className="flex flex-wrap gap-2 mt-6">
                {study.markets.map((market) => (
                  <span
                    key={market}
                    className="px-3 py-1 border border-gray-300 text-gray-600 text-sm rounded-full"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: Key stats */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-blue-600 mb-1">
                    {getResultDisplay(primaryResult)}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {primaryResult.metric}
                  </div>
                </div>
                {secondaryResult && (
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-black mb-1">
                      {getResultDisplay(secondaryResult)}
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                      {secondaryResult.metric}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-3 flex items-end lg:justify-end">
              <div className="flex items-center gap-3 text-black group-hover:text-blue-600 transition-colors">
                <span className="font-semibold">Read case study</span>
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
