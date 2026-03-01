import React from "react";
import Image from "next/image";

const projects = [
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
    live: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-link-icon lucide-link"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-github-icon lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
    live: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-link-icon lucide-link"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-github-icon lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
    live: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-link-icon lucide-link"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-github-icon lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    thumbnail: "/p.png",
    heading: "ecom",
    tools: ["html", "css", "js"],
    about:
      "fsdfsdfds fsdf sdfdsf df df dfds f fsdf df df sdf sdf sdf sdfsdf sdf fsdf sd fsd f sdf sd",
    live: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-link-icon lucide-link"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-github-icon lucide-github"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
];

const Project = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className=" bg-neutral-900/20  w-full  border border-neutral-800 rounded-xl cursor-pointer group pt-2 hover:bg-linear-to-b from-purple-400 via-[#0A0A0A] to-[#0A0A0A]  transition-all duration-300 "
          >
            <div className="w-full flex justify-center mb-2    ">
              <Image
                src={project.thumbnail}
                width="300"
                height="100"
                alt="project pfp"
                className="w-[80%] rounded-t-xl translate-y-4 group-hover:-translate-y-0.5 transform transition-all duration-300 group-hover:shadow-2xl shadow-black  "
              />
            </div>

            <div className="px-2 py-2">

              <div>
                <h1 className="text-xl instrument-serif py-1">{project.heading}</h1>
                <p className="text-sm text-neutral-300 roboto-slab">
                  {project.tools.map((tool, index) => {
                    return (
                      <span key={index}>
                        {index !== project.tools.length - 1
                          ? tool + " / "
                          : tool}
                      </span>
                    );
                  })}
                </p>
              </div>

              <div className="">
                <p className="mb-1 text-neutral-400 roboto-slab text-sm ">
                  {project.about}
                </p>
                <div className="flex gap-3 pt-2 roboto-slab text-neutral-400">
                  <span className="text-md">{project.live}</span>
                  <span className="text-md">{project.github}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
