import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const values = [
  {
    number: "01",
    title: "INDEPENDENCE.",
    description:
      "We don't follow the noise. We create our own direction, our own identity and our own rules.",
    keyword: "OWN YOUR DIRECTION",
  },
  {
    number: "02",
    title: "EXPRESSION.",
    description:
      "Clothing is more than appearance. It's a way to communicate who you are without saying a word.",
    keyword: "SAY IT WITHOUT WORDS",
  },
  {
    number: "03",
    title: "REBELLION.",
    description:
      "Question the ordinary. Challenge expectations. Never let the world decide who you should be.",
    keyword: "NEVER BLEND IN",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-obsidian text-off-white">
      {/* HERO */}
      <section className="relative flex min-h-[90svh] items-end overflow-hidden bg-obsidian px-5 pb-12 pt-36 sm:px-10 sm:pb-16 md:px-12 md:pb-20">
        <Image
          src="/images/about/about-hero.png"
          alt="AFTERHOURS underground streetwear campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="mb-10 flex items-center justify-between border-b border-off-white/25 pb-5">
            <span className="section-label text-acid-lime">
              BEHIND THE BRAND
            </span>

            <span className="section-label text-off-white/60">
              EST. AFTER DARK — 001
            </span>
          </div>

          <p className="mb-5 font-body text-[10px] font-bold tracking-[0.3em] text-acid-lime">
            AN INDEPENDENT STREETWEAR CONCEPT
          </p>
          <h1 className="font-heading text-[clamp(3rem,13vw,15rem)] uppercase leading-[0.76] tracking-[-0.075em] sm:text-[15vw] md:text-[12vw]">
            WE ARE
            <br />
<span className="text-acid-lime ">
  AFTERHOURS.
</span>          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-off-white/30 pt-6 md:flex-row md:items-end">
            <p className="max-w-lg font-body text-sm leading-7 text-off-white/75 md:text-base">
              An independent streetwear concept built around individuality,
              creative freedom and the culture that comes alive after dark.
            </p>

            <a
              href="#story"
              className="group inline-flex w-fit items-center gap-4 font-body text-[10px] font-bold tracking-[0.2em] text-acid-lime"
            >
              SCROLL TO DISCOVER
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-2"
              />
            </a>
          </div>

          <div className="mt-12 hidden items-center justify-between font-body text-[9px] tracking-[0.2em] text-off-white/45 md:flex">
            <span>NO CURFEW. NO RULES.</span>
            <span>CHENNAI / EVERYWHERE</span>
            <span>AH — 001</span>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section
        id="story"
        className="relative px-5 py-24 sm:px-10 md:px-12 md:py-36"
      >
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12 md:gap-10">
          <div className="relative md:col-span-4">
            <span className="section-label text-acid-lime">01 / OUR STORY</span>

            <p className="mt-6 max-w-xs font-body text-sm leading-7 text-concrete">
              NOT ANOTHER STREETWEAR LABEL. A DIFFERENT WAY OF THINKING.
            </p>

            <div className="mt-16 hidden md:block">
              <span className="font-heading text-[clamp(7rem,14vw,13rem)] leading-none tracking-[-0.1em] text-off-white/[0.06]">
                AH
              </span>

              <p className="-mt-5 font-body text-[9px] tracking-[0.2em] text-concrete">
                INDEPENDENT BY DESIGN
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-heading text-[clamp(2.8rem,6.5vw,7rem)] uppercase leading-[0.91] tracking-[-0.06em]">
              BUILT FOR
              <br />
              THOSE WHO
              <br />
              <span className="text-acid-lime">MOVE</span> DIFFERENT.
            </h2>

            <div className="mt-12 grid gap-8 border-t border-off-white/20 pt-8 md:grid-cols-2">
              <p className="font-body text-sm leading-8 text-off-white/65">
                AFTERHOURS exists in the space between fashion, art and
                underground culture. Inspired by the energy of the city,
                independent creators and people who refuse to blend in.
              </p>

              <p className="font-body text-sm leading-8 text-off-white/65">
                We believe personal style should have no boundaries. Every
                silhouette, visual and creative direction is an opportunity to
                express something different.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <span className="h-px w-12 bg-acid-lime" />
              <span className="font-body text-[9px] font-bold tracking-[0.2em] text-acid-lime">
                THIS IS OUR POINT OF VIEW.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGE */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden bg-obsidian md:h-[85vh]">
        <Image
          src="/images/about/about-editorial.png"
          alt="AFTERHOURS streetwear editorial photography"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-5 right-5 flex items-end justify-between sm:bottom-12 sm:left-10 sm:right-10 md:left-12 md:right-12">
          <div>
            <span className="mb-5 block font-body text-[9px] font-bold tracking-[0.25em] text-acid-lime">
              THE AFTERHOURS MINDSET
            </span>

            <h2 className="font-heading text-5xl uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl md:text-8xl">
              THE NIGHT
              <br />
              IS <span className="text-acid-lime">YOURS.</span>
            </h2>
          </div>

          <span className="section-label hidden text-off-white/70 md:block">
            AFTERHOURS / VISUAL JOURNAL
          </span>
        </div>

        <span className="absolute right-5 top-8 font-body text-[9px] tracking-[0.2em] text-off-white/70 sm:right-10 md:right-12">
          IMAGE ARCHIVE — 001
        </span>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-5 py-24 sm:px-10 md:px-12 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 flex flex-col justify-between gap-6 border-b border-off-white/20 pb-8 md:flex-row md:items-end">
            <div>
              <span className="section-label text-acid-lime">
                02 / WHAT WE BELIEVE
              </span>

              <h2 className="mt-6 font-heading text-[clamp(2.8rem,6vw,6rem)] uppercase leading-[0.9] tracking-[-0.06em]">
                OUR
                <br className="md:hidden" /> PHILOSOPHY.
              </h2>
            </div>

            <p className="max-w-xs font-body text-xs leading-6 text-concrete">
              THREE IDEAS. ONE MINDSET.
              <br />
              NEVER JUST CLOTHING.
            </p>
          </div>

          <div>
            {values.map((value) => (
              <div
                key={value.number}
                className="group grid gap-6 border-b border-off-white/15 py-10 transition-colors duration-500 md:grid-cols-12 md:items-center md:py-14"
              >
                <div className="flex items-center justify-between md:col-span-1">
                  <span className="section-label text-concrete">
                    {value.number}
                  </span>

                  <span className="font-body text-[9px] tracking-[0.15em] text-concrete md:hidden">
                    {value.keyword}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <h3 className="font-heading text-[clamp(2rem,4.5vw,5rem)] uppercase leading-none tracking-[-0.055em] transition-colors duration-300 group-hover:text-acid-lime">
                    {value.title}
                  </h3>
                </div>

                <p className="max-w-sm font-body text-sm leading-7 text-off-white/55 md:col-span-4">
                  {value.description}
                </p>

                <div className="hidden items-center justify-end md:col-span-1 md:flex">
                  <ArrowUpRight
                    size={24}
                    className="text-acid-lime transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between font-body text-[9px] tracking-[0.2em] text-concrete">
            <span>THE FOUNDATION</span>
            <span>AH / 002</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative overflow-hidden bg-acid-lime px-5 py-24 text-obsidian sm:px-10 md:px-12 md:py-36">
        <div className="absolute right-5 top-5 font-heading text-[20vw] leading-none tracking-[-0.1em] text-obsidian/[0.06] md:right-12">
          AH
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          <div className="flex items-center justify-between border-b border-obsidian/30 pb-5">
            <span className="section-label">03 / THE MANIFESTO</span>

            <span className="section-label">NO CURFEW. NO RULES.</span>
          </div>

          <h2 className="mt-14 font-heading text-[13vw] uppercase leading-[0.81] tracking-[-0.075em] md:mt-20 md:text-[10vw]">
            NOT MADE
            <br />
            FOR EVERYONE.
            <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_#111111]">
              MADE FOR
            </span>
            <br />
            YOURSELF.
          </h2>

          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-obsidian/30 pt-6 md:flex-row md:items-end">
            <p className="max-w-sm font-body text-sm leading-7">
              You don't need permission to be different. You just need the
              confidence to own it.
            </p>

            <span className="section-label">EXIST BEYOND EXPECTATIONS.</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-5 py-28 sm:px-10 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px] text-center">
          <span className="section-label text-acid-lime">
            YOUR STORY STARTS HERE
          </span>

          <h2 className="mt-8 font-heading text-[clamp(3rem,9vw,10rem)] uppercase leading-[0.82] tracking-[-0.07em]">
            FIND YOUR
            <br />
            <span className="text-acid-lime">AFTERHOURS.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-sm font-body text-sm leading-7 text-concrete">
            Discover the collections. Find your expression. Move differently.
          </p>

          <Link
            href="/collections"
            className="acid-button group mx-auto mt-12 flex min-h-[58px] w-fit items-center justify-between gap-10 px-7"
          >
            <span>EXPLORE COLLECTIONS</span>

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <div className="mt-24 flex items-center justify-between border-t border-off-white/15 pt-6 font-body text-[9px] tracking-[0.2em] text-concrete">
            <span>AFTERHOURS / 001</span>
            <span>MADE AFTER DARK.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
