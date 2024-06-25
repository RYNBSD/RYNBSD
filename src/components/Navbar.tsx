import type { IconType } from "react-icons";
import Link from "next/link";
import { MdOutlineFileDownload, MdMenu } from "react-icons/md";
import { SECTIONS } from "~/constant";

const LINK: NavLinkProps[] = [
  {
    link: SECTIONS.ABOUT_ME,
    section: "About Me",
  },
  {
    link: SECTIONS.SKILLS,
    section: "Skills",
  },
  {
    link: SECTIONS.PROJECTS,
    section: "Projects",
  },
  {
    link: SECTIONS.CONTACT_ME,
    section: "Contact Me",
  },
];

function NavLink({ link, section }: NavLinkProps) {
  return (
    <li>
      <Link
        className="capitalize leading-normal font-semibold text-xl"
        href={`#${link}`}
      >
        {section}
      </Link>
    </li>
  );
}

type NavLinkProps = {
  link: string;
  section: string;
};

const BUTTON: NavButtonProps[] = [
  {
    link: "/resume.pdf",
    content: "Resume",
    Icon: MdOutlineFileDownload,
  },
  {
    link: "/certifications.pdf",
    content: "Certification",
    Icon: MdOutlineFileDownload,
  },
];

function NavButton({ link, content, Icon }: NavButtonProps) {
  return (
    <Link
      className="flex items-center gap-2 px-2 md:px-5 py-1 md:py-3 bg-black rounded text-white text-base sm:text-sm md:text-xl font-semibold leading-normal tracking-tight"
      target="_blank"
      href={link}
    >
      {content} <Icon color="#fff" />
    </Link>
  );
}

type NavButtonProps = {
  link: string;
  content: string;
  Icon: IconType;
};

export default async function Navbar() {
  return (
    <nav className="container mx-auto flex gap-5 items-center justify-between p-5">
      <div className="flex-1 xl:flex-[0.25]">
        <h1 className="font-bold text-3xl leading-normal">RYNBSD</h1>
      </div>
      <ul className="flex-1 hidden xl:flex items-center justify-around">
        {LINK.map((link) => (
          <NavLink key={link.section} {...link} />
        ))}
      </ul>
      <div className="flex-1 xl:flex-[0.5] flex gap-2 items-center  justify-end xl:justify-around">
        {BUTTON.map((btn) => (
          <NavButton key={btn.content} {...btn} />
        ))}
      </div>
      {/* <div className="flex-1 flex xl:hidden">
        <MdMenu color="#000" className="hamburger" />
        <div className="hamburger-menu">asdasdasd</div>
      </div> */}
    </nav>
  );
}
