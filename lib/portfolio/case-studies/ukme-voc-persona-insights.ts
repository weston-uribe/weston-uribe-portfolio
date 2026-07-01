import type { FeedbackSource } from "@/lib/portfolio/case-studies/ukme-voc-types";

export type PersonaInsight = {
  summary: string;
  sentimentLabel: "Mostly negative" | "Mixed" | "Mostly positive";
};

export const PERSONA_INSIGHTS: Record<
  FeedbackSource,
  Partial<Record<string, PersonaInsight>>
> = {
  "In-app": {
    "Payroll Manager": {
      summary:
        "I need clearer validation before payroll is finalized, because I do not trust the totals until I manually check them.",
      sentimentLabel: "Mostly negative",
    },
    "HR Administrator": {
      summary:
        "I want routine configuration changes in one place, because jumping between modules makes simple updates take far too long.",
      sentimentLabel: "Mixed",
    },
    "Benefits Administrator": {
      summary:
        "I need a clearer view of enrollment status, because employees and I are both guessing whether coverage changes went through.",
      sentimentLabel: "Mixed",
    },
    "Store Manager": {
      summary:
        "I want shift approvals to be easier on mobile, because I am usually handling schedule changes away from my desk.",
      sentimentLabel: "Mostly negative",
    },
    "Finance Manager": {
      summary:
        "I need exports to match what I filtered in the app, because rebuilding the same report every week wastes my team's time.",
      sentimentLabel: "Mostly negative",
    },
  },
  Community: {
    "Payroll Manager": {
      summary:
        "I need more transparency during year-end reconciliation, because I still do manual spot checks when tax tables change mid-cycle.",
      sentimentLabel: "Mostly negative",
    },
    "HR Director": {
      summary:
        "I want persona-level insight rollups, because raw ticket counts do not help me explain priorities to leadership.",
      sentimentLabel: "Mixed",
    },
    "Employee Experience Manager": {
      summary:
        "I want mobile onboarding to feel consistent, because employees lose confidence when prompts disappear and never come back.",
      sentimentLabel: "Mixed",
    },
    "Recruiter": {
      summary:
        "I need hiring data to sync cleanly into core HR records, because handoffs between tools create duplicate work for my team.",
      sentimentLabel: "Mixed",
    },
    "Finance Manager": {
      summary:
        "I need reporting filters to stay intact when I export, because rebuilding the same report wastes time every week.",
      sentimentLabel: "Mostly negative",
    },
  },
  Support: {
    "Payroll Manager": {
      summary:
        "I need plain-language error messages at pay period close, because cryptic codes force me to call support when I am already under pressure.",
      sentimentLabel: "Mostly negative",
    },
    "HR Administrator": {
      summary:
        "I want guided setup for new hires, because too many manual steps during busy seasons lead to mistakes I have to fix later.",
      sentimentLabel: "Mixed",
    },
    "IT Administrator": {
      summary:
        "I need reliable sync visibility during batch windows, because silent failures between UKMe and our downstream systems are unacceptable.",
      sentimentLabel: "Mostly negative",
    },
    "Operations Manager": {
      summary:
        "I need the schedule view to load quickly on Monday mornings, because waiting 15 seconds across dozens of locations stops us from acting fast.",
      sentimentLabel: "Mostly negative",
    },
  },
};

export function getPersonaInsight(
  source: FeedbackSource,
  persona: string,
  topTheme: string,
): PersonaInsight {
  const insight = PERSONA_INSIGHTS[source][persona];
  if (insight) {
    return insight;
  }

  return {
    summary: `I keep running into ${topTheme.toLowerCase()} issues in this view. See the raw feedback below for specific examples.`,
    sentimentLabel: "Mixed",
  };
}
