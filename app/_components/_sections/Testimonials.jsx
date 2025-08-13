"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import StackingCards, { StackingCardItem } from "../StackingCard";

const Testimonials = () => {
  const [container, setContainer] = useState(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Oddstone felt like having a marketing team embedded in our business. They launched Google Shopping campaigns for our eco-soap and candle range, and our online sales have increased by 42% in under four months. Their reporting is clear, and they go above and beyond.",
      name: "Simon Mitchell",
      company: "Green Laurels",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bgColor: "bg-white",
    },
    {
      id: 2,
      quote:
        "Oddstone rebuilt our Google My Business setup, optimized our website for local search, and ran targeted PPC. We're ranking #1 for 'gym in Thames Ditton' and membership sign-ups are up by 30%. Exceptional results from a sharp, focused team.",
      name: "Emma Carter",
      company: "Colets Health & Fitness",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bgColor: "bg-blue-200",
    },
    {
      id: 3,
      quote:
        "As a small fashion boutique, we needed a bigger online presence. Oddstone crafted an SEO strategy with blog content and ran Instagram ads that delivered measurable footfall. We've seen a 25% increase in both online visits and in-store visits.",
      name: "Helen Locke",
      company: "Paradise Boutique",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bgColor: "bg-white",
    },
    {
      id: 4,
      quote:
        "Oddstone set up Google Ads and layered in email automation for booking reminders and follow-ups. Our appointment rates have gone up, and no-shows have dropped by 20%. Their tech-savvy yet personal approach really works.",
      name: "Thomas Grant",
      company: "Balance Physio & Wellness",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bgColor: "bg-blue-200",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="w-full py-12 lg:py-24 mt-5 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-start justify-center gap-5 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center gap-0 mb-10 lg:mb-0"
            variants={titleVariants}
          >
            <h1 className="text-[2rem] md:text-5xl lg:text-6xl font-black text-black leading-tight">
              Read What Our Clients
            </h1>
            <h1 className="text-[2rem] md:text-5xl lg:text-6xl font-black text-black leading-tight">
              Say About Our Work
            </h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
            {/* Left Side */}
            <div className="bg-blue-500 rounded-3xl mt-0 lg:mt-14 p-6 lg:p-8 xl:p-10 text-white max-w-full lg:max-w-xs w-full h-[18rem] lg:h-[20rem] shadow-xl">
              {/* Profile Images Row */}
              <div className="flex items-center mb-8 lg:mb-14">
                <div className="flex -space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                      alt="Client 1"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">
                      SM
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                      alt="Client 2"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">
                      EC
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12 border-2 border-white">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                      alt="Client 3"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-blue-600 text-white font-semibold">
                      HL
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-4">
                  <div className="text-white font-bold text-lg">100+</div>
                  <div className="text-blue-100 text-sm">Client Reviews</div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <div className="text-6xl font-black text-white mb-2">4.5</div>
              </div>

              {/* Description */}
              <p className="text-blue-50 text-base leading-relaxed">
                Customers are Satisfied with our Marketing Services.
              </p>
            </div>

            {/* Right Side */}
            <div
              className="h-[25rem] lg:h-[30rem] rounded-3xl overflow-auto relative scrollbar-hide p-3 lg:p-4"
              style={{
                scrollbarWidth: "none" /* Firefox */,
                msOverflowStyle: "none" /* Internet Explorer 10+ */,
              }}
              ref={(node) => setContainer(node)}
            >
              <StackingCards
                totalCards={testimonials.length}
                scrollOptions={{ container: { current: container } }}
                scaleMultiplier={0.05}
              >
                {testimonials.map((testimonial, index) => (
                  <StackingCardItem
                    key={testimonial.id}
                    index={index}
                    className="h-[21rem] lg:h-[26rem] w-full"
                  >
                    <div
                      className={`${testimonial.bgColor} w-full h-[90%] flex flex-col justify-between p-6 lg:p-8 rounded-2xl text-black relative overflow-hidden mt-4 lg:mt-4 border-2 border-blue-500`}
                    >
                      {/* Background decoration */}
                      <div className="absolute top-4 right-4 opacity-20">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 24 24"
                          fill="#2b7fff"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>

                      {/* Stars */}
                      <div className="flex mb-3 lg:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 lg:w-5 h-4 lg:h-5 text-blue-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-sm lg:text-lg leading-relaxed mb-2 lg:mb-4 flex-1 font-medium">
                        <i>{testimonial.quote}</i>
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <Avatar className="w-12 lg:w-14 h-12 lg:h-14 mr-3 lg:mr-4 border-2 border-white/20">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-white/20 text-white font-semibold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-base lg:text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-zinc-700 font-medium text-xs lg:text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StackingCardItem>
                ))}
              </StackingCards>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
