import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Kicker from "../Kicker";

const AboutUs = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 mb-10"
        >
          <div className="bg-slate-900 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 items-center lg:min-h-[600px]">
              {/* Left Side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 lg:p-16 relative"
              >
                <Kicker tone="dark" className="mb-8">
                  About Us
                </Kicker>

                <h3 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Your Experience Is
                  <br />
                  Everything To Us
                </h3>

                <div className="flex items-start gap-6 mb-10">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We believe in building lasting partnerships through
                    transparent communication and measurable results.
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/get-audit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 mb-10 cursor-pointer"
                >
                  Let&apos;s Get Started
                  <ArrowRight />
                </Link>

                <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                  Global expertise across luxury, e-commerce, and high-intent lead generation.
                </p>
              </motion.div>

              {/* Right Side - Main Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-full lg:min-h-[600px] min-h-[400px]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/about_us2.jpeg"
                    alt="The Oddstone team together on a call with a remote teammate"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
