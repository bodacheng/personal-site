export type Link = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status?: string;
};

export const site = {
  // TODO：确认姓名、邮箱、GitHub 用户名和自定义域名后替换这些字段。
  name: '你的名字',
  initials: 'YN',
  title: '独立创作者与开发者',
  description: '专注于把复杂问题变成清晰、可靠、好用的数字产品。',
  url: 'https://example.com',
  email: 'hello@example.com',
  location: 'Asia / Tokyo',
  availability: '开放合作',
  hero: {
    eyebrow: 'DESIGN · ENGINEERING · CRAFT',
    headline: '把想法做成\n清晰而有生命力的产品。',
    intro:
      '我关注产品、设计与工程之间的连接。从第一张草图到稳定上线，持续把不确定性变成可以被使用的东西。',
  },
  about: [
    '这里将放你的个人简介：你是谁、正在做什么，以及你最看重的工作方式。两到三句话就足够让第一次访问的人认识你。',
    '网站采用 Astro 构建，并通过 GitHub 与 Cloudflare Workers 自动发布；页面默认几乎不向浏览器发送 JavaScript。',
  ],
  principles: [
    {
      number: '01',
      title: '从问题出发',
      text: '先理解真正要解决的问题，再选择恰当的技术与表达。',
    },
    {
      number: '02',
      title: '保持简单',
      text: '删掉不必要的层次，让每一个决定都能被解释和维护。',
    },
    {
      number: '03',
      title: '持续交付',
      text: '用短反馈循环推进，让成果尽早进入真实世界。',
    },
  ],
  // TODO：用 2–6 个真实项目替换示例；没有公开项目时也可以留空。
  projects: [
    {
      title: '代表项目一',
      description: '用一两句话说明项目解决的问题、你的角色，以及最终产生的价值。',
      tags: ['Product', 'Design', 'Engineering'],
      status: '待补充',
    },
    {
      title: '代表项目二',
      description: '可以链接到 GitHub、线上产品、案例文章，或用一个简短故事介绍过程。',
      tags: ['Astro', 'Cloudflare'],
      status: '待补充',
    },
  ] satisfies Project[],
  links: [
    { label: 'GitHub', href: 'https://github.com/' },
  ] satisfies Link[],
} as const;
