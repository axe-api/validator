import { defineConfig } from "vitepress";
import { SitemapStream } from "sitemap";
import { resolve } from "node:path";
import { createWriteStream } from "node:fs";
import fs from "fs";
import path from "path";

const links: any = [];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Robust Validator",
  description: "Another data validation library",
  lang: "en-US",
  lastUpdated: false,
  appearance: "force-dark",

  themeConfig: {
    nav: [{ text: "Blog", link: "/blog" }],

    editLink: {
      pattern: "https://github.com/axe-api/validator/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Why?", link: "/why" },
          { text: "Getting started", link: "/getting-started" },
          { text: "Examples", link: "/examples" },
          { text: "Terminology", link: "/terminology" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "Rules", link: "/rules" },
          { text: "i18n", link: "/i18n" },
          { text: "Customization", link: "/customization" },
          { text: "Options", link: "/options" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/axe-api/validator" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2020-present",
    },

    search: { provider: "local" },
  },

  head: [
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-67G9G0VBCC",
        async: "",
      },
    ],
    [
      "script",
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-67G9G0VBCC');
      `,
    ],
  ],

  transformHtml: (_, id, { pageData }) => {
    const file = fs.statSync(path.join(__dirname, "..", pageData.relativePath));
    if (!/[\\/]404\.html$/.test(id)) {
      const url = pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2");
      // you might need to change this if not using clean urls mode
      links.push({
        url: url.length > 0 ? `${url}.html` : url,
        lastmod: file.mtime,
      });
    }
  },

  buildEnd: ({ outDir }) => {
    // console.log(links)
    const sitemap = new SitemapStream({
      hostname: "https://validator.axe-api.com/",
    });
    const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
  },
});
