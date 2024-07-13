import { motion } from "~/lib";

export default function Footer() {
  return (
    <motion.FadeBottom>
      <footer className="bg-black">
        <div className="container mx-auto py-5">
          <h1 className="text-white text-center font-semibold leading-tight">
            &copy;RYNBSD. All rights reserved
          </h1>
        </div>
      </footer>
    </motion.FadeBottom>
  );
}
