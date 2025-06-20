const StarSvg = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="url(#star-gradient)"
      className={className}
    >
      <defs>
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#60a5fa" }} />
          <stop offset="100%" style={{ stopColor: "#2563eb" }} />
        </linearGradient>
      </defs>
      <path d="M12,0L14.5,9.5L24,12L14.5,14.5L12,24L9.5,14.5L0,12L9.5,9.5Z" />
    </svg>
  );
};

export default StarSvg;
