import type { CatalogItem } from './types';

const items: CatalogItem[] = [];

export function list(): CatalogItem[] {
  return [...items];
}

export function add(item: CatalogItem): void {
  items.push(item);
}
