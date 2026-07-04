import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LucaAppUserAvatarProps = {
  initials: string;
  className?: string;
};

export function LucaAppUserAvatar({ initials, className }: LucaAppUserAvatarProps) {
  return (
    <span
      className={cn(RESPONSIVE.caseStudyLucaAppAvatar, className)}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
