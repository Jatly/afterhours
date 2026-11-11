
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

export default function Campaign() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-obsidian text-off-white">
      {/* Campaign frame */}
      <div className="relative min-h-[760px] md:min-h-[900px] lg:min-h-[980px]">
        {/* Background image */}
        <motion.div
          initial={{ scale: reduceMotion ? 1 : 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/campaign/after-dark.png"
            alt="AFTERHOURS streetwear campaign photographed at night"
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-[62%_center] md:object-center"
          />
        </motion.div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-obsidian/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-obsidian/35" />

        {/* Subtle texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('/images/noise.webp')]" />

        {/* Top information */}
        <div className="absolute left-5 right-5 top-7 z-20 flex items-center justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-acid-lime" />
            <span className="section-label text-off-white/70">
              AFTERHOURS ORIGINALS
            </span>
          </div>

          <span className="section-label text-off-white/60">
            CAMPAIGN / 002
          </span>
        </div>

        {/* Main editorial content */}
        <div className="relative z-10 flex min-h-[760px] flex-col justify-center px-5 pb-32 pt-36 sm:px-10 md:min-h-[900px] lg:min-h-[980px] lg:px-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative max-w-[1050px]"
          >
            <div className="mb-9 flex items-center gap-4">
              <span className="section-label text-acid-lime">
                01 / THE NIGHT MOVEMENT
              </span>
              <span className="h-px w-12 bg-acid-lime/60" />
            </div>

            <h2 className="font-heading text-[clamp(4.5rem,11.5vw,11.5rem)] uppercase leading-[0.76] tracking-[-0.065em]">
              WHEN THE
              <br />
              WORLD
              <br />
              <span className="text-acid-lime">SLEEPS,</span>
              <br />
              <span className="text-outline-off-white">
                WE CREATE.
              </span>
            </h2>

            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[330px] font-body text-sm leading-7 text-off-white/65 md:text-base">
                The streets become our canvas.
                The night becomes our inspiration.
                We create beyond the boundaries of ordinary.
              </p>

              <Link
                href="/about"
                className="acid-button group inline-flex w-fit items-center gap-10"
              >
                <span>DISCOVER OUR WORLD</span>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Campaign number */}
          <div className="pointer-events-none absolute bottom-32 right-8 hidden select-none lg:block">
            <span className="font-heading text-[clamp(9rem,19vw,18rem)] leading-none text-off-white/[0.07]">
              002
            </span>
          </div>
        </div>

        {/* Vertical side label */}
        <div className="absolute bottom-36 right-7 z-10 hidden [writing-mode:vertical-rl] lg:block">
          <span className="section-label tracking-[0.25em] text-off-white/45">
            NO CURFEW — NO RULES — NO LIMITS
          </span>
        </div>

        {/* Bottom editorial strip */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-off-white/20 px-5 py-5 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <Plus size={13} className="text-acid-lime" />
            <span className="section-label text-off-white/55">
              INDEPENDENT BY DESIGN
            </span>
          </div>

          <span className="section-label text-off-white/55">
            EST. AFTER DARK
          </span>
        </div>
      </div>
    </section>
  );
}
