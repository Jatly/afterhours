"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import products from "@/data/products";

export default function Collection() {
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
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-obsidian px-5 py-24 text-off-white sm:px-8 md:px-12 md:py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Collection header */}
        <div className="relative mb-16 md:mb-24">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-concrete pb-5">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-acid-lime" />

              <span className="section-label text-concrete">
                AFTERHOURS / COLLECTION 001
              </span>
            </div>

            <span className="section-label hidden text-concrete sm:block">
              EST. AFTER DARK
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="mb-5 font-body text-[10px] font-bold tracking-[0.25em] text-acid-lime">
                DROP 01 — THE BEGINNING
              </p>

              <h2 className="font-heading text-[clamp(4rem,11vw,11rem)] uppercase leading-[0.8] tracking-[-0.065em]">
                AFTER
                <br />
                <span className="text-acid-lime">DARK.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-[300px] lg:justify-self-end lg:pb-2"
            >
              <p className="section-label mb-5 text-concrete">
                NOT JUST WHAT YOU WEAR.
                <br />
                IT'S HOW YOU EXIST.
              </p>

              <p className="font-body text-sm leading-7 text-concrete">
                Designed for the ones who move differently. Uncomplicated
                silhouettes. Unapologetic attitude. Made to exist beyond
                expectations.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="font-heading text-3xl text-acid-lime">
                  {String(products.length).padStart(2, "0")}
                </span>

                <span className="section-label text-concrete">
                  PIECES / ONE MINDSET
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-5 sm:gap-y-16 lg:grid-cols-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : index * 0.1,
              }}
              className="group min-w-0"
            >
              {/* Product image */}
              <Link
                href={`/products/${product.slug}`}
                aria-label={`View ${product.name}`}
                className="relative block aspect-[3/4] overflow-hidden bg-obsidian"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 48vw, (max-width: 1024px) 30vw, 24vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Product number */}
                <span className="absolute bottom-3 left-3 z-10 font-body text-[10px] tracking-widest text-off-white sm:bottom-5 sm:left-5">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(products.length).padStart(2, "0")}
                </span>

                {/* Product label */}
                <span className="absolute left-3 top-3 z-10 bg-acid-lime px-2.5 py-2 font-body text-[8px] font-bold tracking-[0.12em] text-obsidian sm:left-4 sm:top-4 sm:text-[9px]">
                  {product.label}
                </span>

                {/* View icon */}
                <span className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center bg-off-white text-obsidian transition-transform duration-300 sm:bottom-5 sm:right-5 sm:h-11 sm:w-11 sm:translate-y-3 sm:group-hover:translate-y-0">
                  <MoveUpRight size={19} />
                </span>
              </Link>

              {/* Product details */}
              <div className="mt-4 sm:mt-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="font-body text-[8px] font-medium tracking-[0.13em] text-concrete sm:text-[10px]">
                    {product.category}
                  </span>

                  <span className="font-body text-[9px] text-concrete">
                    AH — {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="min-w-0 font-body text-[10px] font-bold leading-5 tracking-[0.04em] transition-colors duration-300 hover:text-acid-lime sm:text-xs md:text-sm"
                  >
                    {product.name}
                  </Link>

                  <p className="shrink-0 font-body text-[11px] font-medium tabular-nums sm:text-sm">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Animated accent */}
                <div className="mt-4 h-px w-full bg-concrete">
                  <div className="h-full w-0 bg-acid-lime transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Collection footer */}
        <div className="mt-20 border-t border-concrete pt-9 md:mt-28 md:pt-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-label text-concrete">
                THE NIGHT IS STILL YOUNG.
              </p>

              <h3 className="font-heading mt-4 text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.9] tracking-[-0.04em]">
                THIS IS YOUR
                <br />
                <span className="text-acid-lime">AFTERHOURS.</span>
              </h3>
            </div>

            <Link
              href="/shop"
              className="acid-button group inline-flex min-h-[54px] items-center justify-between gap-8 sm:min-w-[230px]"
            >
              EXPLORE ALL PRODUCTS
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
