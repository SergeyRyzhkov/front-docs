# Skeleton (иллюзия быстрой загрузки страниц)

## Введение ##

При отображении статуса загрузки страницы, в основном существует два способа: 
- графики загрузки
- индикаторы выполнения

Но, все больше и больше приложений используют метод «скелетного экрана» для отображения выгруженного контента, предоставляя пользователям совершенно новый опыт.

**Скелетный экран (в качестве экрана заставки) используется, чтобы дать понять пользователю, что страница загружается.\
В сравнении с пустым экраном и спиннером он создаёт иллюзию более быстрой загрузки страниц.**

*Рекомендую почитать отличное [исследование](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a) продуктового дизайнера компании Clio Билла Чанга.
[Перевод исследования](https://vc.ru/design/59939-dlya-illyuzii-bystroy-zagruzki-stranic-pravila-sozdaniya-skeletnogo-ekrana-na-saytah-i-v-prilozheniyah)*

## Существующие реализации ##

Все основные "монстры" в своем "боекомплекте" содержат компоненты для построения Skeleton
[Vuetify](https://vuetifyjs.com/en/components/skeleton-loaders/), [vue-bootstrap](https://bootstrap-vue.org/docs/components/skeleton), [Framework7](https://framework7.io/vue/skeleton), [Quasar](https://quasar.dev/vue-components/skeleton) и т.д.

Также есть множество отдельных пакетов: [Skeleton Elements](https://skeleton-elements.dev/vue/), [vue-loading-skeleton](https://github.com/kitwon/vue-loading-skeleton), [vue-skeleton-loading](https://github.com.cnpmjs.org/jiingwang/vue-skeleton-loading), ... и еще штук 30 

Почти все реализации предполагают: 
1. Создание дополнительных компонент или же верстка непосредственно в шаблоне скилетона (ов)
2. Построение скилетона с использованием входящих в пакет собственных компонентов, типовые примеры:
   
[vue-bootstrap](https://bootstrap-vue.org/docs/components/skeleton)
```vue
 <b-skeleton-wrapper :loading="loading">
    <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
    </template>
    <b-card>
        turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
        sit amet sollicitudin neque sodales in.
    </b-card>
</b-skeleton-wrapper>
```


[Vuetify](https://vuetifyjs.com/en/components/skeleton-loaders/)
```vue
<v-col cols="12" md="4">
    <v-skeleton-loader v-bind="attrs" type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions">
    </v-skeleton-loader>
    <v-skeleton-loader v-bind="attrs" type="list-item-avatar-three-line, image, article">
    </v-skeleton-loader>
</v-col>
```

[vue-loading-skeleton](https://github.com/kitwon/vue-loading-skeleton)
```vue
<div class="item">
  <div class="item__photo">
    <PuSkeleton circle height="50px">
      {{ props.data.img }}
    </PuSkeleton>
  </div>
  <div class="item__meta">
    <div class="item__title">
      <PuSkeleton>{{ props.data.title }}</PuSkeleton>
    </div>
    <div class="item__info">
      <PuSkeleton :count="2">{{ props.data.body }}</PuSkeleton>
    </div>
  </div>
</div>
```

![Cписок новостей - Skeleton](../../public/skelenon-list.jpg)

