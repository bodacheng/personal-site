import homePage from '../dist/index.html';

const assetVersion = 'studio-20260717';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/') {
      return new Response(homePage, {
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': 'text/html; charset=UTF-8',
        },
      });
    }

    const assetUrl = new URL(request.url);
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
