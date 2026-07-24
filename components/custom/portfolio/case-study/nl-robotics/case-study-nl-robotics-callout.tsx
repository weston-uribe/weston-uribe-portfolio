import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CaseStudyNlRoboticsCalloutProps = {
  text: string;
};

export function CaseStudyNlRoboticsCallout({
  text,
}: CaseStudyNlRoboticsCalloutProps) {
  return (
    <div
      className={cn(
        RESPONSIVE.caseStudyInsightCard,
        RESPONSIVE.caseStudyProseColumn,
      )}
    >
      <p
        className={cn(
          RESPONSIVE.caseStudyProse,
          "font-medium text-foreground/90",
        )}
      >
        {text}
      </p>
    </div>
  );
}
