const highlight =
  "font-semibold text-foreground underline decoration-neutral-400 underline-offset-2 dark:decoration-neutral-600";

const About = () => {
  return (
    <div className="w-full border-t-2 border-dashed border-neutral-300 dark:border-neutral-800/60">
      <div className="mx-auto max-w-3xl border-x-2 border-dashed border-neutral-300 px-4 py-6 dark:border-neutral-800/60">
        <div className="mb-3 border-t-2 border-dashed border-neutral-300 px-4 py-3 dark:border-neutral-600/80">
          <h2 className="instrument-serif text-3xl font-bold">About</h2>
        </div>

        <ul className="space-y-3 px-4 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
            <span>
              I&apos;m a{" "}
              <strong className={highlight}>Full Stack Developer</strong> who
              enjoys turning ideas into fast, reliable products across web and
              mobile.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
            <span>
              I build with{" "}
              <strong className={highlight}>
                Next.js, React, Node.js, Tailwind
              </strong>{" "}
              focusing on clean APIs, performance, and smooth interactions.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
            <span>
              Currently interning as a Full Stack Engineer, I&apos;m exploring
              devops and AI while shipping projects for web and mobile at high
              speed.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
