import dynamic from "next/dynamic";

export const Atropos = dynamic(() => import("./Atropos"));
export * as motion from "./motion/index";
