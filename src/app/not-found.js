
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const tunnelFrames = Array.from({ length: 8 }, (_, index) => index);

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#090909] text-[#EAE8E1]">

      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(215,255,0,0.07)_0%,transparent_55%)]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-7 md:px-12">
        <Link href="/" className="section-label text-[#EAE8E1]">
          AFTERHOURS<span className="ml-2 text-[#D7FF00]">®</span>
        </Link>

        <span className="section-label text-white/35">
          SYSTEM / 404
        </span>
      </header>

      {/* Tunnel experience */}
      <section className="relative flex flex-1 flex-col items-center justify-center px-5">

        <div className="relative flex h-[min(65vh,650px)] w-full max-w-[1000px] items-center justify-center overflow-hidden">

          {/* Tunnel perspective */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "900px" }}
          >
            {tunnelFrames.map((frame) => (
              <motion.div
                key={frame}
                className="absolute h-[38%] w-[38%] border border-[#D7FF00]/40"
                style={{
                  boxShadow: "0 0 25px rgba(215,255,0,0.035)",
                  transformStyle: "preserve-3d",
                }}
                initial={
                  reduceMotion
                    ? { scale: 0.9, opacity: 0.35 }
                    : { scale: 0.12, opacity: 0 }
                }
                animate={
                  reduceMotion
                    ? { scale: 0.9, opacity: 0.35 }
                    : {
                        scale: [0.12, 0.55, 1.2, 1.8],
                        opacity: [0, 0.5, 0.35, 0],
                      }
                }
                transition={{
                  duration: 5,
                  delay: frame * 0.62,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0,
                }}
              />
            ))}

            {/* Central light */}
            <motion.div
              className="absolute h-[1px] w-[65%] bg-[#D7FF00]"
              style={{
                boxShadow: "0 0 20px 3px rgba(215,255,0,0.45)",
              }}
              animate={
                reduceMotion
                  ? { opacity: 0.5 }
                  : {
                      opacity: [0.15, 0.8, 0.15],
                      scaleX: [0.4, 1, 0.4],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Tunnel center */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.span
                className="display-font text-[clamp(5rem,17vw,12rem)] leading-[0.8] tracking-[-0.1em] text-[#EAE8E1]"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        textShadow: [
                          "0 0 0px rgba(215,255,0,0)",
                          "0 0 35px rgba(215,255,0,0.25)",
                          "0 0 0px rgba(215,255,0,0)",
                        ],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                404
              </motion.span>

              <span className="section-label mt-5 text-[#D7FF00]">
                OUT OF BOUNDS
              </span>
            </div>
          </div>

          {/* Corner details */}
          <span className="section-label absolute left-0 top-1/2 text-white/30 [writing-mode:vertical-rl]">
            NO WAY THROUGH
          </span>

          <span className="section-label absolute right-0 top-1/2 text-white/30 [writing-mode:vertical-rl]">
            KEEP MOVING
          </span>

          <span className="section-label absolute bottom-4 left-0 text-white/30">
            AH / 001
          </span>

          <span className="section-label absolute bottom-4 right-0 text-white/30">
            UNKNOWN DESTINATION
          </span>
        </div>

        {/* Exit message */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 mb-16 mt-5 flex flex-col items-center text-center"
        >
          <p className="display-font max-w-3xl text-[clamp(1.8rem,5vw,4rem)] leading-[0.95] tracking-[-0.055em]">
            YOU WEREN&apos;T SUPPOSED
            <br />
            TO BE <span className="text-[#D7FF00]">HERE.</span>
          </p>

          <p className="body-font mt-6 max-w-sm text-xs leading-6 text-white/40 md:text-sm">
            Whatever you were looking for, it isn't this way.
            There's still somewhere to go.
          </p>

          <Link
            href="/"
            className="group mt-9 inline-flex items-center gap-4 border-b border-[#D7FF00] pb-3 body-font text-[11px] font-bold tracking-[0.2em] text-[#D7FF00] transition-all duration-300 hover:gap-7"
          >
            FIND YOUR WAY BACK
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </motion.div>
      </section>

      {/* Bottom signature */}
      <footer className="relative z-20 flex items-center justify-between border-t border-white/10 px-6 py-5 md:px-12">
        <span className="section-label text-white/30">
          NO CURFEW. NO RULES.
        </span>

        <span className="section-label text-[#D7FF00]">
          THE NIGHT IS YOURS.
        </span>
      </footer>
    </main>
  );
}
