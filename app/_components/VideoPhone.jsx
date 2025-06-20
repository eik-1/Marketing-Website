import Image from "next/image";

const VideoPhone = ({ imageSrc, videoSrc, className }) => {
  return (
    <div
      className={`relative ${className} lg:ml-30 lg:-mt-10 lg:mb-0 mb-16 lg:w-1/2 w-48`}
    >
      <Image
        src={imageSrc}
        alt="Video frame"
        className="z-10 pointer-events-none"
      />
      <video
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-[74%] h-[92%] lg:rounded-[30px] rounded-[10px] overflow-hidden z-[-1]"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoPhone;
