import { RESPONSIVE, SPACING } from "@/lib/constants";
import type { HarnessCapabilityItem } from "@/lib/portfolio/case-studies/harness";
import {
  HARNESS_CAPABILITIES_GROUP_TITLE,
  HARNESS_CURRENT_CAPABILITIES,
  HARNESS_DOGFOODING_PARAGRAPH,
} from "@/lib/portfolio/case-studies/harness";
import { cn } from "@/lib/utils";

function CapabilityItem({ item }: { item: HarnessCapabilityItem }) {
  return <span>{item.text}</span>;
}

export function CaseStudyHarnessCapabilities() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {HARNESS_CAPABILITIES_GROUP_TITLE}
      </h3>
      <ul className="list-disc space-y-2 pl-5">
        {HARNESS_CURRENT_CAPABILITIES.map((item, index) => (
          <li
            key={index}
            className={cn(RESPONSIVE.caseStudyProse, "text-base")}
          >
            <CapabilityItem item={item} />
          </li>
        ))}
      </ul>
      <p className={RESPONSIVE.caseStudyProse}>{HARNESS_DOGFOODING_PARAGRAPH}</p>
    </div>
  );
}
