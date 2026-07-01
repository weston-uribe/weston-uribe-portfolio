import { DEFAULT_FILTERS, PRODUCTS_BY_SOURCE } from "@/lib/portfolio/case-studies/ukme-voc-taxonomy";
import type {
  DashboardMetrics,
  FeedbackSource,
  PersonaRankEntry,
  VocFeedbackRecord,
  VocFilterState,
} from "@/lib/portfolio/case-studies/ukme-voc-types";

export function createDefaultFilters(): VocFilterState {
  return {
    dateFrom: DEFAULT_FILTERS.dateFrom,
    dateTo: DEFAULT_FILTERS.dateTo,
    arrTiers: [...DEFAULT_FILTERS.arrTiers],
    products: [...DEFAULT_FILTERS.products],
    themes: [...DEFAULT_FILTERS.themes],
    subThemes: [...DEFAULT_FILTERS.subThemes],
    platforms: [...DEFAULT_FILTERS.platforms],
  };
}

export function isEmptyFilters(filters: VocFilterState): boolean {
  return (
    filters.dateFrom === null &&
    filters.dateTo === null &&
    filters.arrTiers.length === 0 &&
    filters.products.length === 0 &&
    filters.themes.length === 0 &&
    filters.subThemes.length === 0 &&
    filters.platforms.length === 0
  );
}

export function getProductOptions(source: FeedbackSource): readonly string[] {
  return PRODUCTS_BY_SOURCE[source];
}

export function filterFeedback(
  records: readonly VocFeedbackRecord[],
  source: FeedbackSource,
  filters: VocFilterState,
): VocFeedbackRecord[] {
  return records.filter((record) => {
    if (record.source !== source) {
      return false;
    }

    if (filters.dateFrom && record.date < filters.dateFrom) {
      return false;
    }

    if (filters.dateTo && record.date > filters.dateTo) {
      return false;
    }

    if (
      filters.arrTiers.length > 0 &&
      !filters.arrTiers.includes(record.arrTier)
    ) {
      return false;
    }

    if (
      filters.products.length > 0 &&
      !filters.products.includes(record.product)
    ) {
      return false;
    }

    if (filters.themes.length > 0 && !filters.themes.includes(record.theme)) {
      return false;
    }

    if (
      filters.subThemes.length > 0 &&
      !filters.subThemes.includes(record.subTheme)
    ) {
      return false;
    }

    if (
      filters.platforms.length > 0 &&
      !filters.platforms.includes(record.platform)
    ) {
      return false;
    }

    return true;
  });
}

function getTopThemeAndSubTheme(
  records: readonly VocFeedbackRecord[],
): { topTheme: string; topSubTheme: string } {
  const themeCounts = new Map<string, number>();
  const subThemeCounts = new Map<string, number>();

  for (const record of records) {
    themeCounts.set(record.theme, (themeCounts.get(record.theme) ?? 0) + 1);
    subThemeCounts.set(
      record.subTheme,
      (subThemeCounts.get(record.subTheme) ?? 0) + 1,
    );
  }

  const topTheme =
    [...themeCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "None";
  const topSubTheme =
    [...subThemeCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "None";

  return { topTheme, topSubTheme };
}

export function rankTopPersonas(
  records: readonly VocFeedbackRecord[],
  limit = 3,
): PersonaRankEntry[] {
  const grouped = new Map<string, VocFeedbackRecord[]>();

  for (const record of records) {
    const existing = grouped.get(record.persona) ?? [];
    existing.push(record);
    grouped.set(record.persona, existing);
  }

  const ranked = [...grouped.entries()]
    .map(([persona, personaRecords]) => {
      const accounts = new Set(personaRecords.map((record) => record.account));
      const { topTheme, topSubTheme } = getTopThemeAndSubTheme(personaRecords);

      return {
        persona,
        count: personaRecords.length,
        uniqueAccounts: accounts.size,
        averageArr:
          personaRecords.reduce((sum, record) => sum + record.arrValue, 0) /
          personaRecords.length,
        averageCsat:
          personaRecords.reduce((sum, record) => sum + record.csat, 0) /
          personaRecords.length,
        topTheme,
        topSubTheme,
        negativeCount: personaRecords.filter(
          (record) => record.sentiment === "Negative",
        ).length,
        neutralCount: personaRecords.filter(
          (record) => record.sentiment === "Neutral",
        ).length,
        positiveCount: personaRecords.filter(
          (record) => record.sentiment === "Positive",
        ).length,
      } satisfies PersonaRankEntry;
    })
    .sort((a, b) => b.count - a.count);

  return ranked.slice(0, limit);
}

export function computeDashboardMetrics(
  records: readonly VocFeedbackRecord[],
): DashboardMetrics {
  if (records.length === 0) {
    return {
      totalRecords: 0,
      uniqueAccounts: 0,
      averageArr: 0,
      averageCsat: 0,
      negativeSentimentPercent: 0,
      topTheme: "None",
    };
  }

  const accounts = new Set(records.map((record) => record.account));
  const negativeCount = records.filter(
    (record) => record.sentiment === "Negative",
  ).length;
  const { topTheme } = getTopThemeAndSubTheme(records);

  return {
    totalRecords: records.length,
    uniqueAccounts: accounts.size,
    averageArr:
      records.reduce((sum, record) => sum + record.arrValue, 0) /
      records.length,
    averageCsat:
      records.reduce((sum, record) => sum + record.csat, 0) / records.length,
    negativeSentimentPercent: Math.round((negativeCount / records.length) * 100),
    topTheme,
  };
}

export function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }

  if (value >= 1_000) {
    return `$${Math.round(value / 1_000)}K`;
  }

  return `$${Math.round(value)}`;
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = Number(month) - 1;

  return `${monthNames[monthIndex] ?? month} ${Number(day)}, ${year}`;
}

export function getSentimentLabel(
  negativeCount: number,
  neutralCount: number,
  positiveCount: number,
): "Mostly negative" | "Mixed" | "Mostly positive" {
  const total = negativeCount + neutralCount + positiveCount;

  if (total === 0) {
    return "Mixed";
  }

  const negativeRatio = negativeCount / total;
  const positiveRatio = positiveCount / total;

  if (negativeRatio >= 0.5) {
    return "Mostly negative";
  }

  if (positiveRatio >= 0.5) {
    return "Mostly positive";
  }

  return "Mixed";
}
