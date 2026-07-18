type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Inflexa Solutions Pvt. Ltd.",
    role: "Full Stack Engineer Intern",
    period: "Jan 2026 - Mar 2026",
    location: "Remote",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full border-t-2 border-dashed border-neutral-300 dark:border-neutral-800/60"
    >
      <div className="mx-auto max-w-3xl border-x-2 border-dashed border-neutral-300 dark:border-neutral-800/60 px-4 py-4">
        <div className="mb-2 flex items-center justify-between py-1 ">
          <h2 className="instrument-serif text-3xl font-bold">Experience</h2>
         
        </div>

        <div className="space-y-1">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="flex items-start justify-between gap-4 rounded-2xl   px-4 py-4"
            >
              <div>
                <div className="instrument-serif text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {experience.company}
                </div>
                <div className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {experience.role}
                </div>
              </div>

              <div className="shrink-0 text-right font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                <div>{experience.period}</div>
                <div className="mt-1 text-neutral-400 dark:text-neutral-500">
                  {experience.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
