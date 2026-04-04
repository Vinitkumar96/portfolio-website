"use client";

import { ActivityCalendar, type Activity } from "react-activity-calendar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

/** Monochrome ramp: empty → dense (matches portfolio neutrals) */
const theme = {
  light: [
    "#ececee", // 0 — no activity
    "#c8c8d0",
    "#8b8b98",
    "#4a4a55",
    "#141418", // 4 — busiest
  ],
  dark: [
    "#121214", // 0 — no activity (near page bg)
    "#27272c",
    "#3f3f48",
    "#6b6b78",
    "#c4c4ce", // 4 — busiest (light gray on dark)
  ],
};

type Props = {
  data: Activity[];
  totalLastYear: number;
  username: string;
};

export function GithubContributionCalendarClient({
  data,
  totalLastYear,
  username,
}: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const colorScheme = mounted && resolvedTheme === "light" ? "light" : "dark";


  if (data.length === 0) {
    return (
      <p className="px-4 py-6 text-center font-mono text-sm text-muted-foreground">
        Could not load contribution data.{" "}
        <Link
          href={`https://github.com/${username}`}
          className="text-foreground underline-offset-2 hover:underline"
        >
          View profile on GitHub
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="github-calendar-fit w-full min-w-0 max-w-full px-1 pb-1 pt-2 sm:px-4">
      <ActivityCalendar
        data={data}
        theme={theme}
        colorScheme={colorScheme}
        blockSize={12}
        blockMargin={3}
        blockRadius={2}
        fontSize={12}
        maxLevel={4}
        labels={{
          totalCount: "{{count}} contributions in {{year}}",
        }}
        showTotalCount={false}
      />
    </div>
  );
}
