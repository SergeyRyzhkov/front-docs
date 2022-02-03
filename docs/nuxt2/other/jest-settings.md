# Jest Nuxt TypeScript

[[toc]]

Back to your question. @nuxtjs/style-resources is not ESM module. File extension is .js, "type": "module" is not declared in package.json, so Node will treat this module as CJS, but will choke on export default (line 6). We can change file extension or add "type": "module", but require does not exist in ESM (it is used in the very first line). This code is written is Javascript, but according to Node’s specification this is not CJS, nor ESM module.

## Установка и настройка Jest

```sh
yarn add --dev jest ts-jest vue-jest @vue/test-utils @nuxt/test-utils @types/jest jest-serializer-vue jest-transform-stub
```

::: tip @vue/test-utils vs @nuxt/test-utils
Это два разных инструмента. Для достижения наилучшего результата используйте их оба.

Если мы говорим о приложениях Nuxt, `@nuxt/test-utils` создаст приложение (или сгенерирует веб-сайт), запустит сервер и предоставит браузер и т.д.\
Например, `@nuxt/test-utils` может помочь проверить, работают ли маршруты, мидлваре, модули и т.д. и отображаются ли страницы должным образом.\
То есть акцентируемся на маршрутах, экземпляре Nuxt, но не на компонентах Vue.

`@vue/test-utils` для тестирования компонентов Vue (или приложения Vue).\
Публичный API: mount(), smallMount(), render(), renderToString() и т. д. `@vue/test-utils` не создает приложения Nuxt и ничего не знает об экземпляре Nuxt.
:::

В корне проекта создать файл **`jest.config.ts`**

```ts
import type { Config } from "@jest/types";

const ignorePaths = [
  "<rootDir>/.git",
  "<rootDir>/.nuxt",
  "<rootDir>/.vscode",
  "<rootDir>/node_modules/",
];

const config: Config.InitialOptions = {
  preset: "@nuxt/test-utils",
  // globalSetup: "./jest.setup.ts",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testURL: "http://localhost/",

  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/src/modules/**/*.vue",
    "<rootDir>/src/modules/**/*.ts",
  ],
  modulePathIgnorePatterns: ignorePaths,
  testPathIgnorePatterns: ignorePaths,
  coveragePathIgnorePatterns: ignorePaths,
};

export default config;
```

В корне проекта создать файл **`jest.setup.js`**

В файле `tsconfig.json` добавить `"@types/jest"`

```js
"types":
   [
    "@types/node",
    "@nuxt/types",
    "@types/jest"
   ]
```

В файле `package.json` добавить

```json{8,9,10,11}
"scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "lint:script": "eslint --ext .ts,vue --ignore-path .gitignore --fix src",
    "lint:style": "stylelint \"**/*.{css,scss,sass,html,vue}\" --ignore-path .gitignore",
    "lint:prettier": "prettier --check .",
    "lint": "yarn lint:script && yarn lint:style && yarn lint:prettier",
    "format": "prettier .  --write",
    "test:unit": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --no-cache --runInBand",
    "test:unit:watch": "jest --watch",
    "test:unit:coverage": "jest --coverage",
    "test": "yarn test:unit"
},
```

## Установка Babel

::: tip Важно!
Установить именно **babel-core@7.0.0-bridge.0**
:::

```sh
yarn add --dev babel-core@7.0.0-bridge.0 @babel/preset-env babel-jest @babel/preset-typescript babel-plugin-dynamic-import-node babel-plugin-transform-decorators
```

В корне проекта создать файл **`babel.config.js`**

```js

```

## Заключение

1. В файле `.gitignore` добавить

```
coverage
.nuxt-build-jest
```

2. Очень "удобное" расширение для VS Code [vscode-jest](https://github.com/jest-community/vscode-jest)

часть 2 :)
Изучаю кишки...

Вот его пресет
https://github.com/nuxt/test-utils/blob/main/jest-preset.js
Ставит мне окружение в 'node', а js|ts "прогоняет" через babel-jest
Бейбель на край, пока в топку пресет
Нужен такой трансформ
transform: {
"^.+\\.ts$": "ts-jest",
    ".*\\.(vue)$": "vue-jest",
},

Смотрю рукожопный пакет style-resources
Расширение js, в package.json "type": "module" НЕТ. Для Node значит это CJS , но там есть export ...
