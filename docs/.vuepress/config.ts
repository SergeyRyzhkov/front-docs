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

    [
      "@vuepress/plugin-google-analytics",
      {
        id: "G-217885888",
      },
    ],
    //["@vuepress/plugin-shiki"],
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
    lastUpdated: false,
    sidebarDepth: 1,
    contributorsText: "Автор",
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
