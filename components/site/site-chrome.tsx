"use client";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteChrome({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none relative right-1  z-[60] ",
        className,
      )}
    >
      <div className="pointer-events-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
