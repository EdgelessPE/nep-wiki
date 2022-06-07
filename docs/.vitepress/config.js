import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
  lang: "zh-CN",
  title: "NEP Wiki",
  description: "下一代 Edgeless 资源包官方文档",
  lastUpdated: true,
  base: "/wiki/",
  themeConfig: {
    logo: "https://home.edgeless.top/favicon.ico",
    sidebar,
    nav: [
      {
        text: "Edgeless PE",
        link: "https://home.edgeless.top/",
      },
    ],
    footer: {
      message: "Released under the MPL-2.0 License.",
      copyright: "Copyright © 2022-present Cno",
    },
    editLink: {
      style: 'github',
      domain: 'github.com',
      repo: 'EdgelessPE/nep-wiki',
      branch: 'master',
      dir: 'docs',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdatedText: "最近更新于",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/EdgelessPE/nep-cli' }
    ],
  },
});
