import { motion } from "motion/react";
import Reveal from "./Reveal";
import { fadeUp, stagger } from "../lib/motion";
import content from "../content/site.json";

export default function Fluency() {
  const { fluency } = content;

  return (
    <section id="fluency" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">{fluency.eyebrow}</p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-sand sm:text-5xl">
              {fluency.title}
              <br />
              <span className="text-gold-gradient">{fluency.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-md text-mute">{fluency.intro1}</p>
            <p className="mt-4 max-w-md text-mute">{fluency.intro2}</p>
          </Reveal>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {fluency.langs.map((l) => (
              <motion.li
                key={l.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass group rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(202,138,4,0.5)]"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl text-sand">
                    {l.native}
                  </span>
                  <span className="eyebrow !text-mute">{l.name}</span>
                </div>
                <div className="hairline my-4 opacity-50 transition-opacity group-hover:opacity-100" />
                <p className="text-sm leading-relaxed text-mute">{l.note}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
