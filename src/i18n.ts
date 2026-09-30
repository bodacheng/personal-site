export const locales = ['zh', 'ja', 'en'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  zh: '中文',
  ja: '日本語',
  en: 'English',
};

export const htmlLanguages: Record<Locale, string> = {
  zh: 'zh-CN',
  ja: 'ja',
  en: 'en',
};

export function localeFromPath(path: string): Locale {
  const segment = path.split('/')[1];
  return segment === 'ja' || segment === 'en' ? segment : 'zh';
}

export function unlocalizedPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const withoutLocale = normalized.replace(/^\/(?:ja|en)(?=\/|$)/, '');
  return withoutLocale || '/';
}

export function localizedPath(path: string, locale: Locale): string {
  const [, pathname = '/', suffix = ''] = path.match(/^([^?#]*)(.*)$/) ?? [];
  const base = unlocalizedPath(pathname || '/');
  const localized = locale === 'zh' ? base : `/${locale}${base}`;
  return localized + suffix;
}

export const commonCopy = {
  zh: {
    siteTitle: '独立游戏与应用工作室',
    siteDescription: 'HOTARU STUDIO 是位于东京的独立开发工作室，分别开发游戏与实用应用，并为每项产品建立独立的体验与设计体系。',
    skip: '跳到主要内容', home: '首页', navigation: '主要导航', games: '游戏', apps: '应用', allWorks: '全部作品', studio: '工作室', privacy: '隐私政策', contact: '联系', top: '返回顶部 ↑', language: '语言',
  },
  ja: {
    siteTitle: 'インディーゲーム・アプリ開発スタジオ',
    siteDescription: 'HOTARU STUDIO は東京を拠点とする独立開発スタジオです。ゲームと実用アプリを、それぞれの目的に合った体験とデザインで制作しています。',
    skip: '本文へ移動', home: 'ホーム', navigation: 'メインナビゲーション', games: 'ゲーム', apps: 'アプリ', allWorks: 'すべての作品', studio: 'スタジオ', privacy: 'プライバシーポリシー', contact: 'お問い合わせ', top: 'ページ上部へ ↑', language: '言語',
  },
  en: {
    siteTitle: 'Independent Games & Apps Studio',
    siteDescription: 'HOTARU STUDIO is an independent development studio in Tokyo, creating games and practical apps with a distinct experience and design for each product.',
    skip: 'Skip to main content', home: 'Home', navigation: 'Main navigation', games: 'Games', apps: 'Apps', allWorks: 'All work', studio: 'Studio', privacy: 'Privacy policy', contact: 'Contact', top: 'Back to top ↑', language: 'Language',
  },
} as const;
