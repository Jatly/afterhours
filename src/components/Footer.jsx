
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const footerLinks = [
  {
    title: "EXPLORE",
    links: [
      { label: "Shop All", href: "/shop" },
      { label: "Collection 001", href: "/collections/001" },
      { label: "New Arrivals", href: "/shop?filter=new" },
      { label: "Our Story", href: "/about" },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M14 3v11.2a4.2 4.2 0 1 1-4-4.2" />
      <path d="M14 3c.4 3 2.3 4.8 5 5" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("ENTER YOUR EMAIL ADDRESS.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("THAT EMAIL DOESN'T LOOK RIGHT.");
      return;
    }

    // Frontend demo only — connect an API or newsletter service later.
    setMessage("YOU'RE ON THE LIST. STAY DIFFERENT.");
    setEmail("");
  };

  return (
    <footer className="overflow-hidden bg-obsidian text-off-white">
      {/* Newsletter */}
      <section className="relative border-b border-off-white/15 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 font-body text-[10px] font-semibold tracking-[0.28em] text-acid-lime">
              THE AFTERHOURS FREQUENCY — 001
            </p>

            <h2 className="font-heading max-w-3xl text-[clamp(3.5rem,8vw,8rem)] uppercase leading-[0.85] tracking-[-0.045em]">
              GET IN.
              <br />
              STAY{" "}
              <span className="text-acid-lime">DIFFERENT.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="mb-8 max-w-md font-body text-sm leading-7 text-off-white/55">
              No noise. No unnecessary updates. Just new drops,
              exclusive releases and things worth staying up for.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex border-b border-off-white/50 transition-colors focus-within:border-acid-lime"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                placeholder="YOUR EMAIL ADDRESS"
                className="min-w-0 flex-1 bg-transparent py-5 font-body text-xs tracking-[0.12em] text-off-white outline-none placeholder:text-off-white/35"
                required
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="group flex items-center gap-3 py-5 pl-4 font-body text-[10px] font-bold tracking-[0.15em] text-acid-lime transition-colors hover:text-off-white"
              >
                SIGN ME UP

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </form>

            <p
              aria-live="polite"
              className={`mt-4 min-h-4 font-body text-[10px] tracking-[0.12em] ${
                message.includes("ON THE LIST")
                  ? "text-acid-lime"
                  : "text-off-white/50"
              }`}
            >
              {message}
            </p>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-[1.3fr_1fr_1fr_0.8fr]">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                aria-label="AFTERHOURS home"
                className="inline-flex"
              >
                <Image
                  src="/logos/afterhours.svg"
                  alt="AFTERHOURS"
                  width={230}
                  height={48}
                  className="h-auto w-[190px] object-contain object-left"
                  unoptimized
                />
              </Link>

              <p className="mt-7 max-w-[260px] font-body text-sm leading-7 text-off-white/45">
                Independent streetwear for those who move differently.
                Made after dark. Worn without permission.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-off-white/20 transition-all hover:border-acid-lime hover:bg-acid-lime hover:text-obsidian"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center border border-off-white/20 transition-all hover:border-acid-lime hover:bg-acid-lime hover:text-obsidian"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>

            {/* Navigation */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="mb-7 font-body text-[10px] font-bold tracking-[0.2em] text-acid-lime">
                  {group.title}
                </h3>

                <ul className="space-y-5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-2 font-body text-sm text-off-white/55 transition-colors hover:text-off-white"
                      >
                        {link.label}

                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Location / Contact */}
            <div>
              <h3 className="mb-7 font-body text-[10px] font-bold tracking-[0.2em] text-acid-lime">
                FIND US
              </h3>

              <p className="font-body text-sm leading-7 text-off-white/55">
                Independent by design.
                <br />
                Online, everywhere.
              </p>

              <a
                href="mailto:hello@afterhours.com"
                className="mt-5 inline-flex items-center gap-2 font-body text-sm text-off-white transition-colors hover:text-acid-lime"
              >
                Get in touch
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Giant wordmark */}
          <div className="mt-24 overflow-hidden border-t border-off-white/15 pt-8 md:mt-32">
            <p className="mb-5 font-body text-[9px] tracking-[0.25em] text-off-white/35">
              NOT MADE FOR EVERYONE. MADE FOR YOURSELF.
            </p>

            <div className="relative">
              <p className="font-heading select-none whitespace-nowrap text-[12.6vw] leading-[0.8] tracking-[-0.055em] text-off-white">
                AFTERHOURS
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col gap-5 border-t border-off-white/15 pt-6 font-body text-[9px] font-medium tracking-[0.15em] text-off-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              ©{year || "2026"} AFTERHOURS. ALL RIGHTS RESERVED.
            </p>

            <p>NO CURFEW. NO RULES.</p>

            <a
              href="#top"
              className="group inline-flex items-center gap-2 self-start text-off-white transition-colors hover:text-acid-lime sm:self-auto"
            >
              BACK TO TOP

              <span className="flex h-7 w-7 items-center justify-center border border-off-white/25 transition-all group-hover:border-acid-lime group-hover:bg-acid-lime group-hover:text-obsidian">
                <ArrowUp size={13} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
