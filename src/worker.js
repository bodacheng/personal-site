const assetVersion = 'pocket-striker-20261003';
const appAdsTxt = 'google.com, pub-9232931129246316, DIRECT, f08c47fec0942fa0\n';

export default {
  async fetch(request, env) {
    const assetUrl = new URL(request.url);

    if (assetUrl.pathname === '/app-ads.txt') {
      return new Response(request.method === 'HEAD' ? null : appAdsTxt, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }

    assetUrl.searchParams.set('__asset_version', assetVersion);
    const assetResponse = await env.ASSETS.fetch(new Request(assetUrl, request));
    const headers = new Headers(assetResponse.headers);

    if (headers.get('Content-Type')?.includes('text/html')) {
      headers.set('Cache-Control', 'no-store');
    }

    return new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    });
  },
};
