import type { CatalogItem } from '../src/catalog/types';
import { add, list } from '../src/catalog/repository';
import { getCatalog } from '../src/catalog/service';

describe('CatalogItem', () => {
  it('has id and label fields', () => {
    const item: CatalogItem = { id: 'item-1', label: 'First item' };
    expect(item.id).toBe('item-1');
    expect(item.label).toBe('First item');
  });
});

describe('repository', () => {
  it('stores items in memory with list() and add()', () => {
    expect(list()).toEqual([]);

    add({ id: '1', label: 'One' });
    add({ id: '2', label: 'Two' });

    expect(list()).toEqual([
      { id: '1', label: 'One' },
      { id: '2', label: 'Two' },
    ]);
  });
});

describe('service', () => {
  it('getCatalog() returns all items', () => {
    expect(getCatalog()).toEqual([
      { id: '1', label: 'One' },
      { id: '2', label: 'Two' },
    ]);
  });
});
