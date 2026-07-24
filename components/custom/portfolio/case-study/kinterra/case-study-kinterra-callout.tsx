import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CaseStudyKinterraCalloutProps =
  | { text: string; label?: never; body?: never }
  | { text?: never; label: string; body: string };

export function CaseStudyKinterraCallout(props: CaseStudyKinterraCalloutProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyInsightCard,
        RESPONSIVE.caseStudyProseColumn,
      )}
    >
      {props.text ? (
        <p
          className={cn(
            RESPONSIVE.caseStudyProse,
            "font-medium text-foreground/90",
          )}
        >
          {props.text}
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-foreground sm:text-base">
            {props.label}
          </p>
          <p className={cn(RESPONSIVE.caseStudyProse, "text-foreground/90")}>
            {props.body}
          </p>
        </div>
      )}
    </div>
  );
}
