"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

const MagicCard = ({
  children,
  className,
  gradientSize = 220,
  gradientColor = "#3b82f6", // blue-500
  gradientOpacity = 0.25,
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = (e) => {
    const target = cardRef.current;
    if (!target) return;
    const { left, top } = target.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("group relative overflow-hidden rounded-3xl", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor}, transparent 60%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default MagicCard;
