import { site } from '../config/site';

export const prerender = true;

const routes = [
  '/',
  site.game.path,
  site.fxtrade.path,
  '/privacy/',
  site.game.privacyPath,
  site.fxtrade.privacyPath,
];

export function GET() {
  const urls = routes.map((route, index) => `  <url>
    <loc>${new URL(route, site.url)}</loc>
    <changefreq>${index === 0 ? 'monthly' : 'yearly'}</changefreq>
    <priority>${index === 0 ? '1.0' : index < 3 ? '0.8' : '0.5'}</priority>
  </url>`).join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
