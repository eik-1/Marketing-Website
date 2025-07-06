"use client";
import { motion } from "framer-motion";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const VideoSection = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Error playing video:", error);
        setHasError(true);
      }
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = (e) => {
    console.error("Video error:", e);
    setHasError(true);
    setIsLoaded(true);
  };

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };
    playVideo();
  }, []);

  return (
    <section className="w-full">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative w-full aspect-video overflow-hidden bg-blue-100 shadow-xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onLoadedData={handleVideoLoad}
              // onLoadedMetadata={handleVideoLoad}
              onCanPlay={handleVideoLoad}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onError={handleVideoError}
              playsInline
              preload="metadata"
              poster="/whatwedo.png"
              crossOrigin="anonymous"
              autoPlay
              muted
              loop
            >
              <source src={videoSrc} type="video/mp4" />
              <source src={videoSrc} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {!isLoaded && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center text-gray-600">
                  <svg
                    className="w-12 h-12 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <p>Unable to load video</p>
                </div>
              </div>
            )}

            {isLoaded && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="text-center z-10 pointer-events-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePlayPause}
                    className="group/btn relative w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:bg-opacity-60 border-2 border-white border-opacity-30 cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {/* Play Icon */}
                    {!isPlaying && (
                      <PlayIcon strokeWidth={2} fill="black" size={34} />
                    )}

                    {isPlaying && (
                      <PauseIcon strokeWidth={2} fill="black" size={34} />
                    )}

                    <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover/btn:opacity-5 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
