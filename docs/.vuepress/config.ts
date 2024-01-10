import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
const packageJson = require("../../package.json")

export default defineUserConfig({
  // 站点配置
  title: packageJson.name,
  description: packageJson.description,

  base:'/ts-project-base/',

  // 主题和它的配置
  theme: defaultTheme({
    navbar:[
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "API",
        link: "/api/",
      },
    ],
  })
})
