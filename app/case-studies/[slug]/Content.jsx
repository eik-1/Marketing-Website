"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedCaseStudies } from "../_data";

export default function CaseStudyContent({ study }) {
  const relatedStudies = getRelatedCaseStudies(study.id);

  const formatResult = (result) => {
    if (result.before && result.after) return `${result.before} → ${result.after}`;
    if (result.change) {
      const value = result.change.replace("~", "");
      return result.direction === "down" ? `↓${value}` : `↑${value}`;
    }
    return result.value;
  };

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumbs + industry */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 mb-10">
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.15em] text-gray-400">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-black transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-gray-300">
                    /
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="hover:text-black transition-colors"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-gray-300">
                    /
                  </li>
                  <li aria-current="page" className="text-black">
                    {study.title}
                  </li>
                </ol>
              </nav>
              <span className="text-xs uppercase tracking-[0.15em] text-blue-600 font-semibold">
                {study.industry}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.05] tracking-tight max-w-4xl">
              {study.subtitle}
            </h1>

            {/* Top CTA */}
            <div className="mt-10">
              <Link
                href="/get-audit"
                className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                {study.cta.button}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Results Strip */}
      <div className="border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {study.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`py-8 sm:py-10 ${i % 2 === 1 ? "border-l border-gray-200" : ""} ${i > 0 && i % 2 === 0 ? "md:border-l md:border-gray-200" : ""} ${i >= 2 ? "border-t border-gray-200 md:border-t-0" : ""}`}
              >
                <div className="px-4 sm:px-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-black">
                    {formatResult(result)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {result.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 py-20 sm:py-28 lg:py-36">

          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Client</div>
                <div className="text-black font-semibold">{study.title}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</div>
                <div className="text-black">{study.engagement}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Markets</div>
                <div className="text-black">{study.markets.join(", ")}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Platforms</div>
                <div className="text-black text-sm">{study.platforms.join(", ")}</div>
              </div>

              <div className="pt-4">
                <Link
                  href="/get-audit"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Work with us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="max-w-2xl">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 sm:mb-20"
              >
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  {study.overview}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 sm:mb-20"
              >
                <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                  The Challenge
                </h2>
                <p className="text-lg sm:text-xl text-black leading-relaxed">
                  {study.challenge}
                </p>
              </motion.div>

              {/* Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-8">
                  The Approach
                </h2>
                <div className="space-y-10">
                  {study.strategy.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-5"
                    >
                      <span
                        aria-hidden="true"
                        className="text-sm font-black text-gray-300 pt-1 select-none"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div className="bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug"
          >
            &ldquo;{study.keyTakeaway}&rdquo;
          </motion.blockquote>
        </div>
      </div>

      {/* CTA */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-2">
                {study.cta.text}
              </h2>
              <p className="text-gray-500">
                Let&apos;s discuss your growth goals.
              </p>
            </div>
            <Link
              href="/get-audit"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              {study.cta.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedStudies.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest mb-10">
            More Work
          </h2>
          <div className="space-y-0">
            {relatedStudies.map((related) => (
              <Link
                key={related.id}
                href={`/case-studies/${related.id}`}
                className="group block border-t border-gray-200 py-8 last:border-b"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 mt-1">{related.industry}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">View</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
