"use client";

import { VocDashboardPrototype } from "@/components/custom/portfolio/voc-dashboard/voc-dashboard-prototype";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CaseStudyVocDashboardEmbedProps = {
  className?: string;
};

export function CaseStudyVocDashboardEmbed({
  className,
}: CaseStudyVocDashboardEmbedProps) {
  return (
    <div className={cn(RESPONSIVE.caseStudyPrototypeFrame, className)}>
      <VocDashboardPrototype />
    </div>
  );
}
