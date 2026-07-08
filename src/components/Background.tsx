import { motion, useReducedMotion } from "motion/react";

/** Animated gradient-mesh blobs + grid — the "futuristic" canvas behind content. */
export default function Background() {
  const reduce = useReducedMotion();

  const blob = (extra: object) =>
    reduce
      ? {}
      : {
          animate: { x: [0, 30, -20, 0], y: [0, -40, 20, 0], ...extra },
          transition: { duration: 22, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* Warm gold wash top-right */}
      <motion.div
        className="absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(173,134,54,0.16), transparent 65%)" }}
        {...blob({ scale: [1, 1.12, 1] })}
      />
      {/* Soft navy wash bottom-left */}
      <motion.div
        className="absolute -bottom-52 -left-40 h-[44rem] w-[44rem] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(27,44,70,0.12), transparent 65%)" }}
        {...blob({ scale: [1, 1.08, 1] })}
      />
      {/* Warm ivory highlight for depth */}
      <motion.div
        className="absolute left-1/3 top-1/4 h-[30rem] w-[30rem] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%)" }}
        {...blob({})}
      />

      {/* Faint engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,44,70,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,44,70,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 78%)",
        }}
      />

      {/* Soft vignette to frame the cream */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(27,44,70,0.06))]" />
    </div>
  );
}
