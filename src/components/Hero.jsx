"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageAnimation = {
    hidden: {
      scale: reduceMotion ? 1 : 1.08,
    },
    visible: {
      scale: 1,
      transition: {
        duration: reduceMotion ? 0 : 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-obsidian"
    >
      {/* BACKGROUND CAMPAIGN IMAGE */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial="hidden"
        animate="visible"
        variants={imageAnimation}
      >
        <Image
          src="/images/hero/afterhours-hero.png"
          alt="AFTERHOURS underground streetwear campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
        />
      </motion.div>

      {/* CAMPAIGN IMAGE CONTRAST */}
      <div className="absolute inset-0 z-0 bg-obsidian/50" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1800px] flex-col justify-end px-5 pb-28 pt-32 sm:px-8 md:px-12 md:pb-32 lg:px-20 xl:px-24">
        {/* TOP CAMPAIGN INFORMATION */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="absolute left-5 top-28 flex items-center gap-3 sm:left-8 md:left-12 lg:left-20 xl:left-24"
        >
          <span className="h-[2px] w-8 bg-acid-lime" />

          <span className="section-label text-off-white">
            Independent streetwear / 001
          </span>
        </motion.div>

        {/* HERO HEADING */}
        <div className="max-w-[1200px]">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-concrete sm:text-sm"
          >
            The world doesn't set our limits.
          </motion.p>

         <h1 className="font-heading text-[clamp(3.5rem,11.5vw,11rem)] uppercase leading-[0.85] tracking-[-0.055em] text-off-white">
  NO CURFEW.
  <br />
  <span className="text-acid-lime">NO RULES.</span>
</h1>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end md:mt-14 md:gap-10">
          {/* DESCRIPTION AND CTA */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.65 }}
            className="max-w-[390px]"
          >
            <p className="max-w-[340px] font-body text-sm leading-7 text-off-white md:text-base">
              For the independent. For the unconventional. For those who create
              their own rules.
            </p>

            <Link href="/shop" className="acid-button group mt-7 w-fit">
              Explore collection
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* CAMPAIGN DETAILS */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="hidden border-r-2 border-acid-lime pr-4 text-right sm:block"
          >
            <p className="section-label text-concrete">
              Designed beyond boundaries
            </p>

            <p className="mt-2 font-heading text-sm tracking-[0.2em] text-acid-lime">
              AH / 001
            </p>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#next"
        aria-label="Scroll to discover"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-concrete transition-colors hover:text-acid-lime"
      >
        <span className="section-label text-[9px] tracking-[0.2em]">
          Scroll to explore
        </span>

        <motion.div
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={17} strokeWidth={1.5} />
        </motion.div>
      </motion.a>

      {/* VERTICAL SIDE LABEL */}
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right lg:block">
        <span className="section-label text-[9px] tracking-[0.3em] text-concrete">
          EXIST BEYOND EXPECTATIONS
        </span>
      </div>
    </section>
  );
}
