import type { IconType } from "react-icons";
import Link from "next/link";
import { Fade } from "~/motion";

export default async function Icon({ Icon, link }: Props) {
  return (
    <Fade viewport={{ once: true }}>
      <Link
        className="grid place-content-center py-3 px-3 border-[2px] border-black rounded transition hover:bg-black hover:text-white"
        href={link}
      >
        <Icon size={24} />
      </Link>
    </Fade>
  );
}

type Props = {
  Icon: IconType;
  link: string;
};
