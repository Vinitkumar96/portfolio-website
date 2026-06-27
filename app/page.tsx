import Image from "next/image";
import Link from "next/link";
import { Stack, Projects, GithubContributions } from "@/components/sections";
import { FlipWords } from "@/components/ui/flip-words";
import { VerifiedIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SiteChrome } from "@/components/site";

const words = ["Engineer", "Fullstack dev", "Web dev", "Mobile dev", "devops"];

const edge =
  "border-neutral-300 dark:border-neutral-700/80 border-dashed border-x-1";

export default function Page() {
  return (
    <div className="instrument-serif w-full min-h-screen max-md:p-1">
      {/* navbar */}
      <div className="mx-auto max-w-3xl px-4 pt-3 border-neutral-300 dark:border-neutral-700/80 border-dashed border-x">
        <div className="flex items-center justify-between w-full">
          {/* Left*/}
          <div className="instrument-serif text-xl font-semibold">Vinit.</div>

          {/* Righ */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Link href="#experience">experience</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="#projects">projects</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="#connect">connect</Link>
            </Button>
            <SiteChrome />
          </div>
        </div>
      </div>

      {/* vinit kumar intro */}
      <div className={`mx-auto max-w-3xl border-x ${edge} px-4 py-6`}>
        <div className="rounded-2xl border border-neutral-300 border-t-neutral-300/35 bg-neutral-300/10 p-6 dark:bg-neutral-900/20 dark:border-neutral-600/70 dark:border-t-neutral-600/40">
          <div className="flex flex-col md:flex-row">
            <div className="max-md:w-fit flex-1 cursor-pointer rounded-[12px] border border-border bg-neutral-300/60 p-[4px] transition duration-300 hover:brightness-90 dark:bg-neutral-900">
              <Image
                src="/vinitbabu.png"
                width={80}
                height={80}
                alt="vinit pic"
                className="rounded-[12px] grayscale transition-all duration-200 hover:rotate-3 md:w-full"
              />
            </div>

            <div className="flex-5 flex-col pt-2 md:pl-4 md:pt-0">
              <h1 className="mb-0.5 flex items-center gap-2 text-3xl font-semibold instrument-serif">
                Vinit kumar
                <VerifiedIcon className="mt-1" />
              </h1>
              <div className="pl-0.5 text-[16px] text-neutral-600 dark:text-neutral-300">
                <FlipWords words={words} />
              </div>
              <p className="pl-0.5 font-normal tracking-wider text-sm  md:text-[16px] text-neutral-500 dark:text-neutral-400">
                I build and{" "}
                <span className="font-light dark:text-neutral-200 text-neutral-900">
                  ship products
                </span>{" "}
                at high speed, putting in the hours to turn ideas into working
                software. currently building projects for web and mobile and
                messing with devops and ai
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* expierence section pendinggggggggggggggggggggggggggggggggggg */}

      {/* projects part */}
      <div
        id="projects"
        className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-700/80"
      >
        <div className={`mx-auto max-w-3xl border-x ${edge} px-4 py-6`}>
          <div className="mb-2 flex items-center justify-between border-t border-dashed border-neutral-300 px-4 py-3 dark:border-neutral-600/80">
            <h2 className="instrument-serif text-2xl font-bold">Projects</h2>
            <Link href="/proj">
              <p className="group relative inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs text-neutral-600 transition-colors sm:px-5 sm:text-sm dark:text-neutral-300">
                <span
                  className="absolute inset-0 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px",
                  }}
                />
                <span className="absolute -left-[6px] -right-[6px] top-0 h-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="absolute -left-[6px] -right-[6px] bottom-0 h-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="absolute -top-[6px] -bottom-[6px] left-0 w-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="absolute -top-[6px] -bottom-[6px] right-0 w-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="relative">View More </span>
              </p>
            </Link>
          </div>
          <Projects />
        </div>
      </div>

      {/* tools and github contribution */}
      <div className="w-full border-y border-dashed border-neutral-300 dark:border-neutral-700/80">
        <div className={`mx-auto max-w-3xl border-x ${edge} px-4 pb-1 pt-4`}>
          <div>
            <h2 className="instrument-serif  ml-4 text-xl">
              I Tinker them
            </h2>
            <Stack />
            <GithubContributions />
          </div>
        </div>
      </div>

      {/*connect with me section */}
      <div
        id="connect"
        className={`text-center mx-auto max-w-3xl ${edge} pb-2 `}
      >
        <p className="instrument-serif text-5xl py-2">Let's work together.</p>
        <p className="instrument-serif text-md mb-2  max-w-2xl mx-auto text-neutral-300">
          I'm always looking forward to collaborating on exciting projects and
          exploring new opportunities. Feel free to reach out if you have an
          idea or simply want to chat about tech.
        </p>
        <div className="flex justify-center gap-x-3 mb-2 text-neutral-300">
          <Button variant="secondary">
            <Link href="mailto:vinitkumar93341@gmail.com">email</Link>
          </Button>
          <Button variant="secondary">
            <Link
              href={"https://www.linkedin.com/in/vinit-kumar-b14421378/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
          </Button>
          <Button variant={"secondary"}>
            <Link
              href={"https://github.com/Vinitkumar96"}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>
          </Button>
        </div>
        <p className="text-neutral-300">
          Currently available for freelance work and full‑time opportunities
          Response time: Usually within 24 hours
        </p>
      </div>

      {/* f o o t e r baby */}
      <div className="border max-w-3xl mx-auto rounded-sm py-2">
        <div className="max-w-3xl mx-auto text-center ">
          <p className="text-neutral-600">Be hungry be foolish 😋</p>
        </div>
      </div>
    </div>
  );
}
