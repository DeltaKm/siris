"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Ritardo in secondi, utile per effetti a cascata */
  delay?: number;
  /** Direzione di ingresso */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Quanto l'elemento deve essere visibile prima di animarsi */
  amount?: number;
  once?: boolean;
}

const offsets = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/** Wrapper riutilizzabile: fa comparire il contenuto durante lo scroll. */
export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  amount = 0.25,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? offsets.none : offsets[from];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
