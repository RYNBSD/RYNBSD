import {
  AboutMe,
  Contact,
  Experiences,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
  // Testimonial,
} from "~/components";

export default async function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experiences />
      <AboutMe />
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}
