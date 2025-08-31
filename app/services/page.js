"use client";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services as servicesData } from "./_data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FAQ from "@/app/_components/_sections/FAQ";

// Mirror landing page card content
const serviceImages = [
  "/services/service-img1.png",
  "/services/service-img2.png",
  "/services/service-img3.jpg",
  "/services/service-img4.jpg",
];

const services = servicesData.map((s, index) => ({
  id: s.id,
  title: s.title,
  kicker: s.heroKicker,
  description: s.shortDescription,
  highlights: s.highlights.slice(0, 3),
  image: serviceImages[index % serviceImages.length],
}));

export default function ServicesPage() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="w-full bg-white pt-28 sm:pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-600 rounded-full text-sm font-medium">
                [ SERVICES ]
              </div>
              <h1 className="mt-4 text-5xl lg:text-6xl font-black text-black leading-[0.95]">
                Services tailored to your goals and budget
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                From SEO to paid media and automation, we design a plan around
                your stage, resources, and outcomes — not a generic package.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid using landing-page card design */}
        <section className="w-full bg-white py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: prefersReducedMotion ? 0.2 : 0.6,
                    delay: prefersReducedMotion ? 0 : index * 0.05,
                  }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-lg h-full flex flex-col">
                    <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden rounded-t-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-600/0"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <div className="relative p-6 sm:p-8 flex flex-col grow">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            {service.kicker}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="mb-8">
                        <div className="grid gap-3">
                          {service.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-gray-700">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/services/${service.id}`}
                        className="relative w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-sm hover:shadow-md mt-auto"
                      >
                        <span className="text-sm sm:text-base">Learn More</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-16"
            >
              <a
                href="/get-audit"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-xl cursor-pointer"
              >
                Let&apos;s Talk
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
        {/* FAQ at page end */}
        <FAQ />
      </div>

      <Footer />
    </>
  );
}
