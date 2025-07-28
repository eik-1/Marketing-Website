const Footer = () => {
  return (
    <div className="sticky z-[-10] bottom-0 left-0 w-full h-80 bg-blue-500 flex justify-center items-center">
      <div className="relative overflow-hidden w-full h-full flex justify-between px-12 items-start py-12 text-white">
        {/* Logo Section */}
        <div className="flex flex-col justify-between h-full">
          <div className="text-xs opacity-60">
            <p>&copy; 2024 Oddstone. All rights reserved.</p>
            <div className="flex space-x-4 mt-2">
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
        <div className="text-sm">
          <h3 className="font-semibold mb-4 text-lg">Office</h3>
          <div className="space-y-2 opacity-80">
            <p>hello@oddstone.marketing</p>
            <p>+1 (555) 123-4567</p>
            <p className="max-w-48">
              123 Marketing Street
              <br />
              Digital District
              <br />
              Innovation City, IC 12345
            </p>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="text-sm max-w-xs">
          <h3 className="font-semibold mb-4 text-lg">Stay Connected</h3>
          <p className="opacity-80 mb-4">
            Get marketing insights and updates delivered to your inbox.
          </p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-3 py-2 bg-white text-gray-900 rounded-l-md text-sm"
            />
            <button className="bg-white text-blue-500 px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors">
              →
            </button>
          </div>
          <div className="flex space-x-3 opacity-80">
            <span className="hover:underline cursor-pointer">LinkedIn</span>
            <span className="hover:underline cursor-pointer">Instagram</span>
            <span className="hover:underline cursor-pointer">Facebook</span>
          </div>
        </div>

        <h2 className="absolute bottom-0 left-0 z-[-10] translate-y-1/3 sm:text-[192px] text-[80px] text-white">
          Oddstone
        </h2>
      </div>
    </div>
  );
};

export default Footer;
