# Image Lazy load

Существует атрибут loading. Если добавить его к изображению или фрейму (iframe) со значением lazy, то они будут загружаться лениво. И все бы ничего, вот только данный атрибут не поддерживается Safari, а там, где поддерживается, срабатывает не всегда корректно, поэтому для продакшна он не подходит.

## Исходный код

```ts
const loadClassesName = ["loading-image"];

const options = {
  root: null,
  rootMargin: "50px",
  threshold: 0,
};

let observer = {
  observe(_target: HTMLElement) {},
};

if (process.client) {
  observer = new IntersectionObserver((images, observer) => {
    images.forEach((iter) => {
      if (iter.isIntersecting) {
        const lazyImg = iter.target;
        if (!!lazyImg) {
          lazyImg.setAttribute("src", lazyImg.getAttribute("data-src") || "");

          const onLoaded = () => {
            lazyImg.setAttribute("data-loaded", "true");
            lazyImg.removeAttribute("data-src");
            lazyImg.classList.remove(...loadClassesName);
          };

          lazyImg.addEventListener("load", onLoaded);
          lazyImg.addEventListener("loadeddata", onLoaded);
        }
        observer.unobserve(lazyImg);
      }
    });
  }, options);
}

export const observe = (target: HTMLElement) => {
  target.classList.add(...loadClassesName);
  observer.observe(target);
};
```

## Директива

```ts
import { observeImage } from "../utils/ImageLazyLoad";

const LazySrc = {
  bind(el, binding, _vnode) {
    if (el.setAttribute) {
      if (!el.getAttribute("alt")) {
        el.setAttribute("alt", " ");
      }
      if (!el.getAttribute("data-src")) {
        el.setAttribute("data-src", binding.value);
      }
    }
    observe(el);
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.setAttribute("data-src", binding.value);
      el.setAttribute("src", binding.value);
    }
  },
};

Vue.directive("lazysrc", LazySrc);
```

## Пример

```vue{9}
<template>
  <LazyHydrate when-visible>
    <nuxt-link
      v-if="!!item"
      :to="{ name: 'training-card', params: { slug: `${item.meta_slug}-${item.id}` } }"
      class="flex flex-col cursor-pointer"
    >
      <div class="relative">
        <img v-lazysrc="imageSrc" width="300" height="160" class="h-160 hover:scale-105 transition-all" alt=" " />
        <div class="absolute top-16 left-16 bg-primary px-16 py-8 rounded-full text-14 text-white">{{ statusName }}</div>
      </div>
      <div class="flex items-center justify-between mt-16">
        <div class="text-14">{{ dateTypeAddress }}</div>
        <div class="font-semibold">{{ priceFormatted }}</div>
      </div>
      <div class="text-22 mt-12">{{ item.name }}</div>
      <div class="mt-12 text-14">{{ item.lecturer }}</div>
    </nuxt-link>
  </LazyHydrate>
</template>
```
