"use client";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            [ OUR SERVICES ]
          </div> */}
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Our Marketing
            <br />
            <span className="text-blue-500 relative inline-block">
              Services
              <svg
                className="absolute pointer-events-none lg:-left-1 -left-5 top-12 lg:-right-45 -right-5 lg:bottom-0"
                height="45"
                width="250"
                viewBox="0 0 666 42"
                fill="none"
              >
                <path
                  d="M220.475 4.24483C147.138 3.4005 73.5014 6.48612 2.51671 19.4427C1.25022 19.6729 0.724462 20.1258 0.62084 20.2294C0.0144608 20.8435 -0.0508949 21.4959 0.0258619 22.0332C0.071916 22.3594 0.382916 23.7372 2.08308 23.8792C3.25746 23.9751 11.5931 23.3035 14.8092 23.1308C29.9495 22.321 45.0593 21.1659 60.1612 19.8303C94.4024 16.8138 128.597 14.204 162.892 11.8284C182.147 10.4928 201.409 9.3875 220.66 8.48177C266.971 9.02291 313.167 11.1338 358.5 13.3136C340.481 14.4228 323.925 15.5473 310.197 16.2765C287.047 17.5046 263.939 18.9552 240.835 20.8665C228.965 21.8451 217.11 22.9083 205.262 24.1632C203.95 24.3052 200.96 24.4511 199.513 24.6238C198.899 24.6928 198.454 24.8042 198.254 24.8809C197.003 25.3645 196.846 26.3546 196.831 26.8535C196.823 27.1567 196.926 28.8108 199.037 29.1332C297.182 44.262 399.576 26.6617 498.074 41.3683C499.229 41.541 500.312 40.7427 500.484 39.5837C500.657 38.4285 499.859 37.3462 498.7 37.1735C405.932 23.3227 309.705 38.133 216.818 27.2604C224.935 26.4736 233.056 25.7636 241.184 25.092C264.246 23.1846 287.311 21.7377 310.423 20.5096C333.68 19.2777 365.12 16.8713 398.029 15.3554C426.272 16.9289 454.499 18.6943 482.746 20.191C494.662 20.8204 506.583 21.3424 518.495 21.9833C523.393 22.2443 535.992 23.3381 537.819 22.9313C539.239 22.6127 539.58 21.5957 539.665 21.0853C539.753 20.5326 539.699 19.8456 539.055 19.1894C538.855 18.9821 538.257 18.5523 537.028 18.1992C503.812 8.6852 449.422 8.83487 398.482 11.1337C387.525 10.5197 376.568 9.93633 365.607 9.41055C340.516 8.20163 315.147 6.98885 289.633 6.03323C361.535 4.25631 433.472 4.76676 505.427 6.05243C535.639 6.59357 617.074 9.85575 649.147 12.738C648.756 13.1409 648.525 13.7013 648.552 14.3115C648.606 15.4782 649.6 16.3839 650.77 16.3302C657.387 16.0232 661.213 15.6317 662.729 15.2287C663.673 14.9793 664.188 14.5801 664.425 14.3192C665.009 13.6898 665.116 13.0143 665.001 12.3733C664.928 11.9742 664.748 11.5367 664.333 11.1337C664.057 10.8574 663.382 10.4353 662.23 10.1474C649.623 7.01191 541.476 2.45636 505.504 1.8116C410.445 0.115274 315.424 -0.230098 220.475 4.24483ZM511.315 17.3625C492.74 14.8411 470.964 13.9545 448.248 14.0121C459.819 14.6837 471.394 15.34 482.972 15.9541C492.417 16.4568 501.866 16.8867 511.315 17.3625ZM132.865 9.72143C108.495 11.5175 84.1514 13.4595 59.7888 15.6087C56.9757 15.8543 54.1664 16.0961 51.3532 16.334C78.2949 13.0335 105.517 10.9342 132.865 9.72143Z"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  fill="#3b82f6"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the oars in the water and start rowing. Execution is the single
            biggest factor in achievement, the quicker you will get to the
            goals!
          </p>
        </motion.div>

        <div className="relative">
          {/* First Row - SEO & PPC */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* SEO Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-gray-700 mb-6">
                  Enhance your online visibility & drive organic traffic with
                  our advanced SEO techniques. We optimize your website to rank
                  higher.
                </p>
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-300 rounded-full opacity-10"></div>
            </motion.div>

            {/* PPC Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Pay-Per-Click (PPC) Advertising
                </h3>
                <p className="text-gray-700 mb-6">
                  Reach your audience instantly and drive qualified leads with
                  targeted PPC campaigns. Our experts craft compelling ad copy
                  and optimize.
                </p>
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
              <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-15"></div>
            </motion.div>
          </div>

          {/* Second Row - Social Media & Web Design */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 3H8C6.89 3 6 3.89 6 5v14c0 1.11.89 2 2 2h8c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-1 2v2.5h-1.5V5H15zm-2.5 0v2.5H11V5h1.5zM9.5 5V7.5H8V5h1.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Social Media Marketing
                </h3>
                <p className="text-gray-700 mb-6">
                  Build a strong brand presence and engage with your audience on
                  social media platforms. We create strategic social media
                  campaigns to boost brand.
                </p>
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 right-8 w-28 h-28 bg-yellow-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-300 rounded-full opacity-25"></div>
            </motion.div>

            {/* Web Design Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 3H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 13H4V5h16v11z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Website Design and Development
                </h3>
                <p className="text-gray-700 mb-6">
                  Make a lasting impression with a professionally designed and
                  user-friendly website. Our web design and development services
                  ensure website.
                </p>
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-300 rounded-full opacity-10"></div>
            </motion.div>
          </div>
        </div>

        {/* New Visual Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 mb-20"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
              [ OUR EXPERTISE ]
            </div>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Comprehensive SEO & Digital Marketing
              <br />
              <span className="text-purple-600">Solutions.</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to SEOC your trusted partner for comprehensive SEO and
              digital marketing solutions. With our proven expertise and
              innovative strategies the digital landscape.
            </p>
          </div>

          {/* Visual Grid with Images */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main large image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold mb-2">
                        Success Builds A Success
                      </h4>
                      <p className="text-blue-100">Brand with you</p>
                    </div>
                  </div>
                </div>

                {/* Floating smaller card */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Learn More</p>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 text-pink-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="absolute top-8 -right-4 w-6 h-6 text-yellow-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Feature Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Feature 1 */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Digital Marketing Strategies
                  </h4>
                  <p className="text-gray-600">
                    We specialize in creating custom, responsive websites
                    tailored to your business objectives.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Digital Content Management
                  </h4>
                  <p className="text-gray-600">
                    We specialize in creating custom, responsive websites
                    tailored to your business objectives.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Digital Data Synchronization
                  </h4>
                  <p className="text-gray-600">
                    We specialize in creating custom, responsive websites
                    tailored to your business objectives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
          >
            Get Started Now
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
