# Загрузка внешних скриптов

**Модуль** находтся в `src\utils\ExternalScript.ts`

```ts
export const scriptExists = (src: string) => {
  return !!document.querySelector(`script[src="${src}"]`);
};

export const loadScript = (src: string, async = false, defer = true) => {
  return new Promise((resolve, reject) => {
    const el = document.querySelector(`script[src="${src}"]`);

    if (!el) {
      const screl = document.createElement("script");
      screl.type = "text/javascript";
      screl.async = async;
      screl.defer = defer;
      screl.src = src;

      document.head.appendChild(screl);

      screl.addEventListener("error", reject);
      screl.addEventListener("abort", reject);
      screl.addEventListener("load", () => {
        screl.setAttribute("data-loaded", "true");
        resolve(screl);
      });
    }

    if (!!el && el.hasAttribute("data-loaded")) {
      resolve(el);
    }
  });
};

export const loadScriptOnScroll = (src: string, async = false, defer = true): Promise<boolean> => {
  return new Promise((resolve, _reject) => {
    if (!scriptExists(src)) {
      window.addEventListener(
        "scroll",
        async () => {
          const scroll = window.scrollY;
          if (scroll > 0) {
            try {
              await loadScript(src, async, defer);
              resolve(true);
            } catch {
              resolve(false);
            }
          }
        },
        true
      );
    } else {
      resolve(true);
    }
  });
};

export const unloadScript = (src: string) => {
  const el = document.querySelector(`script[src="${src}"]`);
  if (!el) {
    return;
  }
  document.head.removeChild(el);
};
```

**Пример** \
 [**Модуль - Google ReCaptcha v3**](../other/recaptchautil.md)

