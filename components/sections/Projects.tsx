import Image from "next/image";
import { projects } from "@/data";
import { LinkIcon, GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="bg-neutral-900/20 w-full border border-neutral-800 rounded-xl cursor-pointer group pt-2 hover:bg-linear-to-b from-purple-400 via-[#0A0A0A] to-[#0A0A0A] transition-all duration-300">
    <div className="w-full flex justify-center mb-2">
      <Image
        src={project.thumbnail}
        width={300}
        height={100}
        alt={`${project.title} thumbnail`}
        className="w-[80%] rounded-t-xl translate-y-4 group-hover:-translate-y-0.5 transform transition-all duration-300 group-hover:shadow-2xl shadow-black"
      />
    </div>

    <div className="px-2 py-2">
      <div>
        <h2 className="text-xl instrument-serif py-1">{project.title}</h2>
        <p className="text-sm text-neutral-300 roboto-slab">
          {project.tools.map((tool, index) => (
            <span key={tool}>
              {index !== project.tools.length - 1 ? `${tool} / ` : tool}
            </span>
          ))}
        </p>
      </div>

      <div>
        <p className="mb-1 text-neutral-400 roboto-slab text-sm">
          {project.description}
        </p>
        <div className="flex gap-3 pt-2 roboto-slab text-neutral-400">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors"
            >
              <LinkIcon />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors"
            >
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
