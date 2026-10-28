import { site } from '../config/site';
import { localizedPath, locales } from '../i18n';

export const prerender = true;

const routes = [
  '/',
  site.headClash.path,
  site.game.path,
  site.pocketStriker.path,
  site.fxtrade.path,
  '/privacy/',
  site.headClash.privacyPath,
  site.game.privacyPath,
  site.pocketStriker.privacyPath,
  site.fxtrade.privacyPath,
];

export function GET() {
  const urls = routes.flatMap((route, index) => locales.map((locale) => `  <url>
    <loc>${new URL(localizedPath(route, locale), site.url)}</loc>
    <changefreq>${index === 0 ? 'monthly' : 'yearly'}</changefreq>
    <priority>${index === 0 ? '1.0' : route.startsWith('/projects/') ? '0.8' : '0.5'}</priority>
  </url>`)).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
