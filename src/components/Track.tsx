import { motion } from "motion/react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { fadeUp, stagger } from "../lib/motion";
import content from "../content/site.json";

export default function Track() {
  const { track } = content;

  return (
    <section id="track" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4"
        >
          {track.stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="bg-ink-950/70 p-8 text-center"
            >
              <div className="font-display text-5xl text-gold-gradient sm:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className="mx-auto mt-3 max-w-[14rem] text-sm text-mute">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <Reveal className="mx-auto mt-24 max-w-2xl text-center">
          <p className="eyebrow">{track.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-sand sm:text-4xl">
            {track.title}
          </h2>
        </Reveal>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold-500/60 via-line to-transparent md:left-1/2" />
          {track.milestones.map((m, i) => (
            <motion.li
              key={m.title}
              variants={fadeUp}
              className={`relative mb-10 pl-9 md:w-1/2 ${
                i % 2 === 0
                  ? "md:ml-0 md:pl-0 md:pr-16 md:text-right"
                  : "md:ml-auto md:pl-16"
              }`}
            >
              <span
                className={`absolute top-6 h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-ink-950 ${
                  i % 2 === 0
                    ? "left-0 md:left-auto md:-right-[7px]"
                    : "left-0 md:left-[-7px]"
                }`}
              />
              <p className="eyebrow !text-mute">{m.period}</p>
              <h3 className="mt-1.5 font-display text-xl text-sand">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{m.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
