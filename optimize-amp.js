import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { optimizer } from '@ampproject/toolbox-optimizer';

async function optimizeAmp() {
  const html = readFileSync(join('dist', 'index.html'), 'utf8');
  const optimizedHtml = await optimizer.transformHtml(html);
  writeFileSync(join('dist', 'index.html'), optimizedHtml);
}

optimizeAmp().catch(console.error);