"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isLightPage = pathname === "/shop" || pathname.startsWith("/products/");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = mounted && prefersReducedMotion;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Navbar theme
  const lightNavbar = isLightPage;
  const darkNavbar = !isLightPage && (scrolled || menuOpen);

  const headerClasses = lightNavbar
    ? "border-obsidian/15 bg-off-white text-obsidian"
    : darkNavbar
      ? "border-concrete bg-obsidian text-off-white"
      : "border-transparent bg-transparent text-off-white";

  const navTextColor = lightNavbar ? "text-obsidian" : "text-off-white";

  const logoFilter = lightNavbar ? "invert" : "";

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${headerClasses}`}
      >
        <nav className="mx-auto flex h-[68px] w-full max-w-[1800px] items-center justify-between px-5 sm:h-[76px] sm:px-7 md:h-[84px] md:px-10 lg:px-16 xl:px-20">
          {/* BRAND */}
          <Link
            href="/"
            aria-label="AFTERHOURS home"
            className="relative z-50 flex shrink-0 items-center"
            onClick={closeMenu}
          >
            {/* Mobile logo */}
            <Image
              src="/logos/ah.svg"
              alt="AH"
              width={42}
              height={42}
              priority
              className={`h-8 w-8 sm:h-9 sm:w-9 md:hidden ${logoFilter}`}
            />

            {/* Desktop logo */}
            <Image
              src="/logos/afterhours.svg"
              alt="AFTERHOURS"
              width={190}
              height={40}
              priority
              className={`hidden h-auto w-[135px] sm:w-[150px] md:block lg:w-[165px] ${logoFilter}`}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative py-2 section-label ${navTextColor} transition-colors duration-200 hover:text-acid-lime`}
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-acid-lime transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT ACTION */}
          <div className="relative z-50 flex shrink-0 items-center gap-3 sm:gap-5">
            <Link
              href="/collections/001"
              className={`group hidden items-center gap-2 transition-colors hover:text-acid-lime sm:inline-flex ${
                lightNavbar ? "text-obsidian" : "text-acid-lime"
              }`}
            >
              <span className="section-label">COLLECTION 001</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className={`flex h-11 w-11 items-center justify-center transition-colors hover:text-acid-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-acid-lime md:hidden ${navTextColor}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, rotate: -45 }
                  }
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={
                    shouldReduceMotion ? undefined : { opacity: 0, rotate: 45 }
                  }
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
                >
                  {menuOpen ? <X size={23} /> : <Menu size={23} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mounted && menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-obsidian px-6 pb-10 pt-28 sm:px-9 md:hidden"
          >
            <span className="section-label mb-8 text-concrete">
              NAVIGATION / 001
            </span>

            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="border-b border-concrete"
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex min-h-[76px] items-center justify-between gap-4 py-5"
                  >
                    <span className="font-heading text-[clamp(2.5rem,10vw,4rem)] uppercase leading-none text-off-white transition-colors group-hover:text-acid-lime">
                      {link.label}
                    </span>

                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-concrete transition-colors group-hover:text-acid-lime"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/collections/001"
              onClick={closeMenu}
              className="mt-8 flex min-h-[60px] items-center justify-between gap-4 border border-acid-lime px-5 py-4 text-acid-lime transition-colors hover:bg-acid-lime hover:text-obsidian"
            >
              <span className="section-label">EXPLORE COLLECTION 001</span>

              <ArrowUpRight size={17} />
            </Link>

            <div className="mt-auto pt-12">
              <p className="section-label text-concrete">
                NO CURFEW. NO RULES.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
