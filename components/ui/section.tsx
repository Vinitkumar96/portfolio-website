import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ children, className }: SectionCardProps) => (
  <div
    className={cn(
      "rounded-xl border border-neutral-300 border-t-neutral-300/35 border-x bg-neutral-300/10 dark:bg-neutral-900/20 dark:border-neutral-600/70 dark:border-t-neutral-600/40",
      className,
    )}
  >
    {children}
  </div>
);

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
}

export const SectionContainer = ({
  children,
  className,
  withBorder = true,
}: SectionContainerProps) => (
  <div
    className={cn(
      "max-w-2xl mx-auto py-2 px-2",
      withBorder &&
        "border-x-2 border-dashed border-neutral-800/90 dark:border-neutral-600/80",
      className,
    )}
  >
    {children}
  </div>
);
