"use client";

import { motion, type Variants } from "framer-motion";
import { memo, type FC } from "react";
import PropTypes from "prop-types";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
} satisfies Variants;

const Span: FC<Props> = ({ character, index }) => {
  return (
    <motion.span
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay: index * 0.025 },
        },
      }}
      initial="hidden"
      whileInView="visible"
    >
      {character}
    </motion.span>
  );
};

Span.propTypes = {
  character: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

type Props = {
  character: string;
  index: number;
};

export default memo(Span);
