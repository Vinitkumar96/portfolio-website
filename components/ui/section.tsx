import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ children, className }: SectionCardProps) => (
  <div
    className={cn(
      "bg-neutral-900/20 border-x rounded-2xl border-neutral-600/70 border-t border-t-neutral-600/40",
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
      "max-w-2xl mx-auto py-6 px-4",
      withBorder && "border-x-2 border-neutral-800 border-dashed",
      className,
    )}
  >
    {children}
  </div>
);
