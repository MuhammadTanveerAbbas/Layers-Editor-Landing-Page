"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-neutral-950/70 backdrop-blur py-3 sm:py-4 md:py-5 lg:py-6">
        <div className="container max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="rounded-xl lg:rounded-full border border-white/15 flex items-center justify-between px-4 py-2 lg:px-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logoImage}
                alt="Layer Logo"
                className="h-7 w-auto sm:h-8 md:h-9"
                priority
              />
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-8 font-semibold text-white text-base lg:text-lg select-none">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-lime-400 transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Actions & Hamburger */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                className="hidden lg:inline-flex whitespace-nowrap px-5 py-2 text-sm md:text-base"
              >
                Get Started
              </Button>

              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 transition"
                type="button"
              >
                {isOpen ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden mt-2 rounded-xl border border-white/15 bg-neutral-950/80 backdrop-blur py-4 px-6 select-none"
              >
                <ul className="flex flex-col gap-4">
                  {navLinks.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={closeMenu}
                        className="block text-white text-lg font-semibold hover:text-lime-400 transition-colors duration-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    variant="primary"
                    className="w-full py-2 text-base"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-[72px] sm:h-[80px] md:h-[88px] lg:h-[96px]" />
    </>
  );
}
