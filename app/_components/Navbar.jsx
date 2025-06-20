"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/public/oddstone-logo.svg";
import GetInTouchButton from "./GetInTouchButton";
import HamburgerButton from "./Hamburger";

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "How We Work", href: "/how-we-work" },
  { title: "Testimonials", href: "/testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 z-50"
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "100%",
          height: isScrolled ? "4rem" : "5rem",
          marginTop: isScrolled ? "0.75rem" : "0",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: isScrolled ? "12px" : "0px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "white",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.7,
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-full">
          <motion.div className="flex items-center justify-between h-full">
            <motion.div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Oddstone"
                  width={120}
                  height={120}
                  className=""
                />
              </Link>
            </motion.div>

            <motion.div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-600 transition-colors duration-300 font-medium text-xl text-black mb-0.5 inline-block relative pb-0.5 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ease-in-out hover:after:scale-x-100"
                >
                  {link.title}
                </Link>
              ))}
              <GetInTouchButton
                href="/contact"
                buttonStyle="relative inline-block px-4 py-2 border border-black cursor-pointer rounded-full text-black overflow-hidden font-medium transition-colors duration-300 hover:text-white"
              />
            </motion.div>

            <div className="md:hidden flex items-center">
              <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden"
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col items-center space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-blue-600 transition-colors duration-300 font-semibold text-2xl text-white mb-0.5 inline-block relative pb-0.5 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ease-in-out hover:after:scale-x-100"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={linkVariants} className="pt-3">
                <GetInTouchButton
                  href="/contact"
                  buttonStyle="relative inline-block px-6 py-3 border border-white cursor-pointer rounded-full text-white overflow-hidden font-medium transition-colors duration-300 hover:bg-white hover:text-black"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
