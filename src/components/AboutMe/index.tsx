import { motion } from "~/lib";
import { SECTIONS } from "~/constant";
import Avatar from "./Avatar";

const paragraphs = [
  `My passion for computer science began in childhood, driven by a
fascination with how electricity could be transformed into interactive
technology and a desire to become a game developer. I started learning
programming with Python at 17, just after high school, mastering the
basics of programming and object-oriented programming (OOP), and
honing my problem-solving skills. This initial exposure solidified my
interest in pursuing a career in computer science.`,
  `In university, I chose to major in Computer Science, learning C and
teaching myself C++ in my first year while focusing on
problem-solving. During my second year, I transferred to Hsoub Academy
for a computer science degree, where a professor recommended I learn
JavaScript (JS). Despite finding JS challenging due to its syntax, I
persevered and delved into web development, learning HTML, CSS, SASS,
JS, and JQuery for client-side development, and NodeJS and ExpressJS
for server-side development, which marked the beginning of my web
development journey.`,
  `As I advanced, I learned ReactJS and Redux to create high-quality web
applications, practicing extensively through various projects. My
curiosity and commitment to using the best tools led me to TypeScript.
While client-side development intrigued me, I was particularly drawn
to backend development, dedicating a year to mastering it with my
background in Python, C, and C++. By my third year at university, I
was designing and architecting scalable backend solutions using
ExpressJS, TypeScript, PostgreSQL, and SwaggerUI. Currently, I am
enhancing my frontend skills with ReactJS and React Native, exploring
advanced topics like animations, 3D, and web3.`,
];

export default function AboutMe() {
  return (
    <section
      id={SECTIONS.ABOUT_ME}
      className="container mx-auto flex md:gap-20 gap-5 items-center flex-col md:flex-row my-5 px-5"
    >
      <div className="flex-1 gap-10">
        <Avatar />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-5xl leading-[56px] font-extrabold p-5 mb-5">
          <span className="font-normal">About</span> Me
        </h1>
        {paragraphs.map((paragraph) => {
          return <motion.Paragraph key={paragraph} paragraph={paragraph} />;
        })}
      </div>
    </section>
  );
}
