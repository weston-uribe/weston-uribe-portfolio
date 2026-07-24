import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  KINTERRA_SHIPPED_CAPABILITIES,
  KINTERRA_SHIPPED_CAPABILITIES_GROUP_TITLE,
} from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraCapabilities() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {KINTERRA_SHIPPED_CAPABILITIES_GROUP_TITLE}
      </h3>
      <ul className="grid list-disc gap-2 pl-5 md:grid-cols-2 md:gap-x-8">
        {KINTERRA_SHIPPED_CAPABILITIES.map((item) => (
          <li
            key={item}
            className={cn(RESPONSIVE.caseStudyProse, "text-base")}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
