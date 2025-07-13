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
  description:
    "Rule-based data validation library in JavaScript. It's extendable, function-oriented, and i18n supported.",
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
      message:
        'Released under the MIT License. | <a href="/privacy-policy">Privacy Policy</a> | <a href="/cookie-policy">Cookie Policy</a> | <a style="cursor: pointer" data-cc="show-preferencesModal">Cookie preferences</a>',
      copyright: "Copyright © 2020-present",
    },

    search: { provider: "local" },
  },

  head: [
    ["meta", { property: "og:url", content: "https://validator.axe-api.com" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Robust Validator" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Rule-based data validation library in JavaScript. It's extendable, function-oriented, and i18n supported.",
      },
    ],
    [
      "meta",
      { property: "og:image", content: "https://validator.axe-api.com/og.png" },
    ],

    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:domain", content: "validator.axe-api.com" }],
    [
      "meta",
      { property: "twitter:url", content: "https://validator.axe-api.com" },
    ],
    ["meta", { name: "twitter:title", content: "Robust Validator" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Rule-based data validation library in JavaScript. It's extendable, function-oriented, and i18n supported.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://validator.axe-api.com/og.png",
      },
    ],

    ["link", { rel: "stylesheet", href: "/cookieconsent.css" }],
    ["script", { defer: "", src: "/init.js" }],
    [
      "script",
      {
        type: "text/plain",
        "data-category": "analytics",
        async: "",
        "data-src": "https://www.googletagmanager.com/gtag/js?id=G-67G9G0VBCC",
      },
    ],
    [
      "script",
      { type: "text/plain", "data-category": "analytics" },
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-67G9G0VBCC', { anonymize_ip: true });
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
