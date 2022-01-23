# Декоратор для кеширования результата вызова метода

"Невесив" данный декоратор на метод, выполнение (метода) будет осуществляться\
если ранее метод не вызывался или время "жизни" результата выполнения в кеше истекло.\
Ключем в кеше является строка `наименование метода-аргументы`

```ts
const key = `${propertyKey}-${!!args ? JSON.stringify(args) : ""}`;
```

Учитывая, что в нашей архитектуре всё взаимодействие с API осуществляется **строго** через сервисы,\
удобно упаравлять кешированием вызовов 


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