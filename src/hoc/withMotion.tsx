"use client";

import type { ComponentProps, ComponentType, FC } from "react";
import { motion } from "framer-motion";

type Motion = typeof motion;
type MotionElements = keyof Motion;
type MotionElement<T extends MotionElements> = Motion[T];

export default function withMotion<
  M extends MotionElements,
  P extends JSX.IntrinsicAttributes = {}
>(Component: FC<P>, element: M, motionProps: ComponentProps<MotionElement<M>>) {
  const Element = motion[element] as ComponentType<
    ComponentProps<MotionElement<M>>
  >;

  return function MotionComponent(fcProps: P) {
    return (
      <Element {...motionProps}>
        <Component {...fcProps} />
      </Element>
    );
  };
}
