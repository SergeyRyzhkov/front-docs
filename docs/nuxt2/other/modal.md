

```ts
 Vue.prototype.$modal.show(
    modal,
    {
      ...props,
    },
    options,
    {
      ...events,
      ...{ "before-open": (_event) => (document.documentElement.style.overflowY = "hidden") },
      ...{ "before-close": (_event) => (document.documentElement.style.overflowY = "auto") },
    }
);
```

Это хорошо и все такое, но если мы прокрутим элемент <body> до открытия модального окна,
мы получим небольшое горизонтальное перекомпонование. 
Ширина области просмотра увеличена примерно на 15 пикселей, что соответствует полосе прокрутки. 


body {
  height: 100vh;
  overflow-y: hidden;
  padding-right: 15px; /* Avoid width reflow */
}

Нот тут проблема  Safari for iOS будет все равно скролиться 

Делаем
body {
  position: fixed;
}

Опять проблема. После закрыти окна - страница будет проскролена до верха