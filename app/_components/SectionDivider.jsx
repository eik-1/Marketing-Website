"use client";
import { motion } from "framer-motion";

const SectionDivider = ({
  topColor = "#ffffff",
  bottomColor = "#f9fafb",
  height = 120,
  variant = "wave",
  className = "",
}) => {
  const renderWave = () => (
    <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1200,85,1248,75,1272,69.3L1296,64L1296,120L1248,120C1200,120,1152,120,1056,120C960,120,864,120,768,120C672,120,576,120,480,120C384,120,288,120,192,120C96,120,48,120,24,120L0,120Z" />
  );

  const renderSlope = () => <path d="M0,0L1200,96L1200,120L0,120Z" />;

  const renderCurve = () => (
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,71.32C637.58,71.32,801.74,59,1200,5.63V0H0Z" />
  );

  const renderTilt = () => <path d="M0,96L1200,0L1200,120L0,120Z" />;

  const getPath = () => {
    switch (variant) {
      case "slope":
        return renderSlope();
      case "curve":
        return renderCurve();
      case "tilt":
        return renderTilt();
      case "wave":
      default:
        return renderWave();
    }
  };

  return (
    <div className={`relative ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={`gradient-${variant}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        <motion.path
          d={getPath().props.d}
          fill={`url(#gradient-${variant})`}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>

      {/* Background for the section above */}
      <div
        className="absolute top-0 w-full"
        style={{
          height: `${height}px`,
          background: topColor,
        }}
      />
    </div>
  );
};

export default SectionDivider;
