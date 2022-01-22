# SCSS, CSS переменные и Tailwind

Обычно в файле  `src\assets\styles\_variables.scss` определяются глобальные переменные, например,

```css
$primary: #131313;
$secondary: #ef8532;
$light-gray: #9f9f9f;
$text-gray: #9d9d9d;
$gray: #9d9d9d;
$footer-color: #575555;
$red-color: #ff1220;
$font-famaly: "Montserrat", sans-serif, "Roboto",
```

В файле `tailwind.config` ,естественно, данные переменные SCSS использовать не предоставляется возможным.
Можно использовать только глобальные CSS-переменные

**Решение**

В файле `src\assets\styles\_index.scss` делаем маппинг SCSS и CSS переменных

```css
@import "variables";
@import "layouts";
@import "media";
@import "typography";

:root {
  --primary: #{$primary};
  --secondary: #{$secondary};
  --light-gray: #{$light-gray};
  --gray: #{$gray};
  --text-gray: #{$text-gray};
  --footer-color: #{$footer-color};
  --red-color: #{$red-color};
}
```  
Теперь везде, где необходимо, можно использовать как CSS, так и SCSS перменные, например, в `tailwind.config`

```js
extend: {
    colors: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      "text-gray": "var(--text-gray)",
      "footer-color": "var(--footer-color)",
    }
},
```
