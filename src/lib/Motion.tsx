"use client";
import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      duration: 0.35
    },
  },
};

export default function Motion({ children, className }: Props) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

type Props = {
  children: ReactNode;
  className: string;
  fade: "in" | "left" | "right" | "top" | "bottom";
};
