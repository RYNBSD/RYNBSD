"use client";

import type { ReactNode, ComponentProps } from "react";
import { Atropos as AtroposReact } from "atropos/react";

export default function Atropos({ children, ...props }: Props) {
  return (
    <AtroposReact shadow={false} {...props}>
      {children}
    </AtroposReact>
  );
}

type Props = {
  children: ReactNode;
} & ComponentProps<typeof AtroposReact>;
