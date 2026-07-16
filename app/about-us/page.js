"use client";

import dynamic from "next/dynamic";

import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const AboutHero = dynamic(() => import("./_components/AboutHero"), {
  loading: () => null,
});
const OurStory = dynamic(() => import("./_components/OurStory"), {
  loading: () => null,
});

export default function AboutUsPage() {
  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />
        <AboutHero />
        <OurStory />
      </div>
      <Footer />
    </>
  );
}
