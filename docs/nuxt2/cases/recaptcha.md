# Google ReCaptcha v3

[[toc]]

## Общие сведения

[Официальное описание](https://developers.google.com/recaptcha/docs/v3)

**Ключевое изменение в версии V3**
 - reCAPTCHA v2 — требует "угадывать" картинки
 - reCAPTCHA v3 — не требует от пользователя действий, в фоне анализирует его поведение

Существует множество Vue (2,3) - плагинов, один из наиболее упоминаемых
[Vue reCAPTCHA-v3](https://github.com/AurityLab/vue-recaptcha-v3)

**Основной** недостаток, как и всех плагинов, модулей - необходимость глобально регистрировать (инсталлировать) плагин.\
Конечно, можно, регистрировать "lazy" по факту использования (например, при открытии формы и т.д.), но сами по себе скрипты `Google ReCaptcha v3`
несут следующие проблемы, которые мы "решим":

1. Висящий логотип в нижнем правом углу;
2. Потеря 20-30 баллов по Google PageSpeed Insight.

## Логотип в нижнем правом углу

В лицензионном соглашении Google допускает убрать логотип, скрыв его через CSS.\
Взамен под каждой формой (где используется `Google ReCaptcha`) необходимо вставить:

```vue
<p class="text-12 text-gray-color mt-16 md:mt-32 -mb-32">
    Защита от спама reCAPTCHA
    <a class="underline focus:no-underline inline" href="https://policies.google.com/privacy" target="_blank">Конфиденциальность</a>
      и
    <a class="underline focus:no-underline inline" href="https://policies.google.com/terms" target="_blank">Условия использования</a>
</p>
```

В глобальных (общих стилях, например, в `src\assets\styles\_layouts.scss`) прописываем:

```css
.grecaptcha-badge {
	visibility: hidden;
}
```

Итак, проблема № 1 "Висящий логотип в нижнем правом углу" **РЕШЕНА !!!** 

## Потеря 20-30 баллов по [Google PageSpeed Insight](https://pagespeed.web.dev/)

В тесте `Google Pagespeed` `Google ReCaptcha` ухудшает показатели сайта по следующим пунктам:

1. Удалите неиспользуемый код JavaScript
2. Удалите неиспользуемый код CSS
3. Настройте показ всего текста во время загрузки веб-шрифтов
4. Уменьшите влияние стороннего кода
5. Минимизируйте работу в основном потоке
6. Сократите время выполнения кода JavaScript
7. Старайтесь не допускать создания цепочек критических запросов
8. Избегайте длительных задач в основном потоке

Как известно, `Google Pagespeed` не измеряет скорость загрузки страницы. 
Он проверяет ресурс на соответствие определенному набору критериев, и чем больше у Вас попаданий в них, тем выше балл, который получает сайт при тестировании.\
Соответственно, здесь мы видим 8 пунктов, по которым страница сайта с `Google ReCaptcha` будет оцениваться низко.

**Что мы предпримем**:
1. Откажемся от использования сторонних плагинов
2. Почитаем доку на гугле по программному использованию `Google ReCaptcha`
3. Скрипт `Google ReCaptcha` будем загружать "лениво" ("отложенно") при первой необходимости

::: tip Внимание !
Google ReCaptcha v3 использует, цитата с документации: 
*"reCAPTCHA v3 returns a score for each request without user friction. The score is based on interactions with your site and enables you to take an appropriate action for your site"* 
Соотвественно, используя метод "ленивой" ("отложенной") загрузки скриптов, **возможно**, отразится на качестве работы алгоритмов Google ReCaptcha
:::

Итак, разработан:\
[**Модуль - Google ReCaptcha v3**](../other/recaptchautil.md), использующий\
[**Модуль - Загрузка внешних скриптов**](../other/externalscripts.md) 

## Комплексный пример

*Для даннго примера, в nuxt.config.ts в разделе `publicRuntimeConfig` должно быть указано свойство `reCaptchaSiteKey`* 

```ts{5-7,10}
@Component({ validations })
export default class FeedbackForm extends Vue {
  formModel: FeedbackModel = new FeedbackModel();

  mounted() {
    loadReCaptchaScript(this.$config.reCaptchaSiteKey);
  }

  async send() {
    const recaptchaToken = await executeAction(this.$config.reCaptchaSiteKey, "FeedbackForm");
    if (!!recaptchaToken) {
      this.formModel.recaptchaToken = recaptchaToken;
      try {
        await this.$serviceLocator.getService(EmptyService).apiRequest.post("/users/feedback", this.formModel);
      } catch (err: any) {
        this.$modalManager.showError("Не удалось отправть сообщение!");
      }
    } else {
      this.$modalManager.showError("Вы бот !");
    }
    this.$emit("close");
  }
}
```



