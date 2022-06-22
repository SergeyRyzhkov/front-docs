# Infinite Scrolling

[[toc]]

Будем использовать:
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

Результат:

```vue
<InfiniteScroll @on-intersect="loadMore()">
    <template v-if="loading">
    </template>
</InfiniteScroll>
```

## InfiniteScroll.vue (Nuxt2 class-components)

```vue
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class InfiniteScroll extends Vue {
  @Prop()
  options: {};

  defaultOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0,
  };

  observer = {
    observe(_target: Element) {},
    disconnect() {},
  };

  mounted() {
    this.observer = new IntersectionObserver(
      ([item], _observer) => {
        if (!!item && item.isIntersecting) {
          this.$emit("on-intersect");
        }
      },
      { ...this.defaultOptions, ...this.options }
    );
    this.observer.observe(this.$el);
  }

  destroyed() {
    this.observer.disconnect();
  }
}
</script>
```

## InfiniteScroll.vue Vue3 (Composition API)

```vue
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, nextTick } from "vue";

const infiniteScrollWrapper = ref();
const props = withDefaults(defineProps<{ root?; rootMargin?: string; threshold?: number }>(), {
  root: null,
  rootMargin: "300px",
  threshold: 0.0,
});
const emit = defineEmits(["intersect-enter", "intersect-leave"]);

let observer = {
  observe(_target: Element) {},
  disconnect() {},
};

onMounted(async () => {
  observer = new IntersectionObserver(([item], _observer) => {
    if (!!item) {
      item.isIntersecting ? emit("intersect-enter") : emit("intersect-leave");
    }
  }, props);
  await nextTick();
  observer.observe(infiniteScrollWrapper.value);
});

onBeforeUnmount(() => {
  observer.disconnect();
});
</script>

<template>
  <div ref="infiniteScrollWrapper" style="height: 20px">
    <slot></slot>
  </div>
</template>
</script>

<template>
  <div ref="infiniteScrollWrapper" style="height: 20px">
    <slot></slot>
  </div>
</template>
```

::: tip rootMargin
Параметр `rootMargin` - может быть полезен в некоторых случаях, так как он дает нам возможность определить границу,\
которую наблюдатель (observer) будет использовать для поиска пересечений.\
По умолчанию rootMargin равен 0 - наблюдатель вызовет коллбек (пересечения), как только наш элемент войдет в окно просмотра.\
Установка значения rootMargin, например, в 400 пикселей означает, что коллбек intersect сработает ровно за 400 пикселей до того, как элемент войдет в область просмотра.\
Может быть полезно для превентивной подгрузки данных
:::

**Пояснения**

1. `IntersectionObserver` доступен только на клиенте, соответственно, создаем экземпляр в хуке mounted
2. `this.observer.observe(this.$el);`, `this.$el` - рутовый дом-элемент нашего компонента, который мы и будем "наблюдать"
3. `([item], _observer)` - так как элементу нас один, то делаем просто деструкцию одного элемента из массива (сахар)
4. `this.$emit("on-intersect")` - "выкидываем событие", если наш элемент "пересёк" заданнуюобласть

## Пример использования

```vue
<template>
  <main class="page-wrapper container">
    <BreadCrumbs />
    <h1>Новости</h1>

    <section class="news-list-wrapper mt-40">
      <NewsItem v-for="iter in newsList" :key="iter.id" :article-model="iter">
      </NewsItem>
    </section>

    <!-- При вхождении в область видимости "сработает" коллбек от IntersectionObserver
         и компонент "выкинет" событие on-intersect (наш обработчик loadDataChunk())  -->
    <InfiniteScroll
      class="news-list-wrapper mt-0"
      @on-intersect="loadDataChunk()"
    >
      <!-- На ммоент подгрузки данных (loading:boolean) отобразим скелетон -->
      <template v-if="loading">
        <SkeletonNewsItem v-for="index in 6" :key="index"> </SkeletonNewsItem>
      </template>
    </InfiniteScroll>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import NewsModel from "../models/NewsModel";
import { Pagination } from "@/_core/models/Pagination";
import { EmptyService } from "@/_core/service/EmptyService";

@Component
export default class NewsListPage extends Vue {
  // Массив новостей (моделей NewsModel)
  newsList: NewsModel[] = [];
  // Признак выполнения загрузки данных. Влияет на отображение индикатора (SkeletonNewsItem)
  loading = true;
  // Класс-модель "пагинации" и вспомогательные методы-вычисления
  pagination: Pagination = new Pagination();

  // "Первый" раз подгрузим данные
  async fetch() {
    await this.loadDataChunk();
  }

  // Подгрузка данных
  async loadDataChunk() {
    // Проверям есть ли еще данные (см.класс Pagination)
    if (Pagination.hasNextPage(this.pagination)) {
      // "Включаем" отображение скелетона на время выполнения запроса к беку
      this.loading = true;
      // Через helper-класс увеличиваем страницу (для пагинации на беке)
      Pagination.nextPage(this.pagination);
      // Выполняем запрос к беку за "новой" порцией данных (через пагинацию)
      const result = await this.$serviceLocator
        .getService(EmptyService)
        .getArrayOrEmptyWithPagination(
          NewsModel,
          "users/news",
          {},
          this.pagination
        );
      // Обновим общее количество элементов (важно если первый раз выполниил запрос к беку)
      this.pagination.total = result.pagination.total;
      // Расширим список Новостей (что было + новая "порция" данных)
      this.newsList = [...this.newsList, ...result.data];
      // "Выключаем+" отображение скелетона
      this.loading = false;
    }
  }
}
</script>
<style lang="scss">
.news-list-wrapper {
  @apply gap-y-30 gap-x-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
</style>
```

## Класс-модель-хелпер для пагинации

```ts
import { Expose } from "class-transformer";
import { BaseViewModel } from "./BaseViewModel";

export class Pagination extends BaseViewModel {
  total = 1;
  from = 1;
  to = 1;
  selectedPages: number[] = [];

  @Expose({ name: "per_page" })
  perPage = 12;

  @Expose({ name: "current_page" })
  currentPage = 0;

  @Expose({ name: "last_page" })
  lastPage = 0;

  // Дополнительные методы-хелперы для работы в режиме "подгрузки данных" (Show more, Infinite Scrolling)

  // 1. Увеличиваем (++) номер страницы
  // 2. В массив страниц "кладем" номер страницы (++)
  static nextPage(pagination: Pagination) {
    if (pagination.selectedPages.length === 0 && !!pagination.currentPage) {
      pagination.selectedPages.push(pagination.currentPage);
    }
    pagination.currentPage++;
    pagination.selectedPages.push(pagination.currentPage);
    return pagination;
  }

  static clearSelectedPages(pagination: Pagination) {
    pagination.selectedPages = [];
  }

  // Последняя обработанная страница
  static lastSelectedPage(pagination: Pagination) {
    return pagination.selectedPages.length
      ? pagination.selectedPages.slice(-1)[0]
      : 0;
  }

  // Есть ли еще страницы. Необходимо, например, для определения -
  // нужно ли еще делать запрос на API чтобы получить новую порцию данных)
  static hasNextPage(pagination: Pagination) {
    const lastSelectedPage = Pagination.lastSelectedPage(pagination);
    return (
      lastSelectedPage === 0 ||
      lastSelectedPage <
        (pagination.lastPage || Pagination.countPage(pagination))
    );
  }

  static countPage(pagination: Pagination) {
    return pagination.perPage > 0
      ? Math.ceil(pagination.total / pagination.perPage)
      : 0;
  }
}
```
