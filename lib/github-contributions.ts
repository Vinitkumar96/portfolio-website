export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const DEFAULT_USER = "Vinitkumar96";
const GITHUB_CONTRIBUTIONS_TIMEOUT_MS = 5000;

export async function getGithubContributions(username = DEFAULT_USER) {
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    GITHUB_CONTRIBUTIONS_TIMEOUT_MS,
  );

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 }, signal: controller.signal },
    );
    if (!res.ok) {
      return { contributions: [] as ContributionDay[], totalLastYear: 0 };
    }
    const json = (await res.json()) as {
      contributions?: ContributionDay[];
      total?: { lastYear?: number };
    };
    return {
      contributions: json.contributions ?? [],
      totalLastYear: json.total?.lastYear ?? 0,
    };
  } catch {
    return { contributions: [] as ContributionDay[], totalLastYear: 0 };
  } finally {
    clearTimeout(timeoutId);
  }
}
