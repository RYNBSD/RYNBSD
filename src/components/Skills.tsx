import Image from "next/image";
import { SECTIONS } from "~/constant";
import { Atropos } from "~/lib";
import { Fade } from "~/motion"

const SKILL: SkillProps[] = [
  { image: "/git.webp", name: "Git" },
  // { image: "/JS.webp", name: "JavaScript" },
  { image: "/TS.webp", name: "TypeScript" },
  { image: "/react-js.webp", name: "ReactJS" },
  { image: "/next-js.webp", name: "NextJS" },
  { image: "/expo.webp", name: "Expo" },
  { image: "/TailwindCSS.webp", name: "TailwindCSS" },
  { image: "/socket-io.svg.webp", name: "Socket.IO" },
  { image: "/express-js.webp", name: "ExpressJS" },
  { image: "/postgresql.webp", name: "PostgreSQL" },
  { image: "/jest.webp", name: "Jest" },
];

function Skill({ image, name }: SkillProps) {
  return (
    <Fade viewport={{ once: true }}>
      <Atropos className="grid place-content-center">
        <div className="flex flex-col w-40 h-40 border-[2px] border-black gap-3 justify-center items-center">
          <Image
            src={image}
            alt={name}
            width={1280}
            height={720}
            className="object-contain w-14 h-14"
            data-atropos-offset="5"
          />
          <h2 className="text-center text-xl font-bold leading-normal capitalize">
            {name}
          </h2>
        </div>
      </Atropos>
    </Fade>
  );
}

type SkillProps = { image: string; name: string };

export default async function Skills() {
  return (
    <section id={SECTIONS.SKILLS} className="container mx-auto my-5">
      <h1 className="text-5xl leading-[56px] text-center font-extrabold p-5 mb-5">
        <span className="font-normal">My</span> Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {SKILL.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
