import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

import sidebar from "./sidebar.json";
import navbar from "./navbar.json";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/front-docs/",

  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Поиск",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
  ],

  locales: {
    "/": {
      lang: "ru-RU",
      title: "Plenexy. Документация фронтендера",
    },
    "/en/": {
      lang: "en-US",
      title: "Plenexy. Frontend docs",
    },
  },

  themeConfig: {
    docsDir: "docs",

    locales: {
      "/": {
        selectLanguageName: "Русский",
        navbar: navbar["RU"] as any,
        sidebar: sidebar,
      },

      "/en/": {
        selectLanguageName: "English",
        navbar: navbar["EN"] as any,
        sidebar: sidebar,
      },
    },
  },
});