import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    number: "001",
    name: "NO CURFEW.",
    subtitle: "NO RULES.",
    description: "A statement beyond the ordinary.",
    category: "THE SIGNATURE COLLECTION",
    year: "2026",
    image: "/images/collections/collection-001.png",
    href: "/collections/001",
    size: "large",
  },
  {
    number: "002",
    name: "AFTER THE",
    subtitle: "NOISE.",
    description: "Created for the ones who move differently.",
    category: "UNDERGROUND CULTURE",
    year: "2026",
    image: "/images/collections/collection-002.png",
    href: "/collections/002",
    size: "small",
  },
  {
    number: "003",
    name: "CONCRETE",
    subtitle: "CULTURE.",
    description: "Built around movement. Inspired by the streets.",
    category: "URBAN / UTILITY",
    year: "2026",
    image: "/images/collections/collection-003.png",
    href: "/collections/003",
    size: "small",
  },
  {
    number: "004",
    name: "THE",
    subtitle: "UNKNOWN.",
    description: "No boundaries. No predetermined direction.",
    category: "EXPERIMENTAL SERIES",
    year: "COMING SOON",
    image: "/images/collections/collection-004.png",
    href: "/collections/004",
    size: "large",
  },
];

function CollectionCard({ collection }) {
  const isLarge = collection.size === "large";

  return (
    <Link
      href={collection.href}
      className={`collection-card group relative block min-w-0 overflow-hidden bg-obsidian ${
        isLarge ? "md:col-span-7" : "md:col-span-5"
      }`}
    >
      {/* Collection image */}
      <div
        className={`relative overflow-hidden ${
          isLarge
            ? "aspect-[4/5] md:aspect-[1.15/1]"
            : "aspect-[4/5] md:aspect-[0.95/1]"
        }`}
      >
        <Image
          src={collection.image}
          alt={`${collection.name} ${collection.subtitle} streetwear campaign`}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-obsidian/20 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Collection number */}
        <div className="absolute left-5 top-5 flex items-center gap-2 md:left-7 md:top-7">
          <span className="bg-acid-lime px-3 py-1.5 font-body text-[10px] font-bold tracking-widest text-obsidian">
            {collection.number}
          </span>

          <span className="font-body text-[9px] font-semibold tracking-[0.2em] text-off-white">
            {collection.category}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute right-5 top-5 flex size-10 items-center justify-center border border-off-white/50 text-off-white transition-all duration-300 group-hover:border-acid-lime group-hover:bg-acid-lime group-hover:text-obsidian md:right-7 md:top-7">
          <ArrowUpRight size={19} />
        </div>

        {/* Collection title */}
        <div className="absolute bottom-0 left-0 w-full p-5 md:p-8">
          <p className="mb-3 font-body text-[9px] font-semibold tracking-[0.2em] text-acid-lime">
            {collection.year} / AFTERHOURS ARCHIVE
          </p>

          <h2 className="font-heading text-4xl uppercase leading-[0.95] tracking-tight text-off-white md:text-5xl lg:text-6xl">
            {collection.name}
            <br />
            <span className="text-acid-lime">{collection.subtitle}</span>
          </h2>

          <div className="mt-5 flex items-end justify-between gap-4">
            <p className="max-w-[240px] font-body text-xs leading-relaxed text-off-white/65 md:text-sm">
              {collection.description}
            </p>

            <span className="shrink-0 font-body text-[9px] font-bold tracking-[0.16em] text-off-white transition-colors group-hover:text-acid-lime">
              EXPLORE
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CollectionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian pt-28 text-off-white md:pt-36">
      {/* PAGE HEADER */}
      <section className="relative isolate overflow-hidden px-5 pb-14 md:px-12 md:pb-20">
        {/* Background typography */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 select-none font-heading text-[25vw] leading-none text-off-white/[0.025]"
        >
          01
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center justify-between border-b border-off-white/15 pb-4">
            <span className="section-label text-acid-lime">
              AFTERHOURS / ARCHIVE
            </span>

            <span className="section-label text-off-white/45">
              EST. AFTER DARK
            </span>
          </div>

          <p className="mb-5 section-label text-concrete">
            INDEPENDENT BY DESIGN.
          </p>

          {/* Main heading */}
          <h1 className="max-w-full font-heading text-[clamp(3rem,10.5vw,10rem)] uppercase leading-[0.82] tracking-[-0.065em]">
            THE
            <br />
            <span className="block text-acid-lime">COLLECTIONS.</span>
          </h1>

          {/* Description and archive CTA */}
          <div className="mt-10 flex flex-col gap-7 border-t border-off-white/15 pt-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <span className="section-label text-off-white/45">
              FOUR CHAPTERS. ONE IDENTITY.
            </span>

            <div className="flex w-full flex-col items-start sm:w-auto sm:max-w-[310px]">
              <p className="font-body text-sm leading-relaxed text-off-white/65 md:text-base">
                Different expressions. Different perspectives. One independent
                mindset.
              </p>

              <Link
                href="#collection-grid"
                className="acid-button group mt-7 inline-flex min-h-[48px] w-full items-center justify-between gap-5 px-5 sm:w-full"
              >
                EXPLORE THE ARCHIVE
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION GRID */}
      <section
        id="collection-grid"
        className="scroll-mt-28 px-5 pb-24 md:px-12 md:pb-32"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-7 flex items-center justify-between border-t border-off-white/15 pt-4">
            <span className="section-label">SELECTED COLLECTIONS</span>

            <span className="section-label text-off-white/45">001 — 004</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-7">
            {collections.map((collection) => (
              <CollectionCard key={collection.number} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="overflow-hidden border-t border-off-white/10 px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 section-label text-acid-lime">
            THIS IS AFTERHOURS.
          </p>

          <h2 className="font-heading text-[clamp(2.8rem,12vw,9rem)] uppercase leading-[0.85] tracking-[-0.055em]">
            NEVER JUST
            <br />
            <span className="text-outline-off-white">CLOTHING.</span>
          </h2>

          <div className="mt-10 flex flex-col justify-between gap-7 border-t border-off-white/15 pt-6 md:flex-row md:items-end">
            <p className="max-w-sm font-body text-sm leading-relaxed text-off-white/50">
              Not made to follow trends. Made to express something beyond them.
            </p>

            <Link
              href="/shop"
              className="acid-button group inline-flex min-h-[54px] items-center justify-between gap-8 px-7"
            >
              EXPLORE THE SHOP
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
