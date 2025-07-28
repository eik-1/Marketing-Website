import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "../button";
import AnimatedPathText from "../TextAlongPath";

export default function ContactUs() {
  const rectPath =
    "M 20,20 L 180,20 A 20,20 0 0,1 200,40 L 200,160 A 20,20 0 0,1 180,180 L 20,180 A 20,20 0 0,1 0,160 L 0,40 A 20,20 0 0,1 20,20";
  const [buttonState, setButtonState] = useState("idle");
  const [email, setEmail] = useState("");

  const buttonCopy = {
    idle: "Subscribe",
    loading: (
      <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
    ),
    success: "Done ✓",
  };

  const handleSubmit = useCallback(() => {
    if (buttonState === "success") return;

    setButtonState("loading");

    setTimeout(() => {
      setButtonState("success");
    }, 1750);

    setTimeout(() => {
      setButtonState("idle");
      setEmail("");
    }, 3500);
  }, [buttonState]);

  return (
    <div className="w-full h-dvh py-12 lg:py-24 flex justify-center items-center text-blue-500 relative">
      <AnimatedPathText
        path={rectPath}
        svgClassName="absolute top-1/2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 lg:py-8"
        viewBox="-20 10 240 180"
        text="HAVE QUESTIONS? ✉ CONTACT US ✉ HAVE QUESTIONS? ✉ CONTACT US ✉ HAVE QUESTIONS? ✉ CONTACT US ✉ HAVE QUESTIONS? ✉ CONTACT US ✉ CONTACT US ✉ "
        textClassName="text-[10.6px] lowercase font-azeret-mono text-blue-700"
        duration={20}
        preserveAspectRatio="none"
        textAnchor="start"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-8 py-6">
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              Let's Talk
            </h3>
            <p className="text-gray-600">
              Tell us about your goals and we'll get back to you within 24
              hours.
            </p>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg bg-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg bg-white"
          />

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg bg-white"
          />

          <textarea
            placeholder="Tell us about your business, goals, and budget range..."
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg bg-white resize-none"
          />

          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={buttonState === "loading"}
            className="w-full px-4 py-3 h-12 bg-blue-500 text-white hover:bg-blue-600 transition-colors font-medium rounded-lg"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                key={buttonState}
              >
                {buttonState === "idle"
                  ? "Send Message"
                  : buttonState === "success"
                  ? "Message Sent ✓"
                  : buttonCopy[buttonState]}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </div>
  );
}
