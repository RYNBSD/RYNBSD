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

const FadeRight: ForwardRefRenderFunction<ElementRef<typeof motion.div>, Props> = (
  { children, startX, duration, ...props },
  ref
) => {
  const variants = useMemo(
    () =>
      ({
        hidden: {
          opacity: 0,
          x: startX ?? 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration,
          },
        },
      } satisfies Variants),
    [duration, startX]
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
  startX?: number | `${number}` | string;
  duration?: number;
} & Omit<
  ComponentProps<typeof motion.div>,
  "variants" | "initial" | "whileInView" | "animate"
>;

export default forwardRef(FadeRight);
