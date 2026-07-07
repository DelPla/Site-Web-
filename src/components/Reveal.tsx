import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp } from "../lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "p";
};

/** Scroll-triggered reveal. Animates once when ~25% in view. */
export default function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
