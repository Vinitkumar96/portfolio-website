import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ children, className }: SectionCardProps) => (
  <div
    className={cn(
      "rounded-xl ",
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
      "max-w-3xl mx-auto py-2 px-2",
      withBorder &&
        "border-x-2-2 border-dashed border-neutral-800/90 dark:border-neutral-600/80",
      className,
    )}
  >
    {children}
  </div>
);
