# Простой memory - кеш

```ts
class CacheEntry {
  value: any;
  createdAt: number;
  maxAge: number;

  constructor(value: any, maxAge: number) {
    this.value = value;
    this.createdAt = Date.now();
    this.maxAge = maxAge;
  }

  isExpaired() {
    return this.maxAge === 0 ? false : Date.now() - this.createdAt > this.maxAge;
  }
}

export default class MemoryCache {
  static entriesMap = new Map<string, CacheEntry>();

  static set(key: string, value: any, maxAge = 2000) {
    const entry = new CacheEntry(value, maxAge);
    this.entriesMap.set(key, entry);
  }

  static get(key: string) {
    const entry = this.entriesMap.get(key);
    if (!!entry) {
      if (entry.isExpaired()) {
        entry.value = null;
        this.entriesMap.delete(key);
        return null;
      }
      return entry.value;
    }
    return null;
  }

  static clear() {
    MemoryCache.entriesMap.clear();
  }
}
```

**Пример использования**\
[Декоратор для кеширования результата вызова метода](../other/methodcachedecorator.md)

