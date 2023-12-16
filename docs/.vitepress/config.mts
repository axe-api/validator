import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Axe API Validator",
  description: "Another data validation library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: "GitHub", link: "https://github.com/axe-api/validator" }],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Why?", link: "/why" },
          { text: "Getting started", link: "/learn" },
          { text: "Terminology", link: "/terminology" },
        ],
      },
      {
        text: "Rules",
        items: [
          { text: "Why?", link: "/xx" },
          { text: "Getting started", link: "/rr" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/axe-api/validator" },
    ],
  },
});