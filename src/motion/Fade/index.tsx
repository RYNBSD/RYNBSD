"use client";

import type {
  ComponentProps,
  ElementRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import type { motion, Variants } from "framer-motion";
import { forwardRef, useMemo } from "react";
import { Motion } from "~/lib";

const Fade: ForwardRefRenderFunction<ElementRef<typeof motion.div>, Props> = (
  { children, ...props },
  ref
) => {
  const variants = useMemo(() => {
    const initialVariant = props.variants?.[`${props.initial}`] ?? {};
    const animateVariant = props.variants?.[`${props.animate}`] ?? {};
    const whileInViewVariant = props.variants?.[`${props.whileInView}`] ?? {};

    return {
      initial: {
        opacity: 0,
        ...initialVariant,
      },
      animate: {
        opacity: 1,
        ...animateVariant,
        ...whileInViewVariant,
      },
    } satisfies Variants;
  }, [props.animate, props.initial, props.variants, props.whileInView]);

  return (
    <Motion
      element="div"
      {...props}
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      {children}
    </Motion>
  );
};

type Props = {
  children: ReactNode;
} & ComponentProps<typeof motion.div>;

export default forwardRef(Fade);
