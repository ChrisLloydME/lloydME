# Astro Personal Blog

一个以内容为主的个人网站 + 博客系统骨架，基于 Astro、TypeScript、Markdown 和 Tailwind CSS，默认生成纯静态站点，适合部署到 GitHub Pages。

## 技术栈

- Astro
- TypeScript
- Markdown Content Collections
- Tailwind CSS
- 静态部署到 GitHub Pages

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址通常为 `http://localhost:4321`。

## 构建

```bash
npm run build
npm run preview
```

## 内容目录

博客文章位于 `src/content/blog`，每篇文章使用 frontmatter 管理元数据，例如：

```md
---
title: 示例文章
date: 2026-03-14
description: 文章摘要
tags: [blog, example]
draft: false
featured: true
---
```

## 页面结构

- `/` 首页
- `/blog` 博客列表
- `/blog/[slug]` 文章详情
- `/about` About 页面
- `/projects` Projects 页面
- `/tags` 标签页
- `/tags/[tag]` 单个标签归档页

## 部署到 GitHub Pages

仓库已经包含 GitHub Actions 工作流 [`/.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)，推送到 `main` 后会自动构建并发布到 GitHub Pages。

首次启用时需要在 GitHub 仓库里完成一次设置：

1. 进入仓库 `Settings` -> `Pages`。
2. 在 `Build and deployment` 里将 `Source` 设为 `GitHub Actions`。
3. 确认仓库名与 Astro 配置中的 `base` 一致。

当前配置：

- 站点域名：`https://chrislloydme.github.io`
- 仓库路径基址：`/lloydME`

如果你之后修改 GitHub 用户名、仓库名，或者改用自定义域名，需要同步更新 [`astro.config.mjs`](./astro.config.mjs) 里的 `site` 和 `base`。
