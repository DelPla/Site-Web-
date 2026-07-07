import { Cpu, HeartHandshake, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import { fadeUp, stagger } from "../lib/motion";
import content from "../content/site.json";

const ICONS: Record<string, LucideIcon> = {
  cpu: Cpu,
  "heart-handshake": HeartHandshake,
};

export default function Thesis() {
  const { thesis } = content;

  return (
    <section id="thesis" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{thesis.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-sand sm:text-5xl">
            {thesis.title}
            <br />
            <span className="text-gold-gradient">{thesis.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-mute">{thesis.intro}</p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-6 md:grid-cols-2"
        >
          {thesis.columns.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className="glass group relative overflow-hidden rounded-3xl p-8 sm:p-10"
              >
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-80`}
                />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white/[0.03] text-gold-400">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <p className="mt-6 eyebrow !text-mute">{c.tag}</p>
                  <h3 className="mt-2 font-display text-2xl text-sand">
                    {c.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-mute">{c.body}</p>
                </div>
              </motion.article>
            );
          })}

          {/* Center connective hairline on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-24 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold-500/60 to-transparent md:block" />
        </motion.div>
      </div>
    </section>
  );
}
