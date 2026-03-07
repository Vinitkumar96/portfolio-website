import { Projects } from "@/components/sections";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="max-w-2xl pt-12 px-4 w-full mx-auto min-h-screen border border-neutral-900 bg-neutral-900/20">
      <div className="flex justify-between items-center px-4 pb-6">
        <h1 className="text-2xl font-bold instrument-serif">Projects</h1>
        <Link href="/">
          <div className="flex gap-2">
            <p className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm font-mono transition-colors group">
              <span
                className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px",
                }}
              ></span>
              <span className="absolute top-0 -left-[6px] -right-[6px] h-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
              <span className="absolute bottom-0 -left-[6px] -right-[6px] h-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
              <span className="absolute left-0 -top-[6px] -bottom-[6px] w-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
              <span className="absolute right-0 -top-[6px] -bottom-[6px] w-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors"></span>
              <span className="relative">Home</span>
            </p>
          </div>
        </Link>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
