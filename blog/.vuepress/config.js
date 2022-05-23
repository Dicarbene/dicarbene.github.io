const { viteBundler } = require("@vuepress/bundler-vite");
const { gungnirTheme } = require("vuepress-theme-gungnir");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  title: "Xujie Wan",
  description: "lost mind in wild land",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`,
      },
    ],
    ["meta", { name: "application-name", content: "Xuejie Wan" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Xujie Wan" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` },
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "Dicarbene/dicarbene.github.io",
    docsDir: "blog",
    docsBranch: "master",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Dicarbene",
      avatar: "/img/avatar.jpg",
      description: "The single octupus lies on concrete land.",
      sns: {
        github: "Renovamen",
        email: "michaelnatvollhardt@gmail.com",
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.png",
      },
      {
        path: "/img/home-bg/2.png",
      },
      {
        path: "/img/home-bg/3.png",
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)",
        },
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
      },
      mdPlus: {
        all: true,
      },
      ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: " ",
        copyright: " ",
      },
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome",
      },
      {
        text: "About",
        link: "https://github.com/Dicarbene",
        icon: "fa-paw",
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag",
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish",
      },
      {
        text: "Portfolio",
        link: " ",
        icon: "oi-rocket",
      },
    ],

    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Dicarbene</a> 2020-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  }),

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5],
    },
    code: {
      lineNumbers: false,
    },
  },
};
