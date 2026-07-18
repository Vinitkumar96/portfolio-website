import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { Mail, ArrowUpRight } from "lucide-react";

type ContactLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const links: ContactLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Vinitkumar96",
    icon: <FaGithub className="size-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vinit-kumar-b14421378/",
    icon: <FaLinkedin className="size-4" />,
  },
  {
    name: "Mail",
    href: "mailto:vinitkumar93341@gmail.com",
    icon: <Mail className="size-4" strokeWidth={1.75} />,
  },
   {
    name: "Resume",
    href: "https://drive.google.com/file/d/1f0E14HjcQr0ZOoFnOSHuMm9SVGuuOz8j/view?usp=sharing",
    icon: <GoPaperclip className="size-4" /> ,
  },
];

const Connect = () => {
  return (
    <div
      id="contact"
      className="w-full border-t-2 border-dashed border-neutral-300 dark:border-neutral-800/60"
    >
      <div className="mx-auto max-w-3xl border-x-2 border-dashed border-neutral-300 px-4 py-6 dark:border-neutral-800/60">
        <div className="mb-2">
          <h2 className="instrument-serif text-3xl font-bold">Contact</h2>
        </div>

        <div className="flex flex-wrap gap-2 px-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg   bg-panel px-3.5 py-2.5 text-sm text-neutral-700  dark:text-neutral-300  dark:hover:text-neutral-100 transition-all duration-200"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
