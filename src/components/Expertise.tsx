import { motion } from "motion/react";
import {
  Globe2,
  Factory,
  Handshake,
  LineChart,
  ShieldCheck,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { fadeUp, stagger } from "../lib/motion";
import content from "../content/site.json";

const ICONS: Record<string, LucideIcon> = {
  globe2: Globe2,
  factory: Factory,
  handshake: Handshake,
  "line-chart": LineChart,
  "shield-check": ShieldCheck,
  boxes: Boxes,
};

export default function Expertise() {
  const { expertise } = content;

  return (
    <section id="expertise" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{expertise.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-sand sm:text-5xl">
            {expertise.title}
            <span className="text-gold-gradient"> {expertise.titleHighlight}</span>
          </h2>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertise.services.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="group relative bg-ink-950/60 p-8 transition-colors duration-300 hover:bg-ink-900/80"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-gold-400 transition-colors duration-300 group-hover:border-gold-600/50">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl text-sand">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{s.body}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
