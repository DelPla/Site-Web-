import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import content from "../content/site.json";

/** Full-bleed pull-quote with a word-by-word scroll highlight. */
export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });

  const words = content.quote.text.split(" ");

  return (
    <section className="relative z-10 px-6 py-32 sm:py-44">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <p className="flex flex-wrap justify-center gap-x-2.5 gap-y-1 font-display text-2xl leading-snug sm:text-4xl">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.18, 1]
            );
            return (
              <motion.span key={i} style={{ opacity }} className="text-sand">
                {w}
              </motion.span>
            );
          })}
        </p>
        <div className="mx-auto mt-8 h-px w-16 bg-gold-500/60" />
        <p className="mt-5 eyebrow !text-mute">Delphine Planes</p>
      </div>
    </section>
  );
}
