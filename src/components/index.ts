import dynamic from "next/dynamic";

export const Navbar = dynamic(() => import("./Navbar"));
export const Hero = dynamic(() => import("./Hero/index"));
export const Skills = dynamic(() => import("./Skills"));
export const Experiences = dynamic(() => import("./Experiences"));
export const AboutMe = dynamic(() => import("./AboutMe/index"));
export const Projects = dynamic(() => import("./Projects"));
export const Testimonial = dynamic(() => import("./Testimonial"));
export const Contact = dynamic(() => import("./Contact/index"));
export const Footer = dynamic(() => import("./Footer"));
