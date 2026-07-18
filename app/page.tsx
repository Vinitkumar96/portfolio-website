import Link from "next/link";
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
import { SiteChrome, AvatarSwitcher } from "@/components/site";

const words = ["Engineer", "Fullstack dev", "Web dev", "Mobile dev", "devops"];

const edge =
  "border-neutral-300 dark:border-neutral-800/60 border-dashed border-x-2";

export default function Page() {
  return (
    <div className="w-full min-h-screen max-md:p-1">
      {/* navbar */}
      <div className="sticky top-0 z-40 mx-auto max-w-3xl border-x-2 border-b-2 border-dashed border-neutral-300 bg-background/80 px-4 pt-3 pb-3 backdrop-blur-md dark:border-neutral-800/60">
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
      <div className={`mx-auto max-w-3xl  ${edge} px-4 py-6`}>
        <div className="rounded-2xl   bg-panel p-6 ">
          <div className="flex flex-col md:flex-row md:items-center">
            <AvatarSwitcher />

            <div className="flex-5 flex-col pt-2 md:pl-4 md:pt-0">
              <h1 className="mb-0.5 flex items-center gap-2 text-4xl font-semibold instrument-serif">
                Vinit kumar
                <VerifiedIcon className="mt-1" />
              </h1>
              <div className="pl-0.5 text-[16px] font-semibold text-neutral-700 dark:text-neutral-200">
                <FlipWords words={words} />
              </div>
              <p className="pl-0.5 font-normal tracking-wide text-sm  md:text-[16px] text-neutral-500 dark:text-neutral-400">
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
