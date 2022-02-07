# Техкарты. Чеклисты #

[[toc]]

## "Инициирование проекта"  ##

1. Создать шаблон приложения из [репы](https://github.com/SergeyRyzhkov/rsn-nuxt2-template)
2. Создать файл `.env` и прописать необходимые значения
3. Проверить и внести изменения в файл `package.json` 
   - наименование, версия, автор
   - добавить/убртаь пакеты
   - провериь версии пакетов
4. Проверить и внести изменения в `nuxt.congig.ts`
   - модули
   - плагины
   - секции: publicRuntimeConfig, privateRuntimeConfig, webfontloader, axios 
5. Заменить файл favicon.ico (png)
6. Настроить стили: 
   - изменить/прописать SCSS переменные в файле `\src\assets\styles\_variables.scss`
   - прописать параметры типографики в файле `\src\assets\styles\_typography.scss`
   - просмотреть и при необходимости изменить базовые стили в файле `\src\assets\styles\_layouts.scss`
   - в фале `\src\assets\styles\_index.scss` проверить импорты, а также сделать маппинг scss-переменных на css-переменные
   - прописать шрифты, цвета и т.д. в `tailwind.config` (в корне проекта)  
7. установить пакеты (если есть файл `yarn.lock` - удалить) 
   ```sh   
   yarn install
   ``` 
8. Убедиться в наличии файла `.gitignore` (в корне проекта) и что в файле всё прописано верно
9. Создать репозитарий (на гитхабеб гитлабе, битбакене итд)
10. Перейти в "корень" проекта и выполнить:
```sh
git init
git add .
git git commit -m "init"
git branch -M main
git remote add origin https://github.com/SergeyRyzhkov/<repo name>
git push -u origin main
```