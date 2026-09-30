# Personal Site

一个面向个人主页/作品集的低成本静态网站，技术栈为 Astro + GitHub + Cloudflare Workers。

## 当前状态

站点结构、响应式界面、SEO、404、GitHub CI 和 Workers 部署配置已经就绪。个人姓名、简介、邮箱、项目、社交链接和正式域名仍是占位内容，统一在 `src/config/site.ts` 中修改。

## 本地运行

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

常用检查：

```bash
npm run check
npm run build
```

## 网站语言

网站提供简体中文、日语和英语。中文使用原有路径，日语和英语分别使用 `/ja/`、`/en/` 前缀；页面顶部的语言切换会保持当前页面。公共导航和路径工具在 `src/i18n.ts`，各页面的三语文案在对应 Astro 页面或 `src/components/pages/` 组件中。更新项目内容时，请同步更新三种语言并运行 `npm run check`、`npm run build`。

## 内容配置

编辑 `src/config/site.ts`：

- `name` / `initials`：姓名与头像字母
- `title` / `description`：身份定位与一句话介绍
- `url` / `email`：正式域名与联系邮箱
- `hero` / `about`：首页主文案与个人简介
- `projects`：项目名称、说明、标签和链接
- `links`：GitHub、LinkedIn、小红书等外部链接

配置正式域名后，也要同步修改 `public/robots.txt` 里的 Sitemap 域名。

## 发布到 Cloudflare Workers

本项目是纯静态站点，使用 Workers Static Assets，不需要 Astro Cloudflare SSR 适配器。

### 推荐：Cloudflare Workers Builds

1. 将代码推送到 GitHub 仓库的 `main` 分支。
2. 在 Cloudflare Dashboard 打开 **Compute > Workers & Pages > Create application**。
3. 选择 **Import a repository**，授权并选择该 GitHub 仓库。
4. Build command 填 `npm run build`。
5. Deploy command 填 `npm run deploy`。
6. 保存并发布；之后每次推送到 `main` 都会自动部署。

Cloudflare 会先提供一个 `*.workers.dev` 地址。需要自定义域名时，在 Worker 的 **Settings > Domains & Routes** 中添加即可。

### 手动部署

本机完成 Cloudflare 登录后：

```bash
npm run build
npx wrangler login
npm run deploy
```

## GitHub

`.github/workflows/ci.yml` 会在推送和 Pull Request 时执行类型检查与构建。它只读取仓库内容，不需要额外 Secret。
