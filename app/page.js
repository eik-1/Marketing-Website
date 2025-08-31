"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Navbar from "@/app/_components/Navbar";
import Hero from "./_components/_sections/Hero";
import Footer from "./_components/Footer";
import TrustedBy from "./_components/_sections/TrustedBy";
import WhatWeDo from "./_components/_sections/WhatWeDo";
import AboutUs from "./_components/_sections/AboutUs";

// Lazy-load below-the-fold sections to reduce initial JS
const VideoSection = dynamic(
  () => import("./_components/_sections/VideoSection"),
  {
    ssr: false,
    loading: () => null,
  }
);
const ScrollingText = dynamic(
  () => import("./_components/_sections/ScrollingText"),
  {
    loading: () => null,
  }
);
const WhyChooseUs = dynamic(() => import("./_components/_sections/WhyChoose"), {
  loading: () => null,
});
const Testimonials = dynamic(
  () => import("./_components/_sections/Testimonials"),
  {
    loading: () => null,
  }
);
const ContactUs = dynamic(() => import("./_components/_sections/ContactUs"), {
  loading: () => null,
});
const FAQ = dynamic(() => import("./_components/_sections/FAQ"), {
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />
        <Hero />
        <TrustedBy />
        <VideoSection videoSrc="https://res.cloudinary.com/doac8yyie/video/upload/v1751783569/3254066-uhd_3840_2160_25fps_ctpkhz.mp4" />
        <AboutUs />
        <WhatWeDo />
        <ScrollingText />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}
