const Footer = () => {
  return (
    <div className="sticky z-[-10] bottom-0 left-0 w-full h-80 bg-blue-500 flex justify-center items-center">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
        <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
          <ul>
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Services</li>
          </ul>
          <ul>
            <li className="hover:underline cursor-pointer">Facebook</li>
            <li className="hover:underline cursor-pointer">Instagram</li>
            <li className="hover:underline cursor-pointer">LinkedIn</li>
            <li className="hover:underline cursor-pointer">Email</li>
          </ul>
        </div>
        <h2 className="absolute bottom-0 left-0 z-[-10]  translate-y-1/3 sm:text-[192px]  text-[80px] text-white font-calendas">
          Oddstone
        </h2>
      </div>
    </div>
  );
};

export default Footer;
