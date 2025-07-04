"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import ill1 from "@/public/whatwedo.png";

const VideoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative h-[768px] w-[1378px] bg-blue-200 rounded-2xl p-4 overflow-hidden">
        <Image src={ill1} alt="what we do" fill className="object-cover" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">What We Do</h1>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
