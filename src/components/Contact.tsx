import { SECTIONS, SOCIAL } from "~/constant";
import Icon from "./global/Icon";
import nodemailer from "nodemailer";

export default async function Contact() {
  async function action(formData: FormData) {
    "use server";
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const text = ((formData.get("email") as string) +
      " " +
      formData.get("description")) as string;

    await transport.sendMail({
      to: process.env.EMAIL_USER,
      from: formData.get("email") as string,
      subject: formData.get("subject") as string,
      text,
    });
    transport.close();
  }

  return (
    <section
      id={SECTIONS.CONTACT_ME}
      className="container mx-auto flex flex-col items-center md:flex-row md:gap-20 gap-5 my-5 px-5"
    >
      <form className="flex-1 w-full flex flex-col gap-5" action={action}>
        <input
          className="px-6 py-4 rounded border border-black text-zinc-500 leading-tight"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="px-6 py-4 rounded border border-black text-zinc-500 leading-tight"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="px-6 py-4 rounded border border-black text-zinc-500 leading-tight resize-none"
          placeholder="How can I help?"
          name="description"
          required
          rows={5}
        ></textarea>
        <div className="flex flex-col xl:flex-row gap-4">
          <div>
            <button
              className="px-5 py-3 bg-black rounded text-white text-xl font-semibold leading-normal tracking-tight"
              type="submit"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex gap-4">
            {SOCIAL.map((social) => (
              <Icon key={social.link} {...social} />
            ))}
          </div>
        </div>
      </form>
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-black text-[28px] xl:text-5xl font-extrabold leading-[1.25] md:leading-[56px]">
          Let&apos;s <span className="font-normal">talk</span> for something
          special
        </h1>
        <p className="text-zinc-500 leading-normal tracking-tight">
          I&apos;m passionate about building, teaching, and guiding in mobile,
          web, and server development. Let&apos;s collaborate to turn your ideas
          into reality—reach out and let&apos;s create something extraordinary
          together!
        </p>
        <h2 className="font-semibold leading-loose text-[28px]">
          rynbsd04@gmail.com
        </h2>
      </div>
    </section>
  );
}
