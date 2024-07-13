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

const FadeIn: ForwardRefRenderFunction<ElementRef<typeof motion.div>, Props> = (
  { children, duration, ...props },
  ref
) => {
  const variants = useMemo(
    () =>
      ({
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration,
          },
        },
      } satisfies Variants),
    [duration]
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
  duration?: number;
} & Omit<
  ComponentProps<typeof motion.div>,
  "variants" | "initial" | "whileInView" | "animate"
>;

export default forwardRef(FadeIn);
