"use client";

import Image from "next/image";
import { projects } from "@/data";
import type { Project } from "@/lib/types";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleCardClick = () => {
    if (!project.liveUrl || project.liveUrl === "#") {
      return;
    }

    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCardClick();
        }
      }}
      className="grayscale hover:grayscale-25 w-full cursor-pointer rounded-xl  border-neutral-300/90 bg-neutral-100/50 p-2 transition-all  dark:border-neutral-800 dark:bg-neutral-900/20"
    >
      <div className="overflow-hidden rounded-lg p-2">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-md bg-white/80 dark:bg-neutral-950/70">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover "
          />
        </div>
      </div>

      <div className="px-2 pt-2 pb-1">
        <div>
          <h2 className="instrument-serif text-2xl pt-1.5 z-20">{project.title}</h2>
          <p className=" text-[15px] text-black  tracking-wide  dark:text-neutral-200">
            {project.description}
          </p>
        </div>

        <div className="pt-1 flex  ">
          <div className=" text-[11px] text-neutral-500 dark:text-neutral-300 mb-1  ">
            {project.tools.map((tool, index) => (
              <span
                key={tool}
                className="bg-white dark:bg-neutral-800/40  border border-neutral-200 border-dashed dark:border-neutral-700 mr-1 rounded  px-1.5   "
              >
                {tool}
              </span>
            ))}

            <div className=" flex gap-3 pl-1 mt-1  text-neutral-500 dark:text-neutral-400">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="text-sm flex items-center gap-1 transition-colors hover:text-foreground dark:hover:text-neutral-200"
                >
                  <RiExternalLinkFill /> {" Live"}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="flex items-center gap-1 text-sm  transition-colors hover:text-foreground dark:hover:text-neutral-200"
                >
                  <FaGithub /> {" Github"}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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