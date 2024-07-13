"use client";

import type {
  ComponentProps,
  ElementRef,
  ForwardRefRenderFunction,
} from "react";
import { forwardRef, useMemo } from "react";
import { motion } from "framer-motion";
import Span from "./Span";

const Paragraph: ForwardRefRenderFunction<ElementRef<"p">, Props> = (
  { paragraph, ...props },
  ref
) => {
  const characters = useMemo(() => paragraph.split(""), [paragraph]);
  return (
    <motion.p ref={ref} {...props}>
      {characters.map((character, index) =>
        character === " " ? (
          <span key={index}>{character}</span>
        ) : (
          <Span key={index} index={index} character={character} />
        )
      )}
    </motion.p>
  );
};

type Props = {
  paragraph: string;
} & ComponentProps<typeof motion.p>;

export default forwardRef(Paragraph);
