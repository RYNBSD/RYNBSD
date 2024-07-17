"use client";

import type { Variants } from "framer-motion";
import { memo, type FC } from "react";
import PropTypes from "prop-types";
import { Motion } from "~/lib";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
} satisfies Variants;

const Span: FC<Props> = ({ character }) => {
  return (
    <Motion
      element="span"
      viewport={{ once: true }}
      variants={variants}
      transition={{
        duration: 1,
      }}
      initial="hidden"
      whileInView="visible"
    >
      {character}
    </Motion>
  );
};

Span.propTypes = {
  character: PropTypes.string.isRequired,
};

type Props = {
  character: string;
};

export default memo(Span);
