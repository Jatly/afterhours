
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Manifesto() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="manifesto"
      className="relative overflow-hidden bg-off-white text-obsidian"
    >
      {/* Top information bar */}
      <div className="flex items-center justify-between gap-4 border-b border-concrete px-5 py-5 sm:px-10 lg:px-16">
        <span className="section-label">
          THE AFTERHOURS MANIFESTO
        </span>

        <span className="section-label text-concrete">
          CHAPTER 01 — INDEPENDENCE
        </span>
      </div>

      {/* Main composition */}
      <div className="relative mx-auto grid max-w-[1800px] grid-cols-1 lg:min-h-[850px] lg:grid-cols-[1fr_0.95fr]">

        {/* Left editorial typography */}
        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-10 md:py-28 lg:px-16 lg:py-32">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-12 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-acid-lime" />

              <span className="section-label text-concrete">
                A DIFFERENT STATE OF MIND
              </span>
            </div>

            <h2 className="font-heading text-[clamp(4rem,8.7vw,9rem)] uppercase leading-[0.78] tracking-[-0.065em]">
              NOT
              <br />
              MADE
              <br />
              FOR
              <br />

              <span className="text-transparent [-webkit-text-stroke:1.5px_#111111]">
                EVERYONE.
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[1px] w-12 bg-concrete" />

              <p className="section-label text-concrete">
                AND THAT'S THE POINT.
              </p>
            </div>
          </motion.div>

          {/* Brand statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-16 max-w-[390px] lg:mt-24"
          >
            <p className="font-body text-lg leading-8 text-obsidian">
              We were never here to fit in.
              We are here to create our own space,
              our own identity, our own rules.
            </p>

            <p className="mt-5 font-body text-sm font-semibold uppercase leading-7 tracking-[0.08em]">
              Made for the ones who refuse to be defined.
            </p>

            <a
              href="/about"
              className="group mt-10 inline-flex items-center gap-4 border-b border-concrete pb-3 font-body text-[11px] font-bold tracking-[0.16em] transition-colors hover:border-obsidian"
            >
              DISCOVER OUR WORLD

              <span className="flex h-9 w-9 items-center justify-center bg-acid-lime transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right: oversized campaign image */}
        <motion.div
          initial={{
            opacity: reduceMotion ? 1 : 0,
            scale: reduceMotion ? 1 : 1.04,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[560px] overflow-hidden bg-obsidian sm:min-h-[720px] lg:min-h-full"
        >
          {/* Large background number */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 top-0 z-10 font-heading text-[clamp(16rem,32vw,35rem)] leading-none text-transparent [-webkit-text-stroke:1px_#EAE8E1]"
          >
            01
          </span>

          <Image
            src="/images/campaign/manifesto.png"
            alt="AFTERHOURS monochrome streetwear editorial campaign"
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-center"
          />

          {/* Vertical label */}
          <div className="absolute right-5 top-8 z-20 [writing-mode:vertical-rl]">
            <span className="section-label text-off-white">
              EXIST BEYOND EXPECTATIONS
            </span>
          </div>

          {/* Image caption */}
          <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between gap-4 sm:bottom-12 sm:left-10 sm:right-10">
            <div>
              <p className="section-label text-off-white">
                AFTERHOURS ORIGINAL
              </p>

              <p className="font-heading mt-2 text-4xl uppercase text-off-white sm:text-6xl">
                NO APOLOGIES.
              </p>
            </div>

            <span className="section-label text-off-white">
              AH—001
            </span>
          </div>

          {/* Lime corner marker */}
          <div className="absolute bottom-0 right-0 z-20 h-16 w-16 bg-acid-lime sm:h-20 sm:w-20">
            <div className="flex h-full w-full items-center justify-center">
              <ArrowUpRight size={25} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom signature */}
      <div className="flex items-center justify-between gap-4 border-t border-concrete px-5 py-5 sm:px-10 lg:px-16">
        <span className="section-label text-concrete">
          NOT MADE TO FOLLOW.
        </span>

        <span className="section-label text-concrete">
          MADE TO EXIST.
        </span>
      </div>
    </section>
  );
}
