"use client";

import type {
  ComponentProps,
  ElementRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { forwardRef, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Fade from ".";

/**
 * @deprecated
 */
const FadeIn: ForwardRefRenderFunction<ElementRef<typeof motion.div>, Props> = (
  { children, duration, ...props },
  ref
) => {
  const variants = useMemo(
    () =>
      ({
        hidden: {},
        visible: {
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
