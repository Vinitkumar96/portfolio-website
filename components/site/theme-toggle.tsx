"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "inline-flex h-9 w-9 shrink-0 rounded-md border border-dashed border-neutral-800/60 bg-background/60 dark:border-neutral-600/60",
          className,
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-dashed border-neutral-800/70 bg-background/80 text-neutral-600 transition-colors hover:text-foreground dark:border-neutral-600/70 dark:text-neutral-300",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-md opacity-[0.04] transition-opacity group-hover:opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 4px, currentcolor 4px, currentcolor 5px)",
        }}
      />
      {isDark ? (
        <Sun className="relative size-4" strokeWidth={1.75} />
      ) : (
        <Moon className="relative size-4" strokeWidth={1.75} />
      )}
    </button>
  );
}
