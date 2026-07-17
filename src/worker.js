import homePage from '../dist/index.html';

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

    return env.ASSETS.fetch(request);
  },
};
