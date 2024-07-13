"use client";

import type {
  ComponentProps,
  ElementRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { forwardRef, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Fade from "./Fade";

const FadeTop: ForwardRefRenderFunction<ElementRef<typeof motion.div>, Props> = (
  { children, startY, duration, ...props },
  ref
) => {
  const variants = useMemo(
    () =>
      ({
        hidden: {
          opacity: 0,
          y: startY ?? -50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
          },
        },
      } satisfies Variants),
    [duration, startY]
  );

  return (
    <Fade
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      {...props}
    >
      {children}
    </Fade>
  );
};

type Props = {
  children: ReactNode;
  startY?: number | `${number}` | string;
  duration?: number;
} & Omit<
  ComponentProps<typeof motion.div>,
  "variants" | "initial" | "whileInView" | "animate"
>;

export default forwardRef(FadeTop);
