
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import products from "@/data/products";

const filters = ["ALL", "TOPS", "BOTTOMS", "ACCESSORIES"];

const getCategory = (category) => {
  if (
    category === "GRAPHIC T-SHIRT" ||
    category === "OVERSIZED HOODIE"
  ) {
    return "TOPS";
  }

  if (category === "UTILITY COLLECTION") {
    return "BOTTOMS";
  }

  if (category === "ACCESSORIES") {
    return "ACCESSORIES";
  }

  return "OTHER";
};

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const reduceMotion = useReducedMotion();

  const filteredProducts = useMemo(() => {
    if (activeFilter === "ALL") return products;

    return products.filter(
      (product) => getCategory(product.category) === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="min-h-screen overflow-hidden bg-off-white px-5 pb-24 pt-32 text-obsidian sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1600px]">

        {/* EDITORIAL HEADING */}
        <section className="relative border-b border-obsidian/20 pb-12">

          <div className="mb-12 flex items-center justify-between">
            <span className="section-label text-obsidian/45">
              AFTERHOURS / THE STORE
            </span>

            <span className="section-label text-obsidian/45">
              CHAPTER 001 — 2026
            </span>
          </div>

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div className="relative z-10">
              <p className="section-label mb-6 flex items-center gap-3 text-obsidian/45">
                <span className="h-[2px] w-7 bg-acid-lime" />
                THE UNDERGROUND EDIT
              </p>

              <h1 className="font-heading text-[clamp(3.5rem,11vw,10.5rem)] uppercase leading-[0.78] tracking-[-0.065em]">
                THE
                <br />
                COLLECTION<span className="text-acid-lime">.</span>
              </h1>
            </div>

            <div className="relative z-10 max-w-sm md:pb-2">
              <p className="max-w-xs font-body text-sm leading-7 text-obsidian/60">
                Not designed to blend in. Not made to follow.
                Discover pieces created for those who move differently.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 bg-acid-lime" />

                <span className="section-label">
                  NO CURFEW. NO RULES.
                </span>
              </div>
            </div>

            {/* BACKGROUND NUMBER */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-8 select-none font-heading text-[clamp(10rem,25vw,24rem)] leading-none text-obsidian/[0.035]"
            >
              01
            </span>

          </div>

          <div className="mt-16 flex items-center justify-between border-t border-obsidian/15 pt-5">
            <span className="section-label">
              {String(products.length).padStart(2, "0")} ORIGINAL PIECES
            </span>

            <span className="section-label text-obsidian/40">
              DESIGNED AFTER DARK.
            </span>
          </div>

        </section>

        {/* FILTER NAVIGATION */}
        <section className="sticky top-[76px] z-30 -mx-5 border-b border-obsidian/15 bg-off-white/95 px-5 backdrop-blur-md sm:-mx-10 sm:px-10 md:top-[88px] lg:-mx-16 lg:px-16">

          <div className="flex min-h-[76px] items-center justify-between gap-5">

            <div className="flex items-center gap-5 overflow-x-auto sm:gap-9">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`relative shrink-0 py-7 font-body text-[10px] font-bold tracking-[0.15em] transition-colors ${
                    activeFilter === filter
                      ? "text-obsidian"
                      : "text-obsidian/40 hover:text-obsidian"
                  }`}
                >
                  {filter}

                  {activeFilter === filter && (
                    <motion.span
                      layoutId="shop-filter-indicator"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-acid-lime"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : {
                              type: "spring",
                              stiffness: 400,
                              damping: 35,
                            }
                      }
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <SlidersHorizontal
                size={14}
                className="text-obsidian/40"
              />

              <span className="section-label text-obsidian/45">
                {String(filteredProducts.length).padStart(2, "0")} RESULTS
              </span>
            </div>

          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="pt-10">

          <div className="mb-8 flex items-center justify-between">
            <span className="section-label text-obsidian/45">
              {activeFilter === "ALL" ? "ALL PRODUCTS" : activeFilter}
            </span>

            <span className="section-label text-obsidian/40">
              {String(filteredProducts.length).padStart(2, "0")} PIECES
            </span>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeFilter}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-y-16"
            >
              {filteredProducts.map((product) => {
                const originalIndex = products.findIndex(
                  (item) => item.id === product.id
                );

                return (
                  <Link
                    href={`/products/${product.slug}`}
                    key={product.id}
                    className="group min-w-0"
                  >
                    {/* PRODUCT IMAGE */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-concrete">

                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/25 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* PRODUCT LABEL */}
                      {product.label && (
                        <span className="absolute left-3 top-3 bg-obsidian px-2.5 py-2 font-body text-[8px] font-bold tracking-[0.13em] text-off-white sm:left-4 sm:top-4">
                          {product.label}
                        </span>
                      )}

                      {/* PRODUCT NUMBER */}
                      <span className="absolute bottom-4 left-3 font-body text-[9px] font-bold tracking-widest text-off-white drop-shadow sm:left-4">
                        AH / {String(originalIndex + 1).padStart(3, "0")}
                      </span>

                      {/* HOVER ACTION */}
                      <span className="absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center bg-acid-lime text-obsidian opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:right-4">
                        <ArrowUpRight size={17} />
                      </span>

                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className="mt-5">

                      <p className="mb-2 font-body text-[9px] font-bold tracking-[0.14em] text-obsidian/40">
                        {product.category}
                      </p>

                      <div className="flex items-start justify-between gap-2">

                        <h2 className="font-heading text-[10px] leading-5 tracking-[0.02em] sm:text-xs">
                          {product.name}
                        </h2>

                        <span className="shrink-0 font-body text-[10px] font-semibold sm:text-xs">
                          ₹{Number(product.price).toLocaleString("en-IN")}
                        </span>

                      </div>

                      {/* HOVER LINE */}
                      <div className="mt-4 h-px w-full bg-obsidian/15">
                        <div className="h-px w-0 bg-obsidian transition-all duration-500 group-hover:w-full" />
                      </div>

                      <p className="mt-3 flex items-center justify-between font-body text-[8px] font-bold tracking-[0.14em] text-obsidian/40">
                        <span>EXPLORE PIECE</span>
                        <span>
                          {String(originalIndex + 1).padStart(2, "0")}
                        </span>
                      </p>

                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

              <p className="font-heading text-5xl uppercase">
                NOTHING HERE. YET.
              </p>

              <p className="mt-4 font-body text-xs text-obsidian/50">
                No pieces in this category right now.
              </p>

              <button
                type="button"
                onClick={() => setActiveFilter("ALL")}
                className="mt-7 border-b border-obsidian pb-2 font-body text-[10px] font-bold tracking-widest"
              >
                VIEW ALL PRODUCTS
              </button>

            </div>
          )}

        </section>

        {/* CLOSING EDITORIAL SECTION */}
        <section className="mt-32 border-t border-obsidian/20 pt-10">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <p className="section-label mb-6 text-obsidian/40">
                END OF CHAPTER / 001
              </p>

              <h2 className="font-heading text-[clamp(3.8rem,9vw,8rem)] uppercase leading-[0.82] tracking-[-0.055em]">
                NOT HERE
                <br />
                TO <span className="text-obsidian/20">FIT IN.</span>
              </h2>
            </div>

            <Link
              href="/about"
              className="group inline-flex w-fit items-center gap-5 border-b border-obsidian pb-3 font-body text-[10px] font-bold tracking-[0.15em]"
            >
              DISCOVER OUR WORLD

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

          </div>

          {/* OVERSIZED BRAND TYPOGRAPHY */}
          <div className="mt-24 overflow-hidden">
  <p className="whitespace-nowrap font-heading text-[clamp(3rem,12.4vw,13rem)] leading-[0.8] tracking-[-0.065em] text-obsidian/[0.055]">
    AFTERHOURS
  </p>
</div>

        </section>

      </div>
    </main>
  );
}
