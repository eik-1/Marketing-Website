const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-blue-500">
      <div className="relative overflow-hidden w-full text-white px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Copyright & Links */}
          <div className="w-full md:w-auto order-3 md:order-1">
            <div className="text-xs sm:text-sm opacity-80">
              <p>&copy; 2024 Oddstone. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                <span className="hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:underline cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:max-w-sm md:w-auto order-1 md:order-2">
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Office
            </h3>
            <div className="space-y-2 opacity-90 text-sm sm:text-base">
              <p>contact@oddstone.co.uk</p>
              <p>+1 (555) 123-4567</p>
              <p className="max-w-[14rem] sm:max-w-[16rem]">
                123 Marketing Street
                <br />
                Digital District
                <br />
                Innovation City, IC 12345
              </p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="w-full sm:max-w-md md:w-auto order-2 md:order-3">
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Stay Connected
            </h3>
            <p className="opacity-90 mb-3 sm:mb-4 text-sm sm:text-base">
              Get marketing insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-3 py-2 bg-white text-gray-900 rounded-md sm:rounded-l-md sm:rounded-r-none text-sm"
              />
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-100 transition-colors">
                →
              </button>
            </div>
            <div className="flex flex-wrap gap-3 opacity-90 text-sm">
              <span className="hover:underline cursor-pointer">LinkedIn</span>
              <span className="hover:underline cursor-pointer">Instagram</span>
              <span className="hover:underline cursor-pointer">Facebook</span>
            </div>
          </div>
        </div>

        {/* Background Wordmark */}
        <h2 className="hidden md:block absolute bottom-0 left-0 -z-10 translate-y-1/3 text-white/20 text-[120px] lg:text-[192px] font-black select-none pointer-events-none">
          Oddstone
        </h2>
      </div>
    </div>
  );
};

export default Footer;
