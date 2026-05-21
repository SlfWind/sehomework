import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "软件设计实践作业",
  base: "/sehomework-doc/",
  theme: defaultTheme({
    navbar: [
      {
        text: "GitHub",
        link: "https://github.com/pku-software/project-doc"
      }
    ],
    sidebar: [
      {
        text: "软件测试",
        children: [
          "/test/intro",
        ],
      },
    ],
  }),
});
