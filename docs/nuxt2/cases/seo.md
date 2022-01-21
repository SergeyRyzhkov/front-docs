# SEO - оптимизация

[[toc]]

## Основные положения

## Формирование мета-тегов

Для изменения (вставки) метатегов в секцию `<head>` Vue использует пакет vue-meta. Мы также будем использовать его возможности.

### Базовая реализация 

В базовых классах реализованы:

1. Класс-модель `SeoModel  (src\_core\models\SeoModel.ts)`, описывающий мета-теги
   
```ts
export default class SeoModel extends BaseViewModel {
  meta_h1: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_slug: string;
  meta_image?: string;
  fullPath: string;

  public constructor(init?: Partial<SeoModel>) {
    super();
    Object.assign(this, init);
  }
}
```

2. Сервис `SeoMetaTagsBuilder (src\_core\service\SeoMetaTagsBuilder.ts)` - для преобразования и формирования объекта, необходимого для пакета vue-meta

```ts
 return {
      title: meta?.meta_title,
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: meta.fullPath,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: meta?.meta_title?.substring(0, 70),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: meta?.meta_description?.substring(0, 150),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: meta?.meta_image,
        },
        {
          hid: "description",
          name: "description",
          content: meta?.meta_description?.substring(0, 150),
        },
        {
          hid: "Keywords",
          name: "Keywords",
          keywords: meta?.meta_keywords,
        },
      ],
    };
```

### Примеры

#### Для страницы в админке определены поля для SEO-мета тегов

```vue{13,19-24}
<script lang="ts">
import { Component, Prop, Vue, getModule } from "nuxt-property-decorator";
import NewsModel from "../models/NewsModel";
import { SeoMetaTagsBuilder } from "@/_core/service/SeoMetaTagsBuilder";
import { EmptyService } from "@/_core/service/EmptyService";

@Component
export default class NewsPage extends Vue {
  @Prop()
  slug: string;

  // Модель данных Новость, унаследованная от SeoModel 
  newsModel: NewsModel = new NewsModel();

  async fetch() {
  }
 
  // Определяем логику. Пакет vue-meta будет "дергать" метод head() и ожидать объект с описанием метатегов
  head() {
    if (!!this.newsModel.meta_slug) {
      this.newsModel.meta_image = this.newsModel.logo?.url || this.newsModel.banner?.url || undefined;
      return this.$serviceLocator.getService(SeoMetaTagsBuilder).create(this.newsModel, this.$route.fullPath);
    }
  }
}
</script>
```

#### Для страницы в админке НЕ определены поля для SEO-мета тегов

В данном случае необходимо всё равно определить на странице метод head(), но в качестве модели передать `undefined`

```ts
head() {
    return this.$serviceLocator.getService(SeoMetaTagsBuilder).create(undefined, this.$route.fullPath);
}
``` 

В сервисе `SeoMetaTagsBuilder`, если не задана модель мета-тегов (в методе `create`), будут использованы значения по-умолчанию, взятые из конфига

```ts
 private setDefaultValues(headMetaTagInfo: SeoModel | null | undefined, _pageRelativePath?: string): SeoModel {
    const config = this.ctx.$config;

    headMetaTagInfo = headMetaTagInfo || new SeoModel();
    headMetaTagInfo.meta_description = headMetaTagInfo.meta_description || config.defaultMetaDescription;
    headMetaTagInfo.meta_title = headMetaTagInfo.meta_title || config.defaulMetaTitle;
    headMetaTagInfo.meta_image = headMetaTagInfo.meta_image || config.defaulMetaImgSrc;
    headMetaTagInfo.meta_keywords = headMetaTagInfo.meta_keywords || config.defaultMetaDescription;
    headMetaTagInfo.fullPath = `${config.siteUrl}/${_pageRelativePath?.toLowerCase()}`;
    return headMetaTagInfo;
  }
```

### Значения по-умолчанию

Для опредления значений по-умолчанию необходимо в `nuxt.config` определить:

```js
 publicRuntimeConfig: {
    siteUrl: "https://kaypro.plenexy.digital",
    defaultMetaDescription: "Эксклюзивный представитель итальянского бренда .......",
    defaulMetaTitle: "Эксклюзивный представитель..........",
    defaulMetaImgSrc: "https://kaypro.plenexy.digital/images/header_logo.png",
 }
```


## Канонические ссылки


## Микроразметка