# Декоратор для кеширования результата вызова метода

В качестве кеша используется [Простой memory - кеш](../other/memorycache.md)

Логика работы декоратора:
>1. если результат выполнения метода (с заданным аргументами) присутствует в кеше и время жизни (элемента кеша) не истекло,  
>   то метод выполняться не будет, будет возвращен результат из кеша
>2. если в кеше нет результата, то будет выполнен метод, результат выполнения записан в кеш и возвращено значение
>3. ключем в кеше является строка `наименование метода-аргументы` (при этом глубокого клонирования не производится)
>```ts
>const key = `${propertyKey}-${!!args ? JSON.stringify(args) : ""}`;
>```

::: tip Важно !!!
В кеше используется `Map`, в котором значение "скаладывается" как есть - без какого-либо клонирования, 
то есть, если это "обьект" то будет создана ссылка (ключ-значение), 
при этом если изменить (извне) объект, то соотвественно, при получении из кеша объекта по ключу мы получим "измененный" объект, 
а не тот, который мы "положили" 
:::

Учитывая, что в нашей архитектуре всё взаимодействие с API осуществляется **строго** через сервисы,\
удобно упаравлять кешированием вызовов.


**Код декоратора  @Cacheable(время жизни)**

```ts
import MemoryCache from "./MemoryCache";

const Cacheable =
  (maxAge = 2000) =>
  (_target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args) {
      const key = `${propertyKey}-${!!args ? JSON.stringify(args) : ""}`;
      const val = MemoryCache.get(key);
      if (!val) {
        const originVal = await originalMethod.apply(this, args);
        MemoryCache.set(key, originVal, maxAge);
        return originVal;
      } else {
        return val;
      }
    };

    return descriptor;
  };

export default Cacheable;
```

**Пример**

```ts{3,8,13,19,24}
export class CatalogService extends BaseService {
  // Если время жизни установить в 0 - результат вызова будет "жить" в кеше вечно  
  @Cacheable(0)
  async getSearchProducts (name: string, search: string) {
    return await this.getArrayOrEmpty(ProductModel, "users/products", { params: { name, search } });
  }

  @Cacheable(0)
  async getCatalog () {
    return await this.getOneOrDefault(CatalogModel, "users/pages/catalog");
  }

  @Cacheable(0)
  getProductBySlug (slug: string) {
    const id = this.getIdBySlug(slug);
    return this.getOneOrDefault(ProductModel, `users/products/${id}`);
  }

  @Cacheable(0)
  async getRoot () {
    return await this.getArrayOrEmpty(CategoryModel, "users/product-categories-menu");
  }

  @Cacheable(0)
  async getCategoryBySlug (slug: string) {
    const id = this.getIdBySlug(slug);
    return await this.getOneOrDefault(CategoryModel, `users/product-categories/${id}`);
  }

  toogleFavorites (product: ProductModel) {
    return this.apiRequest.post(`users/products/${product.id}/favorites`, { product_id: product.id });
  }
}
```