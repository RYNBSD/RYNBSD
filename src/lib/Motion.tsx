"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Motion = typeof motion;
type MotionElements = keyof Motion;
type MotionElement<M extends MotionElements> = Motion[M];

export default function Motion<M extends MotionElements>({
  children,
  element,
  ...props
}: Props<M> & ComponentProps<MotionElement<M>>) {
  const shouldReduceMotion = useReducedMotion();
  const Element = motion[element];

  return shouldReduceMotion ? (
    children ? (
      children
    ) : (
      // @ts-ignore
      <Element {...props} />
    )
  ) : (
    // @ts-ignore
    <Element {...props}>{children}</Element>
  );
}

type Props<M extends MotionElements> = {
  element: M;
  children?: ReactNode;
};
