import { useState } from "react";
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
  const services = expertise.services;
  const [selected, setSelected] = useState<number | null>(null);

  // Even placement around the orbit (percentages of a square box).
  const RADIUS = 42;
  const nodes = services.map((s, i) => {
    const angle = ((-90 + i * (360 / services.length)) * Math.PI) / 180;
    return {
      ...s,
      x: 50 + RADIUS * Math.cos(angle),
      y: 50 + RADIUS * Math.sin(angle),
    };
  });

  const active = selected !== null ? services[selected] : null;
  const ActiveIcon = active ? ICONS[active.icon] : null;

  return (
    <section id="expertise" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{expertise.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl leading-tight text-sand sm:text-5xl">
            {expertise.title}
            <span className="text-gold-gradient"> {expertise.titleHighlight}</span>
          </h2>
        </Reveal>

        {/* Orbital diagram — desktop / tablet.
            Hovering pauses the rotation so a node is easy to click. */}
        <div className="group relative mx-auto mt-16 hidden aspect-square w-full max-w-[600px] md:block">
          {/* Main ring the nodes travel along */}
          <div
            className="absolute rounded-full border border-gold-500/25"
            style={{ inset: "8%" }}
          />

          {/* Rotating layer: spokes + nodes (rotates continuously) */}
          <div className="orbit-rotate absolute inset-0">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              {nodes.map((n) => (
                <line
                  key={n.title}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="rgba(173,134,54,0.35)"
                  strokeWidth="0.13"
                />
              ))}
            </svg>

            {nodes.map((n, i) => {
              const Icon = ICONS[n.icon];
              const isActive = i === selected;
              return (
                <button
                  key={n.title}
                  type="button"
                  onClick={() => setSelected(isActive ? null : i)}
                  aria-label={n.title}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {/* counter-rotate so icon + name stay upright while orbiting */}
                  <span className="orbit-rotate-rev flex w-[124px] flex-col items-center">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-full border bg-white transition-all duration-300 ${
                        isActive
                          ? "scale-110 border-gold-500 text-gold-600 shadow-[0_0_0_5px_rgba(173,134,54,0.16),0_16px_36px_-16px_rgba(27,44,70,0.6)]"
                          : "border-gold-500/40 text-gold-500 shadow-[0_14px_34px_-18px_rgba(27,44,70,0.55)] group-hover:hover:border-gold-500/70"
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <span
                      className={`mt-2 font-display text-sm font-medium leading-tight transition-colors ${
                        isActive ? "text-gold-600" : "text-navy"
                      }`}
                    >
                      {n.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Static centre. Small hub at rest; expands into a description
              card only when an expertise is selected. */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            {active && ActiveIcon ? (
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-[260px] flex-col items-center justify-center rounded-[1.75rem] px-6 py-7 text-center"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(173,134,54,0.35)",
                  boxShadow: "0 22px 60px -28px rgba(27,44,70,0.55)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/40 text-gold-500">
                  <ActiveIcon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-3 font-display text-lg leading-tight text-navy">
                  {active.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-mute">
                  {active.body}
                </p>
              </motion.div>
            ) : (
              <div
                className="flex aspect-square w-[136px] flex-col items-center justify-center rounded-full text-center"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(173,134,54,0.3)",
                  boxShadow: "0 16px 44px -28px rgba(27,44,70,0.45)",
                }}
              >
                <span className="px-3 font-display text-sm leading-tight text-navy/80">
                  {expertise.centerLabel}
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 hidden text-center text-xs text-mute md:block">
          Click an expertise to read more.
        </p>

        {/* Fallback list — mobile */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:hidden"
        >
          <div className="bg-white/60 p-6 text-center">
            <p className="font-display text-xl text-navy">
              {expertise.centerLabel}
            </p>
          </div>
          {services.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="group relative bg-ink-950/60 p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-gold-500">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 font-display text-lg text-sand">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{s.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
