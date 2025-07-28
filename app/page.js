"use client";
import { motion } from "framer-motion";

import Navbar from "@/app/_components/Navbar";
import Hero from "./_components/_sections/Hero";
import Footer from "./_components/Footer";
import VideoSection from "./_components/_sections/VideoSection";
import TrustedBy from "./_components/_sections/TrustedBy";
import WhatWeDo from "./_components/_sections/WhatWeDo";
import AboutUs from "./_components/_sections/AboutUs";
import ScrollingText from "./_components/_sections/ScrollingText";
import WhyChooseUs from "./_components/_sections/WhyChoose";
import Testimonials from "./_components/_sections/Testimonials";
import ContactUs from "./_components/_sections/ContactUs";

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
        <ContactUs />
      </div>

      <Footer />
    </>
  );
}
