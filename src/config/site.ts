export const site = {
  name: 'HOTARU STUDIO',
  legalName: 'HOTARU LIMITED LIABILITY COMPANY',
  title: '独立游戏与应用工作室',
  description:
    'HOTARU STUDIO 是位于东京的独立开发工作室，分别开发游戏与实用应用，并为每项产品建立独立的体验与设计体系。',
  url: 'https://personal-site.hotaru-studio.workers.dev',
  contactEmail: 'mugencombat34@gmail.com',
  gameSupportEmail: 'mugencombat34@gmail.com',
  headClash: {
    name: '飞头大战',
    englishName: 'Head Clash',
    description:
      '先选择走位，再同时弹射角色的头部。利用石柱与边墙反弹，绕开颈部防守，击中对手身体，赢下同步回合制物理对决。',
    path: '/projects/head-clash/',
    privacyPath: '/privacy/head-clash/',
    status: 'iOS 已上架',
    iosUrl: 'https://apps.apple.com/jp/app/id6811320553',
  },
  game: {
    name: '魔晶闘士-無限格闘戦争',
    shortName: 'GEM WARRIOR',
    description:
      '组合技能宝石，打造专属战斗风格，在真实物理驱动的爽快战斗与竞技场 PvP 中击飞对手。现已登陆 iOS 与 Android。',
    iosUrl:
      'https://apps.apple.com/jp/app/%E9%AD%94%E6%99%B6%E9%97%98%E5%A3%AB-%E7%84%A1%E9%99%90%E6%A0%BC%E9%97%98%E6%88%A6%E4%BA%89/id1640836926',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.MCombat.BO',
    path: '/projects/gem-warrior/',
    privacyPath: '/privacy/gem-warrior/',
    features: [
      {
        number: '01',
        title: '自由构筑战斗风格',
        text: '组合不同距离、属性与效果的技能宝石，为每位斗士配置专属连招。',
      },
      {
        number: '02',
        title: '简单操作，深度策略',
        text: '技能分配与释放时机决定胜负；轻松上手，也值得反复钻研。',
      },
      {
        number: '03',
        title: '真实物理爽快碰撞',
        text: '每一次冲击、击飞与场景互动都由物理系统驱动，打击感更直接。',
      },
      {
        number: '04',
        title: '多样舞台与挑战',
        text: '面对不同敌人、机关与首领，在不断变化的战场中调整阵容。',
      },
      {
        number: '05',
        title: '竞技场 PvP',
        text: '用反应与战术挑战其他玩家，在高强度对决中检验你的构筑。',
      },
    ],
  },
  pocketStriker: {
    name: 'Pocket Striker',
    path: '/projects/pocket-striker/',
    privacyPath: '/privacy/pocket-striker/',
  },
  fxtrade: {
    name: 'USD/JPY Advice',
    projectName: 'FXTrade',
    description:
      '把实时 USD/JPY 行情、技术指标、持仓与保证金条件整理到一个界面，并以 AI 分析提供结构化的交易决策参考。',
    path: '/projects/fxtrade/',
    privacyPath: '/privacy/fxtrade/',
  },
} as const;
