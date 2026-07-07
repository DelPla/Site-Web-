import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Linkedin, ChevronDown } from "lucide-react";
import { stagger, fadeUp, blurReveal } from "../lib/motion";
import content from "../content/site.json";

const LINKEDIN =
  "https://www.linkedin.com/in/delphine-planes-302aa730";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax — content drifts up & fades as you scroll (§7 parallax-subtle)
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { hero } = content;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh items-center justify-center px-6 pt-28"
    >
      <motion.div
        style={{ y, opacity }}
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-content text-center"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
            <span className="eyebrow !text-mute">{hero.eyebrow}</span>
          </span>
        </motion.div>

        {/* Headline — the pitch */}
        <motion.h1
          variants={blurReveal}
          className="mx-auto max-w-5xl font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-sand sm:text-6xl lg:text-7xl"
        >
          {hero.headlinePre}{" "}
          <span className="text-gold-gradient italic">{hero.headlineHighlight}</span>
          <br className="hidden sm:block" /> {hero.headlinePost}
        </motion.h1>

        {/* Sub-pitch */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mute sm:text-lg"
        >
          {hero.subPitchPre}{" "}
          <span className="text-sand">{hero.subPitchHighlight}</span>{" "}
          {hero.subPitchPost}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 font-medium text-ink-950 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(202,138,4,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            {hero.ctaPrimary}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-sand transition-all duration-300 hover:border-gold-600/60 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/60"
          >
            <Linkedin className="h-4 w-4 text-gold-400" />
            {hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Languages — "global fluency" made literal */}
        <motion.ul
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-3"
        >
          {hero.languages.map((lang) => (
            <li
              key={lang}
              className="rounded-full border border-line bg-white/[0.02] px-4 py-1.5 text-sm text-mute"
            >
              {lang}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#thesis"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute/70 transition-colors hover:text-gold-400"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
