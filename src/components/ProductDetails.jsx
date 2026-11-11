
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

export default function ProductDetails({ product }) {
  const [selectedSize, setSelectedSize] = useState("");

  const specifications = [
    ["FIT", product.fit],
    ["MATERIAL", product.material],
    ["COLOUR", product.color],
    ["COLLECTION", "AFTERHOURS / 001"],
  ];

  return (
    <main className="overflow-hidden bg-off-white text-obsidian">

      {/* TOP NAVIGATION */}
      <div className="px-4 pt-24 sm:px-8 sm:pt-28 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 border-b border-obsidian/15 pb-5">

          <Link
            href="/shop"
            className="group inline-flex min-w-0 items-center gap-2 font-body text-[9px] font-bold tracking-[0.12em] sm:gap-3 sm:text-[10px] sm:tracking-[0.16em]"
          >
            <ArrowLeft
              size={15}
              className="shrink-0 transition-transform group-hover:-translate-x-1"
            />
            <span>BACK TO COLLECTION</span>
          </Link>

          <span className="section-label shrink-0 text-[8px] text-concrete sm:text-[10px]">
            AH / PRODUCT {String(product.id).padStart(3, "0")}
          </span>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <section className="px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16 xl:px-16">
        <div className="mx-auto grid max-w-[1440px] items-start gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-20">

          {/* PRODUCT IMAGE */}
          <div className="min-w-0">

            <div className="relative">

              {/* SIDE LABEL */}
              <div className="absolute -left-5 top-0 hidden h-full -translate-x-full items-center justify-center lg:flex">
                <span className="rotate-180 font-body text-[9px] font-bold tracking-[0.3em] text-concrete [writing-mode:vertical-rl]">
                  INDEPENDENT BY DESIGN — MADE AFTER DARK
                </span>
              </div>

              {/* MAIN IMAGE */}
              <div className="group relative aspect-[4/5] overflow-hidden bg-concrete">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 55vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
                />

                {/* CINEMATIC OVERLAYS */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/65 via-transparent to-obsidian/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/15 to-transparent" />

                {/* IMAGE TOP METADATA */}
                <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-3 sm:left-7 sm:right-7 sm:top-7">
                  <span className="bg-acid-lime px-2 py-2 font-body text-[8px] font-bold tracking-[0.12em] text-obsidian sm:px-3 sm:text-[9px] sm:tracking-[0.15em]">
                    {product.label || "COLLECTION 001"}
                  </span>

                  <span className="font-body text-[8px] font-bold tracking-[0.15em] text-off-white sm:text-[9px]">
                    AH / 001
                  </span>
                </div>

                {/* IMAGE BOTTOM METADATA */}
                <div className="absolute bottom-4 left-3 right-3 flex items-end justify-between gap-3 sm:bottom-8 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-body text-[8px] font-bold tracking-[0.2em] text-acid-lime sm:text-[9px] sm:tracking-[0.25em]">
                      AFTERHOURS ORIGINALS
                    </p>

                    <p className="mt-2 font-body text-[8px] tracking-[0.12em] text-off-white/70 sm:text-[9px] sm:tracking-[0.15em]">
                      NO CURFEW. NO RULES.
                    </p>
                  </div>

                  <span className="shrink-0 font-heading text-4xl leading-none text-off-white sm:text-7xl">
                    {String(product.id).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGE FOOTER */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-b border-obsidian/15 pb-4">
              <span className="font-body text-[8px] font-bold tracking-[0.12em] text-concrete sm:text-[9px] sm:tracking-[0.15em]">
                VISUAL ARCHIVE / 001
              </span>

              <span className="font-body text-[8px] tracking-[0.12em] text-concrete sm:text-[9px] sm:tracking-[0.15em]">
                MADE FOR THE DIFFERENT.
              </span>
            </div>

            {/* EDITORIAL STATEMENT */}
            <div className="mt-10 hidden lg:block xl:mt-12">
              <p className="font-heading text-[clamp(2rem,4vw,4.5rem)] uppercase leading-[0.9] tracking-[-0.055em]">
                NOT HERE
                <br />
                TO FIT IN<span className="text-acid-lime">.</span>
              </p>

              <p className="mt-5 max-w-sm font-body text-xs leading-7 text-concrete">
                An expression of individuality. Designed to exist beyond
                expectations and made for those who move differently.
              </p>
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="min-w-0 lg:sticky lg:top-28">

            {/* PRODUCT EYEBROW */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="h-2 w-2 shrink-0 bg-acid-lime" />

                <span className="section-label truncate text-concrete">
                  {product.category}
                </span>
              </div>

              <span className="shrink-0 font-body text-[8px] tracking-widest text-concrete sm:text-[9px]">
                001 — 004
              </span>
            </div>

            {/* PRODUCT TITLE */}
            <h1 className="mt-6 break-words font-heading text-[clamp(2.5rem,8vw,6.5rem)] uppercase leading-[0.85] tracking-[-0.065em] sm:mt-8 sm:text-[clamp(3.5rem,6.5vw,6.5rem)]">
              {product.name}
              <span className="text-acid-lime">.</span>
            </h1>

            {/* PRICE */}
            <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-b border-obsidian/20 pb-6 sm:mt-8 sm:pb-7">
              <div>
                <p className="section-label text-concrete">
                  DESIGN CONCEPT / 001
                </p>

                <p className="mt-3 font-body text-xl font-bold tracking-tight sm:text-2xl">
                  ₹{Number(product.price).toLocaleString("en-IN")}
                </p>
              </div>

              <span className="font-body text-[8px] tracking-[0.15em] text-concrete sm:text-[9px]">
                AFTERHOURS ORIGINAL
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="py-7 sm:py-8">
              <p className="section-label mb-4 text-concrete">
                THE IDEA BEHIND IT
              </p>

              <p className="max-w-lg font-body text-sm leading-7 text-obsidian/65 sm:leading-8">
                {product.description}
              </p>
            </div>

            {/* COLOUR */}
            <div className="border-t border-obsidian/15 py-6 sm:py-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-[10px] font-bold tracking-[0.15em]">
                  COLOUR
                </p>

                <span className="font-body text-[9px] tracking-widest text-concrete">
                  {product.color}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-obsidian bg-obsidian p-1">
                  <span className="h-full w-full border border-off-white/20" />
                </span>

                <span className="font-body text-[9px] tracking-widest text-concrete">
                  SIGNATURE COLOURWAY
                </span>
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="border-t border-obsidian/15 py-6 sm:py-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-body text-[10px] font-bold tracking-[0.15em]">
                  SELECT YOUR FIT
                </p>

                <span className="font-body text-[9px] tracking-widest text-concrete">
                  SIZE RANGE
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {product.sizes.map((size) => {
                  const active = selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={active}
                      className={`relative flex min-h-12 items-center justify-center border font-body text-xs font-bold transition-all duration-300 sm:min-h-14 ${
                        active
                          ? "border-obsidian bg-obsidian text-acid-lime"
                          : "border-obsidian/20 bg-transparent hover:border-obsidian"
                      }`}
                    >
                      {size}

                      {active && (
                        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 bg-acid-lime" />
                      )}
                    </button>
                  );
                })}
              </div>

              <p
                aria-live="polite"
                className="mt-4 min-h-4 font-body text-[8px] tracking-[0.12em] text-concrete sm:text-[9px]"
              >
                {selectedSize
                  ? `SELECTED SIZE: ${selectedSize}`
                  : "CHOOSE A SIZE TO EXPLORE YOUR FIT."}
              </p>
            </div>

            {/* PRODUCT SPECIFICATIONS */}
            <div className="border-t border-obsidian/15 py-6 sm:py-7">
              <p className="section-label mb-6 text-concrete">
                PRODUCT SPECIFICATIONS
              </p>

              <div>
                {specifications.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 border-b border-obsidian/10 py-4 font-body text-[9px] sm:text-[10px]"
                  >
                    <span className="shrink-0 font-bold tracking-[0.15em]">
                      {label}
                    </span>

                    <span className="max-w-[60%] text-right text-concrete">
                      {value || "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/shop"
              className="acid-button group mt-5 flex min-h-[56px] w-full items-center justify-between gap-4 px-5 sm:min-h-[62px] sm:px-6"
            >
              <span className="text-[10px] sm:text-[11px]">
                EXPLORE THE COLLECTION
              </span>

              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <p className="mt-5 text-center font-body text-[8px] tracking-[0.12em] text-concrete sm:text-[9px] sm:tracking-[0.15em]">
              NOT MADE FOR EVERYONE. MADE FOR YOURSELF.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-obsidian px-4 py-16 text-off-white sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col justify-between gap-8 border-b border-off-white/20 pb-8 sm:flex-row sm:items-end">

            <div>
              <p className="section-label text-acid-lime">
                AFTERHOURS / THE ORIGINALS
              </p>

              <h2 className="mt-6 font-heading text-[clamp(2.8rem,9vw,8rem)] uppercase leading-[0.85] tracking-[-0.06em]">
                THE NIGHT
                <br />
                IS <span className="text-acid-lime">YOURS.</span>
              </h2>
            </div>

            <Link
              href="/collections"
              className="group inline-flex w-fit items-center gap-4 border-b border-off-white/40 pb-3 font-body text-[9px] font-bold tracking-[0.15em] transition-colors hover:border-acid-lime hover:text-acid-lime sm:text-[10px]"
            >
              DISCOVER OUR COLLECTIONS

              <MoveUpRight
                size={17}
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 font-body text-[8px] tracking-[0.15em] text-off-white/40 sm:text-[9px] sm:tracking-[0.18em]">
            <span>NO CURFEW. NO RULES.</span>
            <span>AFTERHOURS — 001</span>
          </div>
        </div>
      </section>
    </main>
  );
}
