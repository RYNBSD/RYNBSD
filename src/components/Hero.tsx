import Image from "next/image";
import Icon from "./global/Icon";
import { SOCIAL } from "~/constant";

export default async function Hero() {
  return (
    <header className="container mx-auto flex md:gap-20 gap-5 md:flex-row-reverse flex-col my-5 px-5">
      <div className="relative flex-1">
        <Image
          src="/cover.webp"
          alt="Cover"
          width={1280}
          height={720}
          priority
          className="w-full h-full relative object-contain before:content-[''] before:absolute before:bg-black before:rounded before:w-full before:h-full before:left-0 before:bottom-0 before:z-10"
        />
        {/* <div className="absolute bg-black rounded w-full h-1 left-0 bottom-0 z-10" /> */}
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-center items-start">
        <h1 className="text-black text-[28px] md:text-5xl font-normal leading-[1.25] md:leading-[56px]">
          Hello I&apos;m{" "}
          <span className="font-extrabold">Boussayed Rayen.</span>
          <br />
          <span className="font-extrabold">Software Engineer</span>
          <br />
          Based In <span className="font-extrabold">Algeria.</span>
        </h1>
        <p className="text-zinc-500 text-base font-normal leading-normal tracking-tight">
          I&apos;m Boussayed Rayen, a{" "}
          <a href="https://github.com/RYNBSD" className="underline">
            software engineer
          </a>{" "}
          an{" "}
          <a href="https://www.youtube.com/@ryn__bsd" className="underline">
            content creator
          </a>
          . All my projects are built from scratch, from planning and designing
          all the way to solve real-life problem with code. The same for my
          content, from ideas to recoding and sharing.
        </p>
        <div className="w-full flex gap-5 justify-start">
          {SOCIAL.map((social) => (
            <Icon key={social.link} {...social} />
          ))}
        </div>
      </div>
    </header>
  );
}
