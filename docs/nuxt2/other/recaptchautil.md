# Google ReCaptcha v3 utils

`src\utils\ReCaptcha.ts`

**Используется модуль**   [**Загрузка внешних скриптов**](../other/externalscripts.md)

**Пример использования**  [**Google ReCaptcha v3**](../cases/recaptcha.md)


```ts
import { loadScript } from "./ExternalScript";

declare const window: Window &
  typeof globalThis & {
    grecaptcha: any;
  };

let scriptLoaded = false;

export const loadReCaptchaScript = async (siteKey: string) => {
  if (!scriptLoaded) {
    try {
      await loadScript(`https://www.google.com/recaptcha/api.js?render=${siteKey}`);
      scriptLoaded = true;
    } catch {
      scriptLoaded = false;
    }
  }
};

export const executeAction = async (siteKey: string, actionName: string): Promise<string | null> => {
  await loadReCaptchaScript(siteKey);
  return new Promise((resolve, _reject) => {
    if (scriptLoaded && !!window.grecaptcha) {
      try {
        window.grecaptcha.ready(async () => {
          const token = await window.grecaptcha.execute(siteKey, { action: actionName });
          resolve(token);
        });
      } catch {
        resolve(null);
      }
    }
  });
};
```


**Используется модуль**   [**Загрузка внешних скриптов**](../other/externalscripts.md)

**Пример использования**  [**Google ReCaptcha v3**](../cases/recaptcha.md)