import dynamic from "next/dynamic";

export const Paragraph = dynamic(() => import("./Paragraph/index"));

export const Fade = dynamic(() => import("./Fade"));
export const FadeIn = dynamic(() => import("./FadeIn"));
export const FadeLeft = dynamic(() => import("./FadeLeft"));
export const FadeRight = dynamic(() => import("./FadeRight"));
export const FadeTop = dynamic(() => import("./FadeTop"));
export const FadeBottom = dynamic(() => import("./FadeBottom"));
