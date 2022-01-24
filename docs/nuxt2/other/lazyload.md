# Image Lazy load

Существует атрибут loading. Если добавить его к изображению или фрейму (iframe) со значением lazy, то они будут загружаться лениво. И все бы ничего, вот только данный атрибут не поддерживается Safari, а там, где поддерживается, срабатывает не всегда корректно, поэтому для продакшна он не подходит.

## Исходный код

```ts
const loadClassesName = ["rsn-skeleton", "rsn-animate-wave"];

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
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

          lazyImg.addEventListener("load", () => {
            lazyImg.setAttribute("data-loaded", "true");
            lazyImg.classList.remove(...loadClassesName);
          });
        }
        observer.unobserve(lazyImg);
      }
    });
  }, options);
}

export const observeImage = (target: HTMLElement) => {
  target.classList.add(...loadClassesName);
  observer.observe(target);
};
```

## Директива

```ts
const LazyImg = {
  bind(el, binding) {
    el.decoding = "async";
    if (el.setAttribute) {
      if (!el.getAttribute("alt")) {
        el.setAttribute("alt", " ");
      }
      if (!el.getAttribute("data-src")) {
        el.setAttribute("data-src", binding.value);
      }
    }
    observeImage(el);
  },
};

Vue.directive("lazyimg", LazyImg);
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
        <img v-lazyimg="imageSrc" width="300" height="160" class="h-160 hover:scale-105 transition-all" alt=" " />
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
