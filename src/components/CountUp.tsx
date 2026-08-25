import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type Props = { to: number; suffix?: string; duration?: number };

/** Counts from 0 to `to` once the element scrolls into view. */
export default function CountUp({ to, suffix = "", duration = 1.6 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  // Filet de sécurité : useInView peut ne jamais se déclencher (traduction
  // automatique qui remplace les nœuds, onglet resté en arrière-plan pendant
  // le scroll). Plutôt que d'afficher un 0 trompeur, on pose la valeur finale
  // dès qu'on constate que l'élément est bel et bien à l'écran.
  useEffect(() => {
    if (inView) return;
    const id = window.setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (visible) {
        setValue((v) => (v === 0 ? to : v));
        window.clearInterval(id);
      }
    }, 1200);
    return () => window.clearInterval(id);
  }, [inView, to]);

  return (
    <span ref={ref} translate="no" className="notranslate tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
