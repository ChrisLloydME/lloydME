# Astro Personal Blog

一个以内容为主的个人网站 + 博客系统骨架，基于 Astro、TypeScript、Markdown 和 Tailwind CSS，默认生成纯静态站点，适合部署到 Cloudflare Pages。

## 技术栈

- Astro
- TypeScript
- Markdown Content Collections
- Tailwind CSS
- 静态部署到 Cloudflare Pages

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

如果要生成正确的站点绝对地址，可以在构建前设置 `SITE_URL`：

```bash
SITE_URL="https://example.com" npm run build
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

## 部署到 Cloudflare Pages

在 Cloudflare Pages 中连接这个 GitHub 仓库后，使用以下设置：

1. `Framework preset`: `Astro`
2. `Build command`: `npm run build`
3. `Build output directory`: `dist`
4. `Environment variable`: `SITE_URL=https://你的域名`

如果你先使用 Cloudflare 提供的 `*.pages.dev` 域名，也可以先把 `SITE_URL` 设成对应地址，后续切换自定义域名时再更新。

这个仓库已经移除了 GitHub Pages 的子路径配置，因此更适合直接部署在 Cloudflare 的根路径上。
