# Компонент для просмотра видео

Используется html tag [video](https://developer.mozilla.org/ru/docs/Web/HTML/Element/video)\
[Описание атрибутов и событий](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)\
[Спецификация](https://html.spec.whatwg.org/#video)

**Минимальный компонент**

```vue
<template>
  <div>
    <video v-bind="$attrs" :class="videoClasses" v-on="$listeners"></video>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({ inheritAttrs: false })
export default class BaseVideoPlayer extends Vue {
  @Prop()
  videoClasses: string;
}
</script>
```

**Пример использования**

```vue
<template>
    <LazyBaseVideoPlayer
        v-if="video && showVideo" // Условие отображения компонента
        :src="video" // Источник видео
        class="w-full h-full order-1 bg-[#F5F5F5] absolute z-50" // Класс (стиля) внешнего компонента    
        video-classes="w-full h-full" // Класс(стиля) внутреннего тега video
        controls
    />
</template>
```
