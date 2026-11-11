
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";

import collections from "@/data/collections";
import products from "@/data/products";

export const instant = false;

export function generateStaticParams() {
  return ["002", "003", "004"].map((collectionId) => ({
    collectionId,
  }));
}

export async function generateMetadata({ params }) {
  const { collectionId } = await params;
  const collection = collections[collectionId];

  if (!collection) {
    return {
      title: "Collection Not Found | AFTERHOURS",
    };
  }

  return {
    title: `${collection.name} | AFTERHOURS`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }) {
  const { collectionId } = await params;
  const collection = collections[collectionId];

  if (!collection) notFound();

  const collectionProducts = collection.products
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean);

  const isComingSoon = collection.status === "COMING SOON";

  return (
    <main className="overflow-hidden bg-obsidian text-off-white">
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-obsidian px-5 pb-12 pt-36 sm:px-10 sm:pb-16 md:px-12 md:pb-20">
        <Image
          src={collection.hero}
          alt={`${collection.name} streetwear campaign`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-obsidian/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/35 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="mb-10 flex items-center justify-between border-b border-off-white/25 pb-5">
            <span className="section-label text-acid-lime">
              AFTERHOURS / COLLECTION {collection.number}
            </span>

            <span className="section-label text-off-white/70">
              {collection.year}
            </span>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-2 w-2 bg-acid-lime" />

            <p className="section-label text-off-white/75">
              {collection.subtitle}
            </p>
          </div>

          <h1 className="max-w-6xl font-heading text-[clamp(4rem,13vw,12rem)] uppercase leading-[0.79] tracking-[-0.075em]">
            {collection.name}
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-off-white/30 pt-6 md:flex-row md:items-end">
            <p className="max-w-lg font-body text-sm leading-7 text-off-white/75 md:text-base">
              {collection.description}
            </p>

            <a
              href="#collection-story"
              className="group inline-flex w-fit items-center gap-4 font-body text-[10px] font-bold tracking-[0.18em] text-acid-lime"
            >
              EXPLORE THE COLLECTION

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-2"
              />
            </a>
          </div>

          <div className="mt-12 hidden items-center justify-between font-body text-[9px] tracking-[0.2em] text-off-white/45 md:flex">
            <span>NO CURFEW. NO RULES.</span>
            <span>AFTERHOURS ORIGINALS</span>
            <span>CHAPTER {collection.number}</span>
          </div>
        </div>
      </section>

      {/* COLLECTION STORY */}
      <section
        id="collection-story"
        className="relative isolate scroll-mt-24 overflow-hidden px-5 py-24 sm:px-10 md:scroll-mt-28 md:px-12 md:py-36"
      >
        {/* Decorative background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-0 z-0 select-none"
        >
          <span className="font-heading text-[35vw] leading-none tracking-[-0.1em] text-off-white/[0.035]">
            {collection.number}
          </span>
        </div>

        {/* Story content */}
        <div className="relative z-10 mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <span className="section-label text-acid-lime">
              CHAPTER {collection.number} / THE IDEA
            </span>

            <p className="mt-6 max-w-xs font-body text-sm leading-7 text-concrete">
              A DIFFERENT PERSPECTIVE.
              <br />
              A DIFFERENT EXPRESSION.
            </p>

            <div className="mt-16 hidden md:block">
              <span className="font-heading text-[clamp(7rem,14vw,13rem)] leading-none tracking-[-0.1em] text-off-white/[0.06]">
                {collection.number}
              </span>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-5xl font-heading text-[clamp(2.8rem,6.5vw,7rem)] uppercase leading-[0.91] tracking-[-0.06em]">
              {collection.statement.replace(/[.!?]+$/, "")}
              <span className="text-acid-lime">.</span>
            </h2>

            <div className="mt-12 grid gap-10 border-t border-off-white/20 pt-8 md:grid-cols-2">
              <p className="max-w-md font-body text-sm leading-8 text-off-white/65">
                {collection.description}
              </p>

              <div className="relative z-10 flex flex-col items-start">
                <p className="font-body text-[10px] font-bold tracking-[0.18em] text-acid-lime">
                  THE AFTERHOURS MINDSET
                </p>

                <p className="mt-5 max-w-md font-body text-sm leading-8 text-off-white/65">
                  Every collection is a new perspective. Different influences,
                  different expressions, one independent identity.
                </p>

                {/* Archive button */}
                <Link
                  href="/collections"
                  className="acid-button group relative z-20 mt-8 inline-flex min-h-[54px] items-center justify-between gap-8 px-7"
                >
                  EXPLORE THE ARCHIVE

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-acid-lime" />

              <span className="font-body text-[9px] font-bold tracking-[0.2em] text-acid-lime">
                INDEPENDENT BY DESIGN.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL GALLERY */}
      <section className="px-5 pb-28 sm:px-10 md:px-12 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-center justify-between border-b border-off-white/15 pb-5">
            <div>
              <span className="section-label text-acid-lime">
                THE VISUAL ARCHIVE
              </span>

              <h2 className="mt-4 font-heading text-3xl tracking-[-0.04em] sm:text-5xl">
                VISUAL JOURNAL.
              </h2>
            </div>

            <span className="section-label text-concrete">
              {collection.number} /{" "}
              {String(collection.gallery.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-7">
            {collection.gallery.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden bg-concrete ${
                  index === 0
                    ? "aspect-[4/5] md:col-span-5"
                    : index === 1
                      ? "aspect-[4/3] md:col-span-7 md:mt-32"
                      : "aspect-[4/3] md:col-span-8 md:col-start-3"
                }`}
              >
                <Image
                  src={image}
                  alt={`${collection.name} editorial ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="section-label text-off-white">
                    AH / {collection.number} /{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-acid-lime opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between font-body text-[9px] tracking-[0.2em] text-concrete">
            <span>AFTERHOURS / IMAGE ARCHIVE</span>
            <span>COLLECTION {collection.number}</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      {!isComingSoon && collectionProducts.length > 0 && (
        <section className="bg-off-white px-5 py-24 text-obsidian sm:px-10 md:px-12 md:py-32">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-obsidian/20 pb-8 md:flex-row md:items-end">
              <div>
                <span className="section-label text-concrete">
                  COLLECTION {collection.number} / THE LINEUP
                </span>

                <h2 className="mt-5 font-heading text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                  THE PIECES<span className="text-acid-lime">.</span>
                </h2>
              </div>

              <span className="font-body text-[10px] font-bold tracking-[0.15em] text-concrete">
                {String(collectionProducts.length).padStart(2, "0")} SELECTED
                PIECES
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-7 md:gap-y-14">
              {collectionProducts.map((product, index) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.id}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-concrete">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-3 top-3 bg-off-white px-3 py-2 font-body text-[8px] font-bold tracking-[0.15em]">
                      AH / {collection.number} /{" "}
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center bg-acid-lime text-obsidian opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-acid-lime transition-all duration-500 group-hover:w-full" />
                  </div>

                  <div className="flex items-start justify-between gap-3 border-b border-obsidian/20 py-4">
                    <div>
                      <p className="font-body text-[9px] tracking-[0.15em] text-concrete">
                        {product.category}
                      </p>

                      <h3 className="mt-2 font-heading text-xs leading-5 tracking-tight sm:text-sm">
                        {product.name}
                      </h3>
                    </div>

                    <span className="whitespace-nowrap font-body text-xs font-bold">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-obsidian/20 pt-8 sm:flex-row">
              <p className="font-body text-xs text-concrete">
                DISCOVER MORE FROM AFTERHOURS.
              </p>

              <Link
                href="/shop"
                className="acid-button group inline-flex min-h-[54px] items-center justify-between gap-8 px-7"
              >
                EXPLORE ALL PRODUCTS

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* COMING SOON */}
      {isComingSoon && (
        <section className="relative overflow-hidden px-5 py-28 sm:px-10 md:px-12 md:py-40">
          <div className="pointer-events-none absolute -right-10 top-10 font-heading text-[35vw] leading-none tracking-[-0.1em] text-off-white/[0.035]">
            {collection.number}
          </div>

          <div className="relative z-10 mx-auto max-w-[1600px] text-center">
            <span className="section-label text-acid-lime">
              THE NEXT CHAPTER
            </span>

            <h2 className="mt-10 font-heading text-[clamp(4rem,11vw,11rem)] uppercase leading-[0.8] tracking-[-0.075em]">
              NOT YET.
              <br />
              <span className="text-acid-lime">NOT NEVER.</span>
            </h2>

            <p className="mx-auto mt-10 max-w-md font-body text-sm leading-8 text-off-white/55">
              Some things take time. Collection {collection.number} is still
              taking shape. Stay curious.
            </p>

            <div className="mt-12 inline-flex items-center gap-4 border border-acid-lime px-6 py-4">
              <span className="h-2 w-2 animate-pulse bg-acid-lime" />

              <span className="font-body text-[10px] font-bold tracking-[0.2em] text-acid-lime">
                COMING SOON — {collection.number}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* CLOSING CAMPAIGN */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-obsidian px-5 pb-12 pt-28 sm:px-10 sm:pb-16 md:min-h-[85vh] md:px-12">
        <Image
          src={collection.closing}
          alt={`${collection.name} closing campaign`}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <span className="section-label text-acid-lime">
            AFTERHOURS / END OF CHAPTER {collection.number}
          </span>

          <h2 className="mt-8 font-heading text-[clamp(3.5rem,9vw,9rem)] uppercase leading-[0.82] tracking-[-0.07em]">
            THE NIGHT
            <br />
            IS <span className="text-acid-lime">YOURS.</span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-off-white/30 pt-6 sm:flex-row sm:items-center">
            <Link
              href="/collections"
              className="group inline-flex w-fit items-center gap-3 font-body text-[10px] font-bold tracking-[0.18em] transition-colors hover:text-acid-lime"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              ALL COLLECTIONS
            </Link>

            <Link
              href="/shop"
              className="group inline-flex w-fit items-center gap-3 font-body text-[10px] font-bold tracking-[0.18em] text-acid-lime"
            >
              EXPLORE THE SHOP

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-12 flex justify-between font-body text-[9px] tracking-[0.2em] text-off-white/45">
            <span>NO CURFEW. NO RULES.</span>
            <span>AH / {collection.number}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
