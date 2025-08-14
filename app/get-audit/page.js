"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Loader2,
  User,
  Mail,
  Globe,
  Target,
} from "lucide-react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

const initialForm = {
  name: "",
  email: "",
  website: "",
  goals: "",
  format: "PDF",
};

function GetAuditContent() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    const preset = searchParams?.get("website") || "";
    if (preset && !form.website) {
      setForm((prev) => ({ ...prev, website: preset }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const isValidEmail = (value) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  const validation = useMemo(() => {
    const issues = {};
    if (!form.name.trim()) issues.name = "Please enter your name";
    if (!form.email.trim() || !isValidEmail(form.email))
      issues.email = "Enter a valid email";
    return issues;
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasTriedSubmit(true);
    if (Object.keys(validation).length > 0) return;

    try {
      setIsSubmitting(true);
      setError("");
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          website: form.website,
          goals: form.goals,
          format: form.format,
          source: "get-audit",
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
      setForm(initialForm);
      setHasTriedSubmit(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded-full text-sm font-medium w-fit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              [ GET IN TOUCH ]
            </motion.div>
            <div className="mt-4">
              <h1 className="text-5xl lg:text-6xl font-black text-black leading-[0.95]">
                Hey there!
              </h1>
              <h2 className="mt-4 text-5xl lg:text-6xl font-black text-blue-600 leading-[0.95]">
                <span className="relative inline-block">
                  Let’s chat
                  <svg
                    className="hidden lg:block absolute pointer-events-none lg:-left-8 -top-3 lg:-right-8 lg:bottom-0"
                    viewBox="0 -15 480 130"
                    fill="none"
                  >
                    <motion.path
                      d=" M397.9620056152344,3.010999917984009 C447.5,9.472999572753906 479.9989929199219,31.972999572753906 466.5,57.702999114990234 C437.5780029296875,112.8290023803711 23.5,105.72699737548828 23.5,52.702999114990234 C23.5,-14.010000228881836 375.7650146484375,-3.5490000247955322 468.8349914550781,25.197999954223633"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: 1.2,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </span>
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                We’ll review your site, ads, or socials — and send back quick,
                actionable insights.
              </p>
              <p>No fluff. No pressure. No strings attached.</p>
            </div>
            <div className="mt-8 space-y-3">
              <p className="font-semibold text-black">Hate forms?</p>
              <p className="text-gray-700">
                Prefer email? Reach us at{" "}
                <a
                  className="text-blue-600 underline underline-offset-4"
                  href="mailto:contact@oddstone.co.uk"
                >
                  contact@oddstone.co.uk
                </a>
              </p>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-neutral-50 rounded-3xl p-6 sm:p-8 lg:p-10 lg:col-span-3 border border-blue-100 shadow-sm"
          >
            {!submitted && (
              <>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  Request Your Free Audit
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Fill out the quick form below and we’ll get started.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(
                          hasTriedSubmit && validation.name
                        )}
                        className="w-full rounded-full border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none pl-9 pr-4 py-3 text-gray-900"
                        placeholder="Jane Smith"
                      />
                    </div>
                    {hasTriedSubmit && validation.name && (
                      <p className="mt-1 text-xs text-red-600">
                        {validation.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(
                          hasTriedSubmit && validation.email
                        )}
                        className="w-full rounded-full border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none pl-9 pr-4 py-3 text-gray-900"
                        placeholder="you@company.co.uk"
                      />
                    </div>
                    {hasTriedSubmit && validation.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {validation.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Website / Instagram / Ad Account Link (if any)
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Globe className="w-4 h-4" />
                    </span>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={form.website}
                      onChange={handleChange}
                      className="w-full rounded-full border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none pl-9 pr-4 py-3 text-gray-900"
                      placeholder="https://www.yoursite.com"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="goals"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Your top 1–2 goals or challenges (short box)
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <Target className="w-4 h-4" />
                    </span>
                    <input
                      id="goals"
                      name="goals"
                      type="text"
                      value={form.goals}
                      onChange={handleChange}
                      className="w-full rounded-full border border-gray-200 bg-white focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none pl-9 pr-4 py-3 text-gray-900"
                      placeholder="e.g., More qualified leads; lower CPA"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Preferred format
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["PDF", "Video", "Quick Call"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, format: opt }))}
                        className={`cursor-pointer px-4 py-2 rounded-full border transition-colors ${
                          form.format === opt
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-gray-200 text-gray-800 hover:border-blue-300"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 transition-all duration-300 shadow-xl disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Requesting
                      </>
                    ) : (
                      <>Request Audit</>
                    )}
                  </button>
                  <div className="flex items-center gap-2 text-gray-600 text-xs">
                    <Clock className="w-4 h-4" />
                    <span>Delivered in 2 business days</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  By submitting, you agree to our{" "}
                  <a className="underline underline-offset-2" href="/privacy">
                    Privacy Policy
                  </a>
                  .
                </p>
              </>
            )}

            {submitted && (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-black">
                  Thanks! Your free audit is on the way.
                </h3>
                <p className="mt-2 text-gray-600 max-w-md">
                  We’ll send your audit within 2 business days. If it’s urgent,
                  email us at
                  <span className="font-semibold"> contact@oddstone.co.uk</span>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                    setHasTriedSubmit(false);
                  }}
                  className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 transition-all duration-300 shadow-xl"
                >
                  Submit another request
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default function GetAuditPage() {
  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />
        <Suspense
          fallback={
            <section className="relative w-full py-20 sm:py-24 lg:py-28 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-40" />
              </div>
            </section>
          }
        >
          <GetAuditContent />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
