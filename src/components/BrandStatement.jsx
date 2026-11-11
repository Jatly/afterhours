"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

export default function BrandStatement() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
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

  return (
    <section className="relative isolate overflow-hidden bg-obsidian text-off-white">
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="brand-statement-glow absolute inset-0" />

        <span className="font-heading absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none text-[35vw] leading-none tracking-[-0.1em] text-off-white/[0.025] lg:block">
          AH
        </span>

        <div className="absolute bottom-0 left-0 h-px w-full bg-off-white/10" />
      </div>

      {/* Top editorial bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-off-white/15 px-5 py-5 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-acid-lime" />

          <span className="section-label text-off-white">
            THE AFTERHOURS PHILOSOPHY
          </span>
        </div>

        <span className="section-label text-off-white/40">
          CHAPTER 03 / 001
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-[1440px]"
        >
          {/* Eyebrow */}
          <div className="mb-12 flex flex-wrap items-center gap-4 md:mb-16">
            <span className="section-label text-acid-lime">
              01 — INDEPENDENCE
            </span>

            <span className="h-px w-10 bg-off-white/35" />

            <span className="section-label text-off-white/40">
              NO PERMISSION NEEDED
            </span>
          </div>

          {/* Main headline */}
          <h2 className="font-heading text-[clamp(2.9rem,12vw,12.5rem)] uppercase leading-[0.82] tracking-[-0.065em]">
  <span className="block">EXIST</span>
  <span className="block">BEYOND</span>
  <span className="text-outline-off-white mt-2 block">
    EXPECTATIONS.
  </span>
</h2>

          {/* Editorial content */}
          <div className="mt-16 grid grid-cols-1 gap-12 border-t border-off-white/20 pt-8 md:mt-24 md:grid-cols-[1fr_auto] md:items-end">
            {/* Supporting copy */}
            <div className="max-w-[500px]">
              <p className="section-label mb-6 text-off-white/40">
                A DIFFERENT WAY OF THINKING.
              </p>

              <p className="font-body text-base font-medium leading-[1.8] text-off-white/85 sm:text-lg">
                We don't follow the noise. We make our own.
                <br className="hidden sm:block" />
                Not here to fit in. Here to stand apart.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-acid-lime" />

                <span className="section-label text-off-white/40">
                  BUILT FOR THE DIFFERENT.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start md:items-end">
              <Link
                href="#collection"
                className="acid-button group relative inline-flex min-h-[58px] items-center justify-between gap-12 overflow-hidden px-7"
              >
                <span>FIND YOUR AFTERHOURS</span>

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <span className="mt-5 font-body text-[9px] font-medium tracking-[0.2em] text-off-white/35">
                NO CURFEW. NO RULES.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Corner details */}
        <div className="pointer-events-none absolute bottom-8 left-5 hidden items-center gap-2 sm:flex lg:left-16">
          <Plus size={13} className="text-acid-lime" />

          <span className="section-label text-off-white/35">
            AFTERHOURS / EST. 001
          </span>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-5 hidden items-center gap-2 sm:flex lg:right-16">
          <span className="section-label text-off-white/35">
            THINK OUTSIDE THE LINES
          </span>

          <Plus size={13} className="text-acid-lime" />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-off-white/15 px-5 py-5 sm:px-10 lg:px-16">
        <span className="section-label text-off-white/40">
          THINK DIFFERENT. MOVE DIFFERENT.
        </span>

        <span className="section-label text-acid-lime">AFTERHOURS</span>
      </div>
    </section>
  );
}
