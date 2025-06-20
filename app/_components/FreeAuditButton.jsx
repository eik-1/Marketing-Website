"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FreeAuditButton = () => {
  const [website, setWebsite] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/get-audit?website=${website}`);
  };

  return (
    <div className="inline-flex items-center bg-gray-50 rounded-full p-1.5 text-sm">
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Enter your website"
        className="bg-transparent border-none font-medium text-black placeholder-black focus:outline-none px-4 w-48 sm:w-64"
      />
      <motion.button
        className="flex cursor-pointer items-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleSubmit}
      >
        <span>Free Audit</span>
        <div className="bg-white rounded-full p-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="oklch(62.3% 0.214 259.815)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </motion.button>
    </div>
  );
};

export default FreeAuditButton;
