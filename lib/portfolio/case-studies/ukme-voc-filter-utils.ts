import type {
  ArrTier,
  FilterChip,
  Platform,
  VocFilterState,
} from "@/lib/portfolio/case-studies/ukme-voc-types";
import { formatDate } from "@/lib/portfolio/case-studies/ukme-voc-analytics";

function formatDateRangeLabel(dateFrom: string | null, dateTo: string | null): string {
  if (dateFrom && dateTo) {
    return `${formatDate(dateFrom)} – ${formatDate(dateTo)}`;
  }

  if (dateFrom) {
    return `From ${formatDate(dateFrom)}`;
  }

  if (dateTo) {
    return `Until ${formatDate(dateTo)}`;
  }

  return "";
}

export function getFilterChipsForCategory(
  filters: VocFilterState,
  category: FilterChip["category"],
): FilterChip[] {
  return getFilterChips(filters).filter((chip) => chip.category === category);
}

export function getFilterChips(filters: VocFilterState): FilterChip[] {
  const chips: FilterChip[] = [];

  if (filters.dateFrom || filters.dateTo) {
    chips.push({
      id: "dateRange",
      label: formatDateRangeLabel(filters.dateFrom, filters.dateTo),
      category: "dateRange",
    });
  }

  for (const tier of filters.arrTiers) {
    chips.push({
      id: `arrTiers:${tier}`,
      label: `ARR · ${tier}`,
      category: "arrTiers",
    });
  }

  for (const product of filters.products) {
    chips.push({
      id: `products:${product}`,
      label: product,
      category: "products",
    });
  }

  for (const theme of filters.themes) {
    chips.push({
      id: `themes:${theme}`,
      label: theme,
      category: "themes",
    });
  }

  for (const subTheme of filters.subThemes) {
    chips.push({
      id: `subThemes:${subTheme}`,
      label: subTheme,
      category: "subThemes",
    });
  }

  for (const platform of filters.platforms) {
    chips.push({
      id: `platforms:${platform}`,
      label: platform,
      category: "platforms",
    });
  }

  return chips;
}

export function removeFilterChip(
  filters: VocFilterState,
  chipId: string,
): VocFilterState {
  if (chipId === "dateRange") {
    return {
      ...filters,
      dateFrom: null,
      dateTo: null,
    };
  }

  const [category, value] = chipId.split(":") as [keyof VocFilterState, string];

  if (category === "arrTiers") {
    return {
      ...filters,
      arrTiers: filters.arrTiers.filter((tier) => tier !== value),
    };
  }

  if (category === "products") {
    return {
      ...filters,
      products: filters.products.filter((product) => product !== value),
    };
  }

  if (category === "themes") {
    return {
      ...filters,
      themes: filters.themes.filter((theme) => theme !== value),
    };
  }

  if (category === "subThemes") {
    return {
      ...filters,
      subThemes: filters.subThemes.filter((subTheme) => subTheme !== value),
    };
  }

  if (category === "platforms") {
    return {
      ...filters,
      platforms: filters.platforms.filter(
        (platform) => platform !== (value as Platform),
      ),
    };
  }

  return filters;
}

export function toggleArrayFilterValue<T extends string>(
  values: readonly T[],
  value: T,
): T[] {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export function hasActiveFilters(filters: VocFilterState): boolean {
  return getFilterChips(filters).length > 0;
}

export type { ArrTier, Platform };
