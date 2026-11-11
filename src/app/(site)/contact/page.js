
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";

const contactOptions = [
  {
    number: "01",
    title: "GENERAL INQUIRIES",
    description: "Questions, feedback or just want to say hello.",
    action: "hello@afterhours.studio",
    href: "mailto:hello@afterhours.studio",
  },
  {
    number: "02",
    title: "COLLABORATIONS",
    description: "Creative projects, partnerships and collaborations.",
    action: "LET'S CREATE",
    href: "mailto:hello@afterhours.studio?subject=Collaboration%20Inquiry",
  },
  {
    number: "03",
    title: "PRESS & MEDIA",
    description: "Editorial features, interviews and media inquiries.",
    action: "GET IN TOUCH",
    href: "mailto:hello@afterhours.studio?subject=Press%20Inquiry",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-obsidian text-off-white">

      {/* HERO */}
      <section className="relative flex min-h-[75svh] flex-col justify-end px-6 pb-16 pt-40 md:px-12 md:pb-24">

        {/* Background Monogram */}
        <div className="pointer-events-none absolute right-[-5%] top-[18%] select-none font-heading text-[40vw] leading-none text-off-white/[0.025]">
          AH
        </div>

        <div className="relative z-10">

          {/* Section Header */}
          <div className="mb-10 flex items-center justify-between border-b border-off-white/20 pb-4">
            <span className="section-label text-acid-lime">
              AFTERHOURS / CONTACT
            </span>

            <span className="section-label text-off-white/40">
              OPEN CHANNEL — 001
            </span>
          </div>

          <p className="section-label mb-6 text-off-white/50">
            HAVE SOMETHING TO SAY?
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-[clamp(4rem,13vw,12rem)] leading-[0.82] tracking-[-0.07em]">
            LET&apos;S
            <br />
            <span className="text-acid-lime">TALK.</span>
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="font-body max-w-md text-sm leading-7 text-off-white/55 md:text-base">
              Ideas start somewhere. Whether it&apos;s a collaboration,
              a question or something completely unexpected,
              we&apos;re listening.
            </p>

            <a
              href="#contact-options"
              className="group inline-flex items-center gap-4 self-start border-b border-acid-lime pb-3 font-body text-[11px] font-bold tracking-[0.15em] text-acid-lime"
            >
              FIND YOUR CHANNEL

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section
        id="contact-options"
        className="bg-off-white px-6 py-24 text-obsidian md:px-12 md:py-32"
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="section-label mb-5 text-obsidian/45">
              THE RIGHT CONNECTION
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[-0.05em] md:text-7xl">
              PICK YOUR
              <br />
              <span className="text-obsidian/25">CHANNEL.</span>
            </h2>
          </div>

          <p className="font-body max-w-xs text-sm leading-6 text-obsidian/55">
            Every conversation starts somewhere. Choose the channel
            that makes sense.
          </p>
        </div>

        {/* Contact List */}
        <div className="border-t border-obsidian/20">
          {contactOptions.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group grid gap-6 border-b border-obsidian/20 py-9 transition-colors duration-300 hover:bg-obsidian/[0.025] md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:px-4"
            >
              <span className="section-label text-obsidian/40">
                / {item.number}
              </span>

              <h3 className="font-heading text-2xl tracking-tight md:text-3xl">
                {item.title}
              </h3>

              <div>
                <p className="font-body mb-2 max-w-sm text-sm leading-6 text-obsidian/50">
                  {item.description}
                </p>

                <span className="font-body text-xs font-bold tracking-wider">
                  {item.action}
                </span>
              </div>

              <ArrowUpRight
                size={23}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </section>

      {/* CLOSING CAMPAIGN */}
      <section className="relative overflow-hidden px-6 py-28 md:px-12 md:py-40">

        {/* Background Typography */}
        <div className="pointer-events-none absolute bottom-[-15%] right-[-5%] select-none font-heading text-[35vw] leading-none text-off-white/[0.025]">
          24/7
        </div>

        <div className="relative z-10">

          <p className="section-label mb-8 text-acid-lime">
            NO CURFEW. NO RULES.
          </p>

          <h2 className="font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] tracking-[-0.065em]">
            THE NIGHT
            <br />
            <span className="text-acid-lime">IS YOURS.</span>
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/shop"
              className="acid-button group inline-flex min-h-12 items-center gap-4 px-6"
            >
              EXPLORE THE SHOP

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/"
              className="inline-flex min-h-12 items-center gap-3 border border-off-white/25 px-6 font-body text-[11px] font-bold tracking-widest transition-colors duration-300 hover:border-acid-lime hover:text-acid-lime"
            >
              <ArrowLeft size={15} />
              BACK HOME
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
