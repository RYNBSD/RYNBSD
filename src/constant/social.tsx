import type { IconType } from "react-icons";
import { FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

export const SOCIAL: Readonly<Social[]> = [
  {
    Icon: FaGithub,
    link: "https://github.com/RYNBSD",
  },
  {
    Icon: FaYoutube,
    link: "https://www.youtube.com/@ryn__bsd",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/ryn__bsd/",
  },
  {
    Icon: FaTwitter,
    link: "https://x.com/RynBsd",
  },
];

type Social = {
  Icon: IconType;
  link: string;
};
