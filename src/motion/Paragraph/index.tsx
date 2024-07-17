"use client";

import type {
  ComponentProps,
  ElementRef,
  ForwardRefRenderFunction,
} from "react";
import type { motion } from "framer-motion";
import { forwardRef, useMemo } from "react";
import { Motion } from "~/lib";
import Span from "./Span";

const Paragraph: ForwardRefRenderFunction<
  ElementRef<typeof motion.p>,
  Props
> = ({ paragraph, ...props }, ref) => {
  const characters = useMemo(() => paragraph.split(""), [paragraph]);

  return (
    <Motion
      element="p"
      ref={ref}
      transition={{ staggerChildren: 1 }}
      {...props}
    >
      {characters.map((character, index) =>
        character === " " ? (
          <span key={index}>{character}</span>
        ) : (
          <Span key={index} character={character} />
        )
      )}
    </Motion>
  );
};

type Props = {
  paragraph: string;
} & ComponentProps<typeof motion.p>;

export default forwardRef(Paragraph);
