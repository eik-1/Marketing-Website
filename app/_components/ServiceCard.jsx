"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceCard = ({
  id,
  title,
  description,
  backgroundImage,
  Icon,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer h-96 ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500" />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-500/70 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
        <div className="transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <Icon className={`w-8 h-8 text-blue-500`} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-100 mb-6 line-clamp-3">{description}</p>

          <Link href={`/services/${id.toLowerCase().replace(/\s+/g, "-")}`}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 h-12 min-w-12 min-h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
            >
              <ArrowUpRight className="w-5 h-5 text-gray-900" strokeWidth={2} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
