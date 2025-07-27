"use client";
import React, { useEffect, useRef } from "react";
import { Send } from "lucide-react";

const ScrollingText = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Get the width of one complete set of content
    const firstChild = scrollContainer.firstElementChild;
    if (!firstChild) return;

    const scrollWidth = firstChild.scrollWidth;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      // Speed: pixels per millisecond (adjust this value to change speed)
      const speed = 0.05; // Lower = slower, higher = faster
      const translateX = -(elapsed * speed) % scrollWidth;

      scrollContainer.style.transform = `translateX(${translateX}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrollItem = (
    <div className="flex ml-[2.5rem] justify-center items-center gap-10 shrink-0">
      <h2 className="text-5xl lg:text-8xl font-bold text-black whitespace-nowrap">
        Let&apos;s talk social
      </h2>
      <Send size={70} className="text-blue-500 hidden lg:block" />
      <Send size={40} className="text-blue-500 lg:hidden" />
    </div>
  );

  return (
    <div className="bg-white py-10 lg:py-20 w-full overflow-hidden">
      <div ref={scrollRef} className="flex will-change-transform">
        {/* First set of content */}
        <div className="flex shrink-0 items-center">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <div key={`first-${i}`}>{scrollItem}</div>
            ))}
        </div>
        {/* Second set of content (exact duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center">
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <div key={`second-${i}`}>{scrollItem}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
