# ESlint, Prettier, StyleLint (TS) #
[[toc]]

##  Устанавливаем пакеты

::: tip Внимание !
Версии пакетов необходимо уточнять !!!
:::

```json
"devDependencies": {
    ...
    "prettier": "^2.4.1",
    "eslint": "^8.2.0",

    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-nuxt": "^3.0.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-tailwindcss": "^2.0.1",
    
    "prettier-plugin-tailwindcss": "^0.1.4",

    "@nuxtjs/eslint-config-typescript": "^7.0.2",
    "@nuxtjs/eslint-module": "^3.0.2",

    "@typescript-eslint/eslint-plugin": "^5.3.1",
    "@typescript-eslint/parser": "^5.3.1",

    "stylelint": "^14.3.0",
    "postcss-html": "^1.3.0",
    "stylelint-config-recommended": "^6.0.0",
    "stylelint-config-recommended-vue": "^1.0.0",
    "stylelint-config-standard": "^24.0.0",
    "stylelint-config-standard-scss": "^3.0.0",
    ...
 }
```

## В корне проекта создаем файлы

*`.eslintrc.json`*
```json
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "@nuxtjs",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "plugin:tailwindcss/recommended"
  ],
  "plugins": ["prettier", "tailwindcss"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "no-extra-boolean-cast": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "tailwindcss/classnames-order": "off",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/migration-from-tailwind-2": "warn",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "error"
  }
}
```

*`.eslintignore`*
```
.gitignore
```

*`.stylelintrc`*
```json
{
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue"
  ],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "block-no-empty": null,
    "unit-allowed-list": ["em", "rem", "s"]
  }
}
```

*`.editorconfig`*
```
[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = space
insert_final_newline = true
max_line_length = 130
tab_width = 2
trim_trailing_whitespace = true
ij_continuation_indent_size = 8
ij_formatter_off_tag = @formatter:off
ij_formatter_on_tag = @formatter:on
ij_formatter_tags_enabled = false
ij_smart_tabs = false
ij_visual_guides = none
ij_wrap_on_typing = false

[*.css]
indent_size = 2

и так далее

```

## Package.json
```json
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

Выполнять, соотвественно
```sh
npm run lint:script
npm run lint:style
```

## VS Code Extension

Устанавливаем расширения:

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)\
[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


