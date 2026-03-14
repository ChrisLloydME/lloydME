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

1. 将仓库推送到 GitHub。
2. 在 Cloudflare Pages 中连接这个 GitHub 仓库。
3. 构建配置填写：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. 选择生产分支，例如 `main`。

完成后，GitHub 新提交会触发 Cloudflare Pages 自动构建与部署。
