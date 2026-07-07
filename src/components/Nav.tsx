import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "Expertise", href: "#expertise" },
  { label: "Fluency", href: "#fluency" },
  { label: "Track Record", href: "#track" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`mx-auto flex max-w-content items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass mx-4 md:mx-auto" : "bg-transparent"
        }`}
        style={{ maxWidth: scrolled ? "1100px" : "1200px" }}
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-600/40 font-display text-gold-400">
            DP
          </span>
          <span className="hidden font-display text-lg tracking-wide text-sand sm:block">
            Delphine&nbsp;Planes
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-mute transition-colors duration-200 hover:text-sand focus-visible:text-sand focus-visible:outline-none after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-gold-600/50 bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-400 transition-all duration-300 hover:bg-gold-500/20 hover:text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
