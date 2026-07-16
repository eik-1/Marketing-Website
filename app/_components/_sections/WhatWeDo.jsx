"use client";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services as servicesData } from "@/app/services/_data";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const WhatWeDo = () => {
  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const items = useMemo(
    () =>
      servicesData.map((s) => ({
        id: s.id,
        title: s.title,
        kicker: s.heroKicker,
        description: s.shortDescription,
        highlights: s.highlights.slice(0, 3),
        image: s.image,
      })),
    []
  );

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setPageSize(mq.matches ? 2 : 1);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const totalPages = Math.ceil(items.length / pageSize) || 1;
  const visible = items.slice(page * pageSize, page * pageSize + pageSize);

  useEffect(() => {
    if (page > totalPages - 1) setPage(0);
  }, [pageSize, totalPages, page]);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const carouselVariants = {
    enter: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98, position: "absolute", width: "100%" },
  };

  return (
    <section
      className="w-full bg-white py-10 lg:py-20 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            id="services-heading"
            className="text-3xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Our Marketing
            <br />
            <span className="text-blue-500 lg:mt-2 relative inline-block">
              Services
              <svg
                className="absolute pointer-events-none lg:-left-1 -left-5 lg:top-12 top-5 lg:-right-45 -right-5 lg:bottom-0 lg:w-full w-40"
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
          <p className="text-md lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Get the oars in the water and start rowing. Execution is the single
            biggest factor in achievement, the quicker you will get to the
            goals!
          </p>
        </motion.div>

        {/* Removed top-right View All Services button as requested */}

        {/* Modern Service Cards */}
        <div
          className="relative"
          role="region"
          aria-labelledby="services-carousel-heading"
        >
          <h3 id="services-carousel-heading" className="sr-only">
            Service offerings carousel
          </h3>
          <div className="relative">
            <AnimatePresence initial={false}>
              <motion.div
                key={page}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "tween",
                  duration: prefersReducedMotion ? 0.15 : 0.28,
                  ease: "easeOut",
                }}
                className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5 sm:gap-6 lg:gap-8"
                role="tabpanel"
                aria-labelledby="services-carousel-heading"
                aria-live="polite"
              >
                {visible.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0.2 : 0.6,
                      delay: prefersReducedMotion ? 0 : index * 0.1,
                    }}
                    className="group relative h-full"
                  >
                    {/* Modern Card Design (cleaner, lighter) */}
                    <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-lg h-full flex flex-col">
                      {/* Image Header with Gradient Overlay */}
                      <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden rounded-t-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-600/0"></div>

                        {/* Floating icon removed as requested */}

                        {/* Subtle divider at bottom of image */}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent"></div>
                      </div>

                      {/* Card Content */}
                      <div className="relative p-6 sm:p-8 flex flex-col grow">
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                              {service.kicker}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Features List */}
                        <div className="mb-8">
                          <div className="grid gap-3">
                            {service.highlights.map((highlight, idx) => (
                              <div
                                key={highlight}
                                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group/item"
                              >
                                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-700 transition-colors duration-300">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                          href={`/services/${service.id}`}
                          className="relative w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-sm hover:shadow-md mt-auto"
                        >
                          <span className="text-sm sm:text-base">
                            Learn More
                          </span>
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation */}
          <div
            className="mt-8 flex items-center justify-center gap-4"
            role="navigation"
            aria-label="Services carousel navigation"
          >
            <button
              aria-label={`Previous page of services (currently showing page ${
                page + 1
              } of ${totalPages})`}
              onClick={goPrev}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              disabled={totalPages <= 1}
              aria-describedby="carousel-instructions"
            >
              <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            <span className="sr-only" id="carousel-instructions">
              Use the navigation buttons to browse through our {items.length}{" "}
              marketing services. Currently showing {visible.length} service
              {visible.length === 1 ? "" : "s"} on page {page + 1} of{" "}
              {totalPages}.
            </span>

            {/* Page Indicators */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === page
                        ? "bg-blue-500 shadow-lg shadow-blue-500/50 scale-125"
                        : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              aria-label={`Next page of services (currently showing page ${
                page + 1
              } of ${totalPages})`}
              onClick={goNext}
              className="group inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              disabled={totalPages <= 1}
              aria-describedby="carousel-instructions"
            >
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
