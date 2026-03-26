import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// OG Image: 1200x630 at 2x for high-res
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

await page.goto(`file://${join(__dirname, 'screenshot-og.html')}`, { waitUntil: 'networkidle0' });
await page.waitForFunction(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 1000));

await page.screenshot({
  path: join(__dirname, 'public', 'og-ai-readiness-report-2026.png'),
  type: 'png',
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

console.log('OG Image saved to public/og-ai-readiness-report-2026.png');
await browser.close();
