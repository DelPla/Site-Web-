import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import content from "../content/site.json";

const LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "Expertise", href: "#expertise" },
  { label: "Fluency", href: "#fluency" },
  { label: "Track Record", href: "#track" },
  { label: "Contact", href: "#contact" },
];

/**
 * `linkPrefix` lets the same nav work on standalone pages (legal pages):
 * pass "/" so links point back to the home page's sections instead of
 * to anchors that don't exist on the current page.
 */
type Props = { linkPrefix?: string };

export default function Nav({ linkPrefix = "" }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigation } = content;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-content items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass mx-4 md:mx-auto" : "bg-transparent"
        }`}
        style={{ maxWidth: scrolled ? "1100px" : "1200px" }}
      >
        <a href={linkPrefix ? "/" : "#top"} className="group flex items-center gap-3">
          {navigation.headerPhoto ? (
            <img
              src={navigation.headerPhoto}
              alt="Delphine Planes"
              className="h-9 w-9 rounded-full border border-gold-600/40 object-cover"
            />
          ) : (
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-600/40 font-display text-gold-400">
              DP
            </span>
          )}
          <span className="font-display text-base tracking-wide text-sand sm:text-lg">
            Delphine&nbsp;Planes
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={linkPrefix + l.href}
              className="relative text-sm text-mute transition-colors duration-200 hover:text-sand focus-visible:text-sand focus-visible:outline-none after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkPrefix + "#contact"}
            className="hidden rounded-full border border-gold-600/50 bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-400 transition-all duration-300 hover:bg-gold-500/20 hover:text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 sm:block"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gold-600/50 bg-gold-500/10 text-gold-500 transition-colors hover:bg-gold-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="glass absolute inset-x-0 top-[calc(100%+0.75rem)] mx-1 rounded-3xl p-3 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={linkPrefix + l.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-sand transition-colors hover:bg-gold-500/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href={linkPrefix + "#contact"}
              onClick={() => setMenuOpen(false)}
              className="mt-1 block rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Get in touch
            </a>
          </nav>
        )}
      </div>
    </motion.header>
  );
}
