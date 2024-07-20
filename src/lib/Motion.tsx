"use client";

import type { ComponentProps, ReactNode } from "react";
import { createElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Motion = typeof motion;
type MotionElements = keyof Motion;
type MotionElement<M extends MotionElements> = Motion[M];

export default function Motion<M extends MotionElements>({
  children,
  element,
  ...props
}: Props<M>) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = motion[element];

  return shouldReduceMotion ? (
    createElement(element, props, children)
  ) : children ? (
    // @ts-ignore
    <MotionElement {...props}>{children}</MotionElement>
  ) : (
    // @ts-ignore
    <MotionElement {...props} />
  );
}

type Props<M extends MotionElements> = {
  element: M;
  children?: ReactNode;
} & ComponentProps<MotionElement<M>>;
