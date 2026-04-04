"use client";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteChrome({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed right-3 top-3 z-[60] sm:right-4 sm:top-4",
        className,
      )}
    >
      <div className="pointer-events-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
