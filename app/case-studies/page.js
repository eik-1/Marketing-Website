"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import CaseStudyCard from "./_components/CaseStudyCard";
import Kicker from "@/app/_components/Kicker";
import { caseStudies } from "./_data";

export default function CaseStudiesPage() {
  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />

        {/* Hero Section - Editorial style */}
        <section className="w-full bg-white pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
              {/* Left: Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 block"
                >
                  <Kicker>Case Studies</Kicker>
                </motion.span>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-[0.9] tracking-tight">
                  Work that
                  <br />
                  <span className="text-blue-600">speaks.</span>
                </h1>
              </motion.div>

              {/* Right: Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:pb-4"
              >
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
                  Real strategies. Measurable outcomes. See how we&apos;ve helped
                  brands scale revenue, reduce costs, and build sustainable growth.
                </p>

                <div className="border-t border-gray-200 pt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <span className="font-semibold text-black">
                    Luxury fashion
                  </span>
                  <span className="text-gray-300">/</span>
                  <span className="font-semibold text-black">Beauty</span>
                  <span className="text-gray-300">/</span>
                  <span className="font-semibold text-black">Real estate</span>
                  <span className="basis-full sm:basis-auto sm:ml-auto text-sm text-gray-500">
                    India · UAE · UK · Africa
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies List */}
        <section className="w-full pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}

            {/* Final border */}
            <div className="border-t-2 border-black" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <span className="mb-4 block">
                <Kicker tone="dark">Your turn</Kicker>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Ready to become our
                <br />
                next case study?
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                No fluff. No jargon. Just honest strategy and measurable results.
              </p>
              <Link
                href="/get-audit"
                className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                Get your free audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
