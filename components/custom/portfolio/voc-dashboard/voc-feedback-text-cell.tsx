"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type VocFeedbackTextCellProps = {
  feedback: string;
};

export function VocFeedbackTextCell({ feedback }: VocFeedbackTextCellProps) {
  return (
    <TooltipProvider delay={200}>
      <Tooltip>
        <TooltipTrigger
          render={
            <button
              type="button"
              className={cn(
                "block max-w-[12rem] truncate text-left text-sm lg:max-w-[16rem]",
                RESPONSIVE.caseStudyPrototypeInteractive,
                "rounded-sm underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
              )}
            />
          }
        >
          {feedback}
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="start"
          className="max-w-sm px-3 py-2 text-sm leading-relaxed whitespace-normal"
        >
          {feedback}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
