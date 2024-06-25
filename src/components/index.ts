import dynamic from "next/dynamic";

export const Navbar = dynamic(() => import("./Navbar"));
export const Hero = dynamic(() => import("./Hero"));
export const Skills = dynamic(() => import("./Skills"));
export const Experiences = dynamic(() => import("./Experiences"));
export const AboutMe = dynamic(() => import("./AboutMe"));
export const Projects = dynamic(() => import("./Projects"));
export const Testimonial = dynamic(() => import("./Testimonial"));
export const Contact = dynamic(() => import("./Contact"));
export const Footer = dynamic(() => import("./Footer"));
