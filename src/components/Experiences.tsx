import Image from "next/image";
import { Fade } from "~/motion";

const EXPERIENCE: ExperienceProps[] = [
  {
    image: "/upwork.webp",
    title: "Freelancing",
    description:
      "Freelancing was challenging at first, particularly in convincing clients I was the right choice and meeting their expectations. After working on many projects, I can now confidently say: I can build your dream product—just provide the right resources, and I'll exceed your expectations.",
    startAt: "Nov 2022",
    endAt: "Present",
  },
  {
    image: "/youtube.webp",
    title: "Teaching",
    description:
      "Helping people benefits both sides. I assist beginners with quality resources, simple explanations, and a clear path from start to finish. In return, I gain experience in communication, simplifying complex problems, and sometimes discovering new things.",
    startAt: "Feb 2023",
    endAt: "Present",
  },
];

function Experience({
  image,
  title,
  description,
  startAt,
  endAt,
}: ExperienceProps) {
  return (
    <Fade
      className="flex flex-col gap-7 rounded-[10px] border border-zinc-500 px-6 py-[30px] transition hover:bg-zinc-800"
      viewport={{ once: true }}
    >
      <div className="flex justify-between flex-wrap items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            className="object-contain w-8 h-8"
          />
          <h2 className="text-white text-2xl font-semibold leading-7">
            {title}
          </h2>
        </div>
        <p className="text-zinc-300 font-semibold leading-tight">
          {startAt} - {endAt}
        </p>
      </div>
      <p className="text-zinc-300 leading-normal tracking-tight">
        {description}
      </p>
    </Fade>
  );
}

type ExperienceProps = {
  image: string;
  title: string;
  description: string;
  startAt: string;
  endAt: "Present" | (string & {});
};

export default function Experiences() {
  return (
    <section className="bg-black p-5">
      <div className="container mx-auto bg-black">
        <h1 className="text-5xl leading-[56px] text-center text-white font-extrabold p-5 mb-5">
          <span className="font-normal">My</span> Experiences
        </h1>
        <div className="flex flex-col gap-5 p-5">
          {EXPERIENCE.map((experience) => (
            <Experience key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
