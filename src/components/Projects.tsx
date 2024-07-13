import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "~/lib";
import { SECTIONS } from "~/constant";

const PROJECT: Omit<ProjectProps, "index">[] = [
  {
    image: "/open-source.webp",
    title: "Open source",
    description:
      "As a JavaScript developer, I frequently download packages from npm to streamline my work and boost productivity. However, I don't want to be just a consumer. After solving many problems locally, I'm now focused on publishing and sharing high-quality solutions with the community.",
    link: "https://www.npmjs.com/~ryn__bsd",
  },
  {
    image: "/github.webp",
    title: "Projects",
    description:
      "I have developed a variety of projects, ranging from small landing pages to e-commerce sites and full social media clones, all built from scratch. You can explore and test these projects in my repositories.",
    link: "https://github.com/RYNBSD",
  },
];

function Project({ index, image, title, description, link }: ProjectProps) {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } md:gap-20 gap-5 w-full items-center`}
    >
      {index % 2 !== 0 ? (
        <motion.FadeLeft className="flex-1 w-full">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            className="object-cover h-96 rounded-xl"
          />
        </motion.FadeLeft>
      ) : (
        <motion.FadeRight className="flex-1 w-full">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            className="object-cover h-96 rounded-xl"
          />
        </motion.FadeRight>
      )}

      <div className="flex-1 flex flex-col gap-7">
        <h1 className="text-white text-5xl font-extrabold leading-[56px]">
          {index > 9 ? index : `0${index}`}
        </h1>
        <h1 className="text-white text-[32px] font-bold leading-10">{title}</h1>
        <motion.Paragraph
          className="text-zinc-500 leading-normal tracking-tight"
          paragraph={description}
        />
        <Link target="_blank" href={link}>
          <FaExternalLinkAlt color="#fff" size={20} />
        </Link>
      </div>
    </div>
  );
}

type ProjectProps = {
  index: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

export default function Projects() {
  return (
    <section id={SECTIONS.PROJECTS} className="bg-black p-5">
      <div className="container mx-auto bg-black">
        <h1 className="text-5xl leading-[56px] text-center text-white font-extrabold p-5 mb-5">
          <span className="font-normal">My</span> Projects
        </h1>
        <div className="flex flex-col gap-5 p-5">
          {PROJECT.map((project, index) => (
            <Project key={project.title} index={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
