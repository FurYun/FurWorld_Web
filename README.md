# FurWorld 官网

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)
[![Nuxt Content](https://img.shields.io/badge/Content-Nuxt%20Content-00DC82?logo=nuxt&labelColor=020420)](https://content.nuxtjs.org)

FurWorld 是一个面向福瑞亚文化社区的 Minecraft 服务器，这是它的官方网站。

## 功能

- 服务器介绍与加入指南
- 基于 Nuxt Content 的 Wiki 系统
- 插件玩法教程
- 公告与新闻
- 跨平台支持说明

## 技术栈

- [Nuxt 4](https://nuxt.com)
- [Nuxt UI v4](https://ui.nuxt.com)
- [Nuxt Content](https://content.nuxtjs.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览
npm run preview
```

## 部署

在 [Vercel](https://vercel.com) 导入此仓库即可自动部署。

## 内容管理

Wiki 和公告位于 `content/` 目录：

```
content/
├── wiki/           # Wiki 文档
│   ├── quick-start.md
│   ├── economy.md
│   ├── residence.md
│   ├── slimefun.md
│   ├── voice-chat.md
│   └── faq.md
└── news/
    └── index.md    # 开服公告
```

直接编辑 Markdown 文件即可更新内容。

## 服务器信息

| 服务器 | 地址 | 版本 |
|--------|------|------|
| 休闲生存 | `smp.fur-island.asia:25565` | Java 1.20.2 / Bedrock 1.21.40 |
| 粘液科技 | `slime.fur-island.asia:25565` | Java 1.21.1+ / Bedrock 1.21.40 |
| 基岩版 | `fur-island.asia:37864` | Bedrock 1.21.40 |

## 许可证

MIT