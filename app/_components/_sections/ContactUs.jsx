"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Loader2,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { contact } from "@/lib/contact";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUs = () => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  const isValidEmail = (value) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  const validation = useMemo(() => {
    const issues = {};
    if (!form.name.trim()) issues.name = "Please enter your name";
    if (!form.email.trim() || !isValidEmail(form.email))
      issues.email = "Enter a valid email";
    if (!form.message.trim()) issues.message = "Tell us a bit about your goals";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "landing-contact" }),
      });
      if (!res.ok) throw new Error("Failed to send message");
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
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-blue-50 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            Let's talk goals, budget, and everything in between.
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We reply within 24 hours. No hard sell-just friendly, practical
            advice from a UK team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-blue-500 text-white rounded-3xl p-6 sm:p-8 lg:p-10 lg:col-span-2 border border-blue-100"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Speak to a specialist
                </h3>
                <p className="text-white/80 mt-2">
                  Share your goals and budget—we'll recommend the right mix
                  without the fluff.
                </p>
              </div>

              <div className="space-y-4 text-white">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-400 transition-colors "
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600">
                    <Mail />
                  </span>
                  <div>
                    <div className="font-semibold">{contact.email}</div>
                    <div className="text-sm text-white/80">
                      Email us anytime
                    </div>
                  </div>
                </a>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-400 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600">
                    <WhatsAppIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <div className="font-semibold">{contact.whatsapp}</div>
                    <div className="text-sm text-white/80">
                      Chat with us on WhatsApp, {contact.hours}
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600">
                    <MapPin />
                  </span>
                  <div>
                    <div className="font-semibold">{contact.location}</div>
                    <div className="text-sm text-white/80">
                      {contact.locationDetail}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-xl p-3">
                <CheckCircle2 className="w-5 h-5" />
                <p className="text-sm font-medium text-green-700">
                  Your details are kept private. No spam, ever.
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 lg:col-span-3 border border-blue-100"
          >
            {!submitted && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(hasTriedSubmit && validation.name)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none px-4 py-3 text-gray-900"
                      placeholder="Jane Smith"
                    />
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
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(hasTriedSubmit && validation.email)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none px-4 py-3 text-gray-900"
                      placeholder="you@company.co.uk"
                    />
                    {hasTriedSubmit && validation.email && (
                      <p className="mt-1 text-xs text-red-600">
                        {validation.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none px-4 py-3 text-gray-900"
                      placeholder="+44 7xxx xxxxxx"
                    />
                  </div>
                  <div className="hidden sm:block" />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(hasTriedSubmit && validation.message)}
                    placeholder="Tell us about your business, goals, and budget range."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none px-4 py-3 text-gray-900 resize-y"
                  />
                  {hasTriedSubmit && validation.message && (
                    <p className="mt-1 text-xs text-red-600">
                      {validation.message}
                    </p>
                  )}
                </div>

                {error && (
                  <div className="mt-4 flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                    <AlertTriangle className="w-4 h-4" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 transition-all duration-300 shadow-xl disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending
                      </>
                    ) : (
                      <>Send Message</>
                    )}
                  </button>

                  <p className="text-xs text-gray-500">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </div>
              </>
            )}

            {submitted && (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-black">
                  Thanks for reaching out!
                </h3>
                <p className="mt-2 text-gray-600 max-w-md">
                  We’ll be in touch within 24 hours. If it’s urgent, email us at{" "}
                  <span className="font-semibold">{contact.email}</span>.
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
                  Send another message
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
