"use client";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import ServiceCard from "@/app/_components/ServiceCard";
import { motion } from "framer-motion";
import { services as serviceList } from "./_data";
import {
  SearchCheck,
  Sparkle,
  BadgeCheck,
  MonitorSmartphone,
} from "lucide-react";

const iconMap = { SearchCheck, Sparkle, BadgeCheck, MonitorSmartphone };

const services = serviceList.map((s, idx) => ({
  id: s.id,
  title: s.title,
  description: s.shortDescription,
  backgroundImage: s.image,
  Icon: iconMap[s.icon] || SearchCheck,
  className: idx % 3 === 0 ? "lg:col-span-1" : "lg:col-span-2",
  delay: 0.15 * idx,
}));

export default function ServicesPage() {
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
                Our Services
              </div>
              <h1 className="mt-4 text-5xl lg:text-6xl font-black text-black leading-[0.95]">
                Marketing that feels like a partnership
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We build the right mix for your goals and budget. No fluff. No
                pressure. Just outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full bg-white py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <ServiceCard {...services[0]} />
              <ServiceCard {...services[1]} />
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <ServiceCard {...services[2]} />
              <ServiceCard {...services[3]} />
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
      </div>

      <Footer />
    </>
  );
}
