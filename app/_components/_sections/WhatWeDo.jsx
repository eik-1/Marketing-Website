"use client";
import { motion } from "framer-motion";
import {
  SearchCheck,
  Sparkle,
  BadgeCheck,
  MonitorSmartphone,
} from "lucide-react";

import ServiceCard from "../ServiceCard";

const WhatWeDo = () => {
  const services = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your online visibility & drive organic traffic with our advanced SEO techniques. We optimize your website to rank higher.",
      backgroundImage: "/services/service-img2.png",
      Icon: SearchCheck,
      className: "lg:col-span-1",
      delay: 0,
    },
    {
      id: "ppc",
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Reach your audience instantly and drive qualified leads with targeted PPC campaigns. Our experts craft compelling ad copy and optimize.",
      backgroundImage: "/services/service-img4.jpg",
      Icon: Sparkle,
      className: "lg:col-span-2",
      delay: 0.2,
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description:
        "Build a strong brand presence and engage with your audience on social media platforms. We create strategic social media campaigns to boost brand.",
      backgroundImage: "/services/service-img1.png",
      Icon: BadgeCheck,
      className: "lg:col-span-2",
      delay: 0.4,
    },
    {
      id: "web-design",
      title: "Website Design and Development",
      description:
        "Make a lasting impression with a professionally designed and user-friendly website. Our web design and development services ensure website.",
      backgroundImage: "/services/service-img3.jpg",
      Icon: MonitorSmartphone,
      className: "lg:col-span-1",
      delay: 0.6,
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Our Marketing
            <br />
            <span className="text-blue-500 relative inline-block">
              Services
              <svg
                className="absolute pointer-events-none lg:-left-1 -left-5 lg:top-12 top-9 lg:-right-45 -right-5 lg:bottom-0"
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
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <ServiceCard {...services[0]} />
            <ServiceCard {...services[1]} />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ServiceCard {...services[2]} />
            <ServiceCard {...services[3]} />
          </div>
        </div>

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
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-xl cursor-pointer inline-flex items-center gap-3"
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
