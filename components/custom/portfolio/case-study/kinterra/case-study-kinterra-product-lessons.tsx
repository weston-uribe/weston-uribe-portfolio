import { RESPONSIVE, SPACING } from "@/lib/constants";
import {
  KINTERRA_PRODUCT_LESSONS,
  KINTERRA_PRODUCT_LESSONS_GROUP_TITLE,
} from "@/lib/portfolio/case-studies/kinterra";
import { cn } from "@/lib/utils";

export function CaseStudyKinterraProductLessons() {
  return (
    <div className={cn(SPACING.stackGap, "flex flex-col")}>
      <h3 className="text-sm font-semibold text-foreground sm:text-base">
        {KINTERRA_PRODUCT_LESSONS_GROUP_TITLE}
      </h3>
      <div className={cn(RESPONSIVE.caseStudyAnnotationGrid, "md:grid-cols-3")}>
        {KINTERRA_PRODUCT_LESSONS.map((lesson) => (
          <div key={lesson.title} className={RESPONSIVE.caseStudyAnnotationCard}>
            <h4 className="text-sm font-semibold text-foreground sm:text-base">
              {lesson.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
              {lesson.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
