"use client";

import type { ReactNode } from "react";
import { Atropos as AtroposReact } from "atropos/react";

export default function Atropos({ children, className }: Props) {
  return (
    <AtroposReact shadow={false} className={className}>
      {children}
    </AtroposReact>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};
