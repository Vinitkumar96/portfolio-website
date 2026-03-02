import { Projects } from "@/components/sections";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="max-w-2xl pt-12 px-4 w-full mx-auto min-h-screen border border-neutral-900 bg-neutral-900/20">
      <div className="flex justify-between items-center px-4 pb-6">
        <h1 className="text-2xl font-bold instrument-serif">Projects</h1>
        <Link href="/">
          <div className="flex gap-2">
            <p className="text-sm cursor-pointer text-neutral-400 hover:text-neutral-300 transition-all font-mono bg-neutral-800 px-3 rounded py-1.5">
              Home
            </p>
          </div>
        </Link>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
