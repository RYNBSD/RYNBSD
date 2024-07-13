"use client";

import type {
  ComponentProps,
  ElementRef,
  ForwardRefRenderFunction,
  ReactNode,
} from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const Fade: ForwardRefRenderFunction<ElementRef<typeof motion.div>, Props> = (
  { children, ...props },
  ref
) => {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
};

type Props = {
  children: ReactNode;
} & ComponentProps<typeof motion.div>;

export default forwardRef(Fade);
