"use client";

import {
  formatCurrency,
  getSentimentLabel,
} from "@/lib/portfolio/case-studies/ukme-voc-analytics";
import { getPersonaInsight } from "@/lib/portfolio/case-studies/ukme-voc-persona-insights";
import type {
  FeedbackSource,
  PersonaRankEntry,
} from "@/lib/portfolio/case-studies/ukme-voc-types";
import { Badge } from "@/components/ui/badge";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type VocPersonaCardsProps = {
  source: FeedbackSource;
  personas: PersonaRankEntry[];
};

function SentimentBadge({
  label,
}: {
  label: "Mostly negative" | "Mixed" | "Mostly positive";
}) {
  const variant =
    label === "Mostly negative"
      ? "destructive"
      : label === "Mostly positive"
        ? "default"
        : "secondary";

  return <Badge variant={variant}>{label}</Badge>;
}

function PersonaCard({
  source,
  entry,
}: {
  source: FeedbackSource;
  entry: PersonaRankEntry;
}) {
  const insight = getPersonaInsight(source, entry.persona, entry.topTheme);
  const derivedLabel = getSentimentLabel(
    entry.negativeCount,
    entry.neutralCount,
    entry.positiveCount,
  );

  return (
    <article className={RESPONSIVE.caseStudyPrototypePersonaCard}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h4 className="text-base font-semibold text-foreground">
          {entry.persona}
        </h4>
        <SentimentBadge label={insight.sentimentLabel ?? derivedLabel} />
      </div>

      <p className="text-sm leading-relaxed text-foreground/90">
        {insight.summary}
      </p>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div>
          <dt className="text-muted-foreground">Feedback</dt>
          <dd className="font-medium text-foreground">{entry.count}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Accounts</dt>
          <dd className="font-medium text-foreground">{entry.uniqueAccounts}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Avg ARR</dt>
          <dd className="font-medium text-foreground">
            {formatCurrency(entry.averageArr)}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Avg CSAT</dt>
          <dd className="font-medium text-foreground">
            {entry.averageCsat.toFixed(1)}
          </dd>
        </div>
      </dl>
    </article>
  );
}

function EmptyPersonaCard() {
  return (
    <article
      className={cn(
        RESPONSIVE.caseStudyPrototypePersonaCard,
        "justify-center text-center",
      )}
    >
      <p className="text-sm text-muted-foreground">
        Fewer than three personas in this filtered view.
      </p>
    </article>
  );
}

export function VocPersonaCards({ source, personas }: VocPersonaCardsProps) {
  if (personas.length === 0) {
    return (
      <section aria-label="Top persona insights">
        <h4 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Top personas by feedback volume
        </h4>
        <EmptyPersonaCard />
      </section>
    );
  }

  return (
    <section aria-label="Top persona insights">
      <h4 className="mb-4 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        Top personas by feedback volume
      </h4>
      <div className={RESPONSIVE.caseStudyPrototypePersonaGrid}>
        {personas.map((entry) => (
          <PersonaCard key={entry.persona} source={source} entry={entry} />
        ))}
      </div>
    </section>
  );
}
