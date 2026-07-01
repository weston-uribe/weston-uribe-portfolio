import {
  formatCurrency,
} from "@/lib/portfolio/case-studies/ukme-voc-analytics";
import type { DashboardMetrics } from "@/lib/portfolio/case-studies/ukme-voc-types";
import { RESPONSIVE } from "@/lib/constants";

type VocMetricsRowProps = {
  metrics: DashboardMetrics;
};

const METRIC_ITEMS: {
  key: keyof DashboardMetrics;
  label: string;
  format: (metrics: DashboardMetrics) => string;
}[] = [
  {
    key: "totalRecords",
    label: "Total feedback",
    format: (metrics) => String(metrics.totalRecords),
  },
  {
    key: "uniqueAccounts",
    label: "Unique accounts",
    format: (metrics) => String(metrics.uniqueAccounts),
  },
  {
    key: "averageArr",
    label: "Average ARR",
    format: (metrics) => formatCurrency(metrics.averageArr),
  },
  {
    key: "averageCsat",
    label: "Average CSAT",
    format: (metrics) => metrics.averageCsat.toFixed(1),
  },
  {
    key: "negativeSentimentPercent",
    label: "Negative sentiment",
    format: (metrics) => `${metrics.negativeSentimentPercent}%`,
  },
  {
    key: "topTheme",
    label: "Top theme",
    format: (metrics) => metrics.topTheme,
  },
];

export function VocMetricsRow({ metrics }: VocMetricsRowProps) {
  return (
    <section aria-label="Supporting metrics">
      <div className={RESPONSIVE.caseStudyPrototypeMetricsRow}>
        {METRIC_ITEMS.map((item) => (
          <div key={item.key} className={RESPONSIVE.caseStudyPrototypeMetricItem}>
            <span className={RESPONSIVE.caseStudyPrototypeMetricLabel}>
              {item.label}
            </span>
            <span className={RESPONSIVE.caseStudyPrototypeMetricValue}>
              {item.format(metrics)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
