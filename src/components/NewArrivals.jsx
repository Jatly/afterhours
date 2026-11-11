
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import products from "@/data/products";

const filters = ["ALL", "TOPS", "BOTTOMS", "ACCESSORIES"];

const categoryMap = {
  "GRAPHIC T-SHIRT": "TOPS",
  "OVERSIZED HOODIE": "TOPS",
  "UTILITY COLLECTION": "BOTTOMS",
  ACCESSORIES: "ACCESSORIES",
};

export default function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const reduceMotion = useReducedMotion();

  const filteredProducts = useMemo(() => {
    if (activeFilter === "ALL") return products;

    return products.filter(
      (product) => categoryMap[product.category] === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="new-arrivals"
      className="bg-off-white px-5 py-24 text-obsidian sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Editorial heading */}
        <div className="mb-14 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 bg-acid-lime" />

              <p className="section-label text-obsidian">
                THE LATEST FROM AFTERHOURS
              </p>

              <span className="ml-2 font-body text-[9px] tracking-widest text-concrete">
                / 001
              </span>
            </div>

            <h2 className="font-heading text-[clamp(4rem,10vw,9.5rem)] uppercase leading-[0.78] tracking-[-0.065em]">
              JUST
              <br />
              DROPPED<span className="text-concrete">.</span>
            </h2>

            <p className="mt-8 max-w-md font-body text-sm leading-7 text-concrete">
              New energy. New expressions. Pieces made for
              those who move differently.
            </p>
          </div>

          <Link
            href="/shop"
            className="group inline-flex w-fit items-center gap-5 border-b border-concrete pb-3 font-body text-[10px] font-bold tracking-[0.16em] transition-colors hover:border-obsidian"
          >
            VIEW ALL PRODUCTS

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Filter bar */}
        <div className="mb-8 flex flex-col gap-5 border-y border-concrete py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="section-label text-concrete">
            SELECT YOUR CATEGORY
          </span>

          <div
            className="flex flex-wrap gap-x-6 gap-y-3"
            aria-label="Filter products"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={active}
                  className={`relative pb-2 font-body text-[10px] font-bold tracking-[0.14em] transition-colors duration-200 ${
                    active
                      ? "text-obsidian"
                      : "text-concrete hover:text-obsidian"
                  }`}
                >
                  {filter}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-obsidian transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Product metadata */}
        <div className="mb-6 flex items-center justify-between">
          <span className="section-label text-concrete">
            THE LATEST SELECTION
          </span>

          <span className="section-label text-concrete">
            {String(filteredProducts.length).padStart(2, "0")} PIECES
          </span>
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.article
                layout
                key={product.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="group min-w-0"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="block"
                >
                  {/* Product image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-concrete">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className={`object-cover ${
                        reduceMotion
                          ? ""
                          : "transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                      }`}
                    />

                    {/* Product label */}
                    {product.label && (
                      <span className="absolute left-2.5 top-2.5 bg-obsidian px-2.5 py-2 font-body text-[8px] font-bold tracking-[0.12em] text-off-white sm:left-3 sm:top-3">
                        {product.label}
                      </span>
                    )}

                    {/* Product number */}
                    <span className="absolute bottom-3 left-3 font-body text-[9px] font-medium tracking-widest text-off-white drop-shadow">
                      AH / {String(product.id).padStart(3, "0")}
                    </span>

                    {/* Hover action */}
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center bg-acid-lime text-obsidian opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Product details */}
                  <div className="pt-4">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="truncate font-body text-[8px] font-bold tracking-[0.13em] text-concrete sm:text-[9px]">
                        {product.category}
                      </p>

                      <span className="shrink-0 font-body text-[9px] text-concrete">
                        #{String(product.id).padStart(3, "0")}
                      </span>
                    </div>

                    <h3 className="font-body text-[10px] font-bold leading-5 tracking-[0.035em] sm:text-xs">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-body text-xs font-semibold">
                        ₹{Number(product.price).toLocaleString("en-IN")}
                      </p>

                      <span className="font-body text-[8px] font-medium tracking-widest text-concrete transition-colors group-hover:text-obsidian">
                        DISCOVER ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="border-y border-concrete py-24 text-center">
            <p className="font-heading text-4xl sm:text-6xl">
              NOTHING HERE YET.
            </p>

            <p className="mt-4 font-body text-sm text-concrete">
              More pieces are on the way.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("ALL")}
              className="mt-7 border-b border-obsidian pb-2 font-body text-[10px] font-bold tracking-widest"
            >
              VIEW ALL PIECES
            </button>
          </div>
        )}

        {/* Bottom editorial strip */}
        <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-concrete pt-7 sm:flex-row sm:items-center">
          <div>
            <p className="section-label text-concrete">
              NO RESTOCKS PROMISED.
            </p>

            <p className="mt-2 font-body text-[9px] tracking-[0.13em] text-concrete">
              NO RULES FOLLOWED.
            </p>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-3 font-body text-[10px] font-bold tracking-[0.15em]"
          >
            EXPLORE THE COLLECTION

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}
