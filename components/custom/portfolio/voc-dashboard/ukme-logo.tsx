import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type UKMeLogoMarkProps = {
  className?: string;
};

export function UKMeLogoMark({ className }: UKMeLogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        RESPONSIVE.caseStudyPrototypeSidebarLogo,
        "text-portfolio-kg-teal",
        className,
      )}
    >
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="7"
        className="fill-current opacity-15"
      />
      <path
        d="M9 22V12.5C9 11.12 10.12 10 11.5 10H13.2C14.43 10 15.42 10.86 15.62 12.05L16 14.2L16.38 12.05C16.58 10.86 17.57 10 18.8 10H20.5C21.88 10 23 11.12 23 12.5V22"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12.5" cy="21" r="1.35" className="fill-current" />
      <circle cx="19.5" cy="21" r="1.35" className="fill-current" />
      <path
        d="M12.5 17.5C13.4 16.1 14.6 15.25 16 15.25C17.4 15.25 18.6 16.1 19.5 17.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

type UKMeLogoProps = {
  showWordmark?: boolean;
  className?: string;
};

export function UKMeLogo({ showWordmark = true, className }: UKMeLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex min-w-0 items-center gap-2 text-portfolio-kg-teal",
        !showWordmark && "justify-center",
        className,
      )}
    >
      <UKMeLogoMark />
      {showWordmark ? (
        <span className={RESPONSIVE.caseStudyPrototypeSidebarWordmark}>
          UKMe
        </span>
      ) : null}
    </span>
  );
}
