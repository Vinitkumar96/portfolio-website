import Link from "next/link";
import Image from "next/image";
import {
  Stack,
  Projects,
  Experience,
  GithubContributions,
  Connect,
} from "@/components/sections";
import { FlipWords } from "@/components/ui/flip-words";
import { VerifiedIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SiteChrome } from "@/components/site";

const words = ["Engineer", "Fullstack dev", "Web dev", "Mobile dev", "devops"];

const edge =
  "border-neutral-300 dark:border-neutral-800/60 border-dashed border-x-2";

export default function Page() {
  return (
    <div className="w-full min-h-screen max-md:p-1">
      {/* navbar */}
      <div className="sticky top-0 z-40 mx-auto max-w-3xl border-x-2 border-b-2 border-dashed border-neutral-300 bg-background/80 px-4 pt-3 pb-1 backdrop-blur-md dark:border-neutral-800/60">
        <div className="flex items-center justify-between w-full">
          {/* Left*/}
          <Link href={"/"}>
            <div className="instrument-serif text-2xl font-semibold">
              Vinit.
            </div>
          </Link>

          {/* Righ */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Link href="#experience">experience</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="#projects">projects</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="#contact">contact</Link>
            </Button>
            <SiteChrome />
          </div>
        </div>
      </div>

      {/* vinit kumar intro */}
      <div className={`mx-auto max-w-3xl  ${edge} px-2 pb-4 `}>
        <div className="relative rounded-2xl   bg-panel p-6 ">
          {/* banner */}
          <div className="relative z-0 aspect-[16/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/banner/hero.jpg"
              alt="banner"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover brightness-[0.9] dark:brightness-[0.3] "
            />
          </div>

          {/* avatar overlapping banner + name */}
          <div className="relative z-10 flex items-end  gap-4 -mt-14 md:-mt-16 bg-neutral-300/50  dark:bg-neutral-600/10 rounded-b-2xl">
            <div className="w-fit shrink-0 rounded-2xl bg-neutral-300/60 p-1 shadow-sm ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl md:h-28 md:w-28">
                <Image
                  src="/vinit.png"
                  alt="Vinit kumar"
                  fill
                  sizes="(max-width: 768px) 96px, 112px"
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="flex-col md:mb-3 mb-2">
              <h1 className="flex items-center gap-2 text-4xl md:text-5xl font-semibold instrument-serif dark:text-white text-black">
                Vinit kumar
                <VerifiedIcon className="mt-1" />
              </h1>
              <div className="pl-0.5 text-[16px] font-semibold text-neutral-700 dark:text-neutral-200">
                <FlipWords words={words} />
              </div>
            </div>
          </div>

          <p className="pl-0.5 pt-4 font-normal tracking-wide text-sm  md:text-[16px] text-neutral-500 dark:text-neutral-400">
            I build and{" "}
            <span className="font-semibold underline decoration-neutral-400 underline-offset-2 dark:text-neutral-200 dark:decoration-neutral-600 text-neutral-900">
              ship products
            </span>{" "}
            at high speed, putting in the hours to turn ideas into working
            software. Currently building projects for web and mobile and
            messing with devops and ai.
          </p>
        </div>
      </div>

      <Experience />

      <Connect />

      {/* projects part */}
      <div
        id="projects"
        className="w-full border-t-2 border-dashed border-neutral-300 dark:border-neutral-800/60"
      >
        <div className={`mx-auto max-w-3xl border-x-2 ${edge} px-4 py-6`}>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="instrument-serif text-3xl font-bold">Projects</h2>
            <Link href="https://github.com/Vinitkumar96" target="_blank">
              <p className="group relative inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs text-neutral-600 transition-colors sm:px-5 sm:text-sm dark:text-neutral-300">
                <span
                  className="absolute inset-0 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px",
                  }}
                />
                <span className="absolute -left-1.5 -right-1.5 top-0 h-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="absolute -left-1.5 -right-1.5 bottom-0 h-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="absolute -top-1.5 -bottom-1.5 left-0 w-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="absolute -top-1.5 -bottom-1.5 right-0 w-px bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <span className="relative">View More </span>
              </p>
            </Link>
          </div>
          <Projects />
        </div>
      </div>

      {/* tools and github contribution */}
      <div className="w-full border-y-2 border-dashed border-neutral-300 dark:border-neutral-800/60">
        <div className={`mx-auto max-w-3xl border-x-2 ${edge} px-4 pb-1 pt-4`}>
          <div>
            <h2 className="instrument-serif  ml-4 text-2xl">I Tinker them</h2>
            <Stack />
            <GithubContributions />
          </div>
        </div>
      </div>

      {/* closing cta */}
      <div className={`text-center mx-auto max-w-3xl ${edge} pb-2 `}>
        <p className="instrument-serif text-6xl py-2">Arise.</p>
      </div>
    </div>
  );
}
