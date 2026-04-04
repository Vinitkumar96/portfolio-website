import { socialLinks } from "@/data";
import { Tooltip } from "@/components/ui/tooltip-card";
import { SectionCard } from "@/components/ui/section";

interface SocialPreviewCardProps {
  src: string;
  alt: string;
}

const SocialPreviewCard = ({ src, alt }: SocialPreviewCardProps) => (
  <div>
    <img
      src={src}
      alt={alt}
      className="rounded-sm border-l-2 border-t-2 border-neutral-300 dark:border-neutral-600"
    />
  </div>
);

const Social = () => {
  return (
    <SectionCard className="mb-4 px-8">
      <div className="flex cursor-pointer items-center justify-center space-x-2 font-serif text-neutral-700 md:space-x-6 dark:text-neutral-300">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip
              content={
                <SocialPreviewCard
                  src={link.previewImage}
                  alt={link.previewAlt}
                />
              }
            >
              <p className="flex text-sm items-center gap-1 px-4 py-2">
                {link.icon} {link.name}
              </p>
            </Tooltip>
          </a>
        ))}
      </div>
    </SectionCard>
  );
};

export default Social;
