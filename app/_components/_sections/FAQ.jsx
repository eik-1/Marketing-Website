"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What makes Oddstone different?",
    a: "We work as an embedded partner. No packages, no pressure — just a plan aligned to your goals, budget, and stage of growth.",
  },
  {
    q: "How soon can we start seeing results?",
    a: "Quick wins typically appear in 2–4 weeks (tracking fixes, landing page tweaks, targeted ads). Sustainable growth compounds over 3–6 months.",
  },
  {
    q: "Do you work with fixed budgets?",
    a: "Yes. We design a roadmap to fit your budget and iterate based on what the data tells us.",
  },
  {
    q: "Which channels do you specialise in?",
    a: "SEO, PPC, social ads, and marketing automation. We’ll combine the right mix for your objectives.",
  },
  {
    q: "Can you audit my current setup first?",
    a: "Absolutely. We start with a light but thorough audit to find the fastest paths to impact.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: prefersReducedMotion
          ? { duration: 0.2 }
          : { staggerChildren: 0.08, delayChildren: 0.1 },
      },
    }),
    [prefersReducedMotion]
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: prefersReducedMotion ? 0.15 : 0.4,
          ease: "easeOut",
        },
      },
    }),
    [prefersReducedMotion]
  );

  return (
    <section
      id="faq"
      className="w-full bg-white py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 lg:mb-14 text-center"
        >
          <h2 className="text-3xl lg:text-6xl font-black text-gray-900">
            Questions, meet answers
          </h2>
          <p className="mt-3 text-md lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you want to know about working with Oddstone.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
        >
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <motion.li
                key={f.q}
                variants={item}
                className="group border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  className="w-full text-left px-5 py-4 lg:px-6 lg:py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-base lg:text-lg">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-2"
                    >
                      <div className="text-gray-700 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA removed per request */}
      </div>
    </section>
  );
}
