"use client";

import { useState } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Inflexa Solutions Pvt. Ltd.",
    role: "Full Stack Engineer Intern",
    period: "Jan 2026 - Mar 2026",
    location: "Remote",
    details: [
      "Developed responsive frontend pages using Next.js App Router, building 15+ reusable components and production-ready UI features.",
      "Designed and implemented 10+ REST APIs using Node.js and Express.js, improving database query and search efficiency by up to 40%.",
      "Integrated frontend and backend using Zustand for global state management, reducing redundant API calls by 30% for seamless data flow.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="experience"
      className="w-full border-t border-dashed border-neutral-300 dark:border-neutral-700/80"
    >
      <div className="mx-auto max-w-2xl border-x border-dashed border-neutral-300 dark:border-neutral-700/80 px-4 py-6">
        <div className="mb-2 flex items-center justify-between border-t border-dashed border-neutral-300 px-4 py-3 dark:border-neutral-600/80">
          <h2 className="instrument-serif text-2xl font-bold">Experience</h2>
          <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
            Timeline
          </p>
        </div>

        <div className="space-y-3">
          {experiences.map((experience, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${experience.company}-${experience.period}`}
                className="overflow-hidden rounded-2xl border border-neutral-300/90 bg-neutral-100/50 transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900/20"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-neutral-200/40 dark:hover:bg-neutral-800/30"
                >
                  <div>
                    <div className="instrument-serif text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {experience.company}
                    </div>
                    <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {experience.role}
                    </div>
                  </div>

                  <div className="shrink-0 text-right font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                    <div>{experience.period}</div>
                    <div className="mt-1 text-neutral-400 dark:text-neutral-500">
                      {experience.location}
                    </div>
                  </div>
                </button>

                <div
                  className={`grid overflow-hidden px-4 transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-dashed border-neutral-300 pt-4 dark:border-neutral-700/80">
                      <ul className="space-y-3 text-[15px] tracking-wide text-neutral-600 dark:text-neutral-300">
                        {experience.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
