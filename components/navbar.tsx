"use client";
import React, { useState } from "react";
import { Container } from "./container";
import ThemeToggleButton from "./ui/theme-toggle-button";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const Navbar = () => {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Resources", href: "/resources" },
    { title: "Blogs", href: "/blog" },
    { title: "Projects", href: "/projects" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        animate={{
          borderRadius: scrolled ? "30px" : "0",
          boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          width: scrolled ? "45%" : "100%",
          y: scrolled ? "10px" : "0",
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex justify-between items-center px-2 py-4 fixed top-0 inset-x-0 mx-auto max-w-3xl z-30"
      >
        <div className="flex items-center gap-2">
          <ThemeToggleButton
            showLabel
            variant="circle-blur"
            start="top-right"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8">
          {navItems.map((item, index: number) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm relative px-2 py-1 text-neutral-800 dark:text-neutral-200"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatePresence>
                {hovered === index ? (
                  <motion.span
                    layoutId="hovered-span"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3,
                    }}
                    className="h-full w-full absolute inset-0 rounded-md bg-blue-100 dark:bg-neutral-800"
                  />
                ) : null}
              </AnimatePresence>
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black dark:bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 right-2 w-48 bg-white/60 dark:bg-neutral-900 rounded-lg shadow-lg flex flex-col items-start p-4 md:hidden z-40"
          >
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="w-full py-2 px-2 rounded hover:bg-blue-100 dark:hover:bg-neutral-800 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </Container>
  );
};

export default Navbar;
