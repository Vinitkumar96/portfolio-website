import Link from "next/link";

import { SectionCard } from "@/components/ui/section";
import { GithubContributionCalendarClient } from "@/components/sections/GithubContributionCalendarClient";
import { getGithubContributions } from "@/lib/github-contributions";

const GITHUB_USER = "Vinitkumar96";

const GithubContributions = async () => {
  const { contributions, totalLastYear } =
    await getGithubContributions(GITHUB_USER);

  return (
    <div className="mb-10">
      <div className="mb-2 flex flex-wrap items-end justify-between gap-2 pl-4 pr-2">
        <h2 className="text-xl instrument-serif">GitHub activity</h2>
        <Link
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-neutral-500 underline-offset-2 hover:text-foreground hover:underline dark:text-neutral-500"
        >
          @{GITHUB_USER}
        </Link>
      </div>
      <SectionCard className="py-1">
        <GithubContributionCalendarClient
          data={contributions}
          totalLastYear={totalLastYear}
          username={GITHUB_USER}
        />
      </SectionCard>
    </div>
  );
};

export default GithubContributions;
