import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const serverDirectory = join(process.cwd(), 'dist', 'server');
const workerEntry = `export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response('Static asset binding is unavailable.', { status: 503 });
    }

    return env.ASSETS.fetch(request);
  },
};
`;

await mkdir(serverDirectory, { recursive: true });
await writeFile(join(serverDirectory, 'index.js'), workerEntry, 'utf8');
