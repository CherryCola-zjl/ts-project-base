# TS项目架子搭建
## 环境
node v18.17.1 npm v9.6.7
## 依赖
- Webpack 进行 工程搭建

- EditorConifg、Prettier、ESLint、Airbnb JavaScript Style Guide 来保证 团队代码风格规范

- husky、Commitlint 和 lint-staged 来 构建前端工作流

- standard-version 生成 changelog

- TypeDoc 或者 Vuepress 快速生成 文档。

- html-webpack-plugin、webpack-dev-server 进行 本地热更新代码调试

- Jest 进行 单元测试，并约束提交 正确的代码

- Github Actions 进行 自动部署发布

## git commit 规范
 * build : 改变了build工具 如 webpack
 * ci : 持续集成新增
 * chore : 构建过程或辅助工具的变动
 * feat : 新功能
 * docs : 文档改变
 * fix : 修复bug
 * perf : 性能优化
 * refactor : 某个已有功能重构
 * revert : 撤销上一次的 commit
 * style : 代码格式改变
 * test : 增加测试

