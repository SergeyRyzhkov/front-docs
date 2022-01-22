# Хлебные крошки (BreadCrumbs)

[[toc]]

## Базовые классы

1. Тип, описывающий свойства маршрута (`nuxt-link`)
   `RouteLink` (`src\_core\models\RouteLink.ts`)

```ts
export type RouteLink = {
    id?: number;
    // Для отображения
    linkName?: string;
    // Наименование маршрута
    name?: string;  
    // Параметры маршрута
    params?: any;
    props?: any;
    query?: any;
    // Признак видимости
    isVisible?: boolean;
    // Для навигации по якорям внутри страницы (компонента)
    refId?: string;
    // Дополнителная информация
    addInfo?: string;
    // Для вставки как <a href=""
    href?: string;
    blank?: "" | "_blank";
};
``` 

2. Компонент для отображения "хлебных крошек" (`src\components\base\BreadCrumbs.vue`), особенности:
   - не отображает 1 маршрут, например просто `Главная`
   - верстка выполнена на основе микроразметки (`https://schema.org/BreadcrumbList`)
   - два режима отображения:
     - на основе переданного свойства (пропс) 
       ```ts 
       links: RouteLink[];
       ```
     - если свойство не задано, то попытка взять массив маршрутов из Vuex 
        ```ts 
        get breadCrumbs() {
            return this.links || getModule(AppStore, this.$store).breadCrumbs;
        }
        ```     

## Примеры:

### с использованием Vuex

```vue
<template>
  <main class="page-wrapper container">
    <BreadCrumbs />
  </main>
</template>
```

```ts
@Component
export default class TrainingListPage extends Vue {
  fetch() {
    this.updateBreadCrumbs();
  }

  updateBreadCrumbs() {
    const breadCrumbList = [{ linkName: "Главная", name: "main" }, { linkName: "Обучение" }];
    getModule(AppStore, this.$store).updateBreadCrumbList(breadCrumbList);
  }

  head() {
    return this.$serviceLocator.getService(SeoMetaTagsBuilder).create(undefined, this.$route.fullPath);
  }
}
```

### с использованием локального состояния (data)

```vue
<template>
  <main class="page-wrapper container">
    <BreadCrumbs :links="breadCrumbs" />
  </main>
</template>
```

```ts
@Component
export default class CatalogPage extends Vue {
  breadCrumbs: RouteLink[] = [];

  updateBreadCrumbs(model: CategoryModel) {
    this.breadCrumbs = this.$serviceLocator.getService(CatalogService).buildBreadCrumb(model);
  }
}
```
