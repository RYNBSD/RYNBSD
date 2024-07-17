import dynamic from "next/dynamic";

export const Paragraph = dynamic(() => import("./Paragraph/index"));

export const Fade = dynamic(() => import("./Fade/index"));
export const FadeLeft = dynamic(() => import("./Fade/FadeLeft"));
export const FadeRight = dynamic(() => import("./Fade/FadeRight"));
export const FadeTop = dynamic(() => import("./Fade/FadeTop"));
export const FadeBottom = dynamic(() => import("./Fade/FadeBottom"));
