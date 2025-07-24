import React from "react";
import { Send } from "lucide-react";

const MarqueeContent = () => (
  <div className="flex shrink-0 items-center" aria-hidden="true">
    {Array(6)
      .fill(0)
      .map((_, i) => (
        <div key={i} className="flex gap-4 ml-[1rem] shrink-0 items-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-black px-6 sm:px-8 whitespace-nowrap">
            Let&apos;s talk social
          </h2>
          <Send size={50} className="text-blue-500" />
        </div>
      ))}
  </div>
);

const ScrollingText = () => {
  return (
    <div className="bg-white py-10 lg:py-20 w-full overflow-hidden">
      <div className="flex animate-scroll">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
};

export default ScrollingText;
