"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { projects } from "@/data";
import { LinkIcon, GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const hoverGradientEnd =
    mounted && resolvedTheme === "light" ? "#f4f4f5" : "#0a0a0a";

  return (
    <div
      className="group w-full cursor-pointer rounded-xl border border-neutral-300/90 bg-neutral-100/50 pt-2 transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900/20"
      style={{
        background: isHovered
          ? `linear-gradient(to bottom, ${project.gradientColor}, ${hoverGradientEnd} 32%, ${hoverGradientEnd})`
          : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full flex justify-center mb-2">
        <Image
          src={project.thumbnail}
          width={300}
          height={100}
          alt={`${project.title} thumbnail`}
          className="w-[95%]  rounded-lg translate-y-5  group-hover:-translate-y-1 transform transition-all duration-300  "
        />
      </div>

      <div className="px-2 py-2">
        <div>
          <h2 className="text-xl instrument-serif py-1 z-20">
            {project.title}
          </h2>
          <p className="roboto-slab text-[11px] text-neutral-500 dark:text-neutral-300 mb-1.5  ">
            {project.tools.map((tool, index) => (
              <span
                key={tool}
                className="bg-white dark:bg-neutral-800  border border-neutral-300 dark:border-neutral-500 mr-1 rounded  px-1.5 border-dashed "
              >
                {tool}
              </span>
            ))}
          </p>
        </div>

        <div>
          <p className="roboto-slab mb-1 text-sm text-neutral-500 dark:text-neutral-400">
            {project.description}
          </p>

          <div className="roboto-slab flex gap-3 pl-1 pt-2 text-neutral-500 dark:text-neutral-400">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground dark:hover:text-neutral-200"
              >
                <LinkIcon />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground dark:hover:text-neutral-200"
              >
                <GithubIcon />
              </a>
            )}
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
