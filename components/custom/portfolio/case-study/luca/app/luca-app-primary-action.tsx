import { Button } from "@/components/ui/button";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LucaAppPrimaryActionProps = {
  children: string;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
};

export function LucaAppPrimaryAction({
  children,
  className,
  onClick,
  interactive = true,
}: LucaAppPrimaryActionProps) {
  return (
    <Button
      type="button"
      onClick={interactive ? onClick : undefined}
      className={cn(
        RESPONSIVE.caseStudyLucaAppPrimaryAction,
        RESPONSIVE.caseStudyPrototypeInteractive,
        className,
      )}
    >
      {children}
    </Button>
  );
}
