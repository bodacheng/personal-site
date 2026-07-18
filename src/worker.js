const assetVersion = 'studio-20260718-separated';

export default {
  async fetch(request, env) {
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
