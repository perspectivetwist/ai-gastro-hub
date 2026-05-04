import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: true });

const cards = [
  { html: 'linkedin-card-1.html', out: 'linkedin-report-card-1.png' },
  { html: 'linkedin-card-2.html', out: 'linkedin-report-card-2.png' },
];

for (const { html, out } of cards) {
  const page = await browser.newPage();
  // 1200x1200 at 2x = 2400x2400 output
  await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 3 });
  await page.goto(`file://${join(__dirname, html)}`, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  const outPath = join(__dirname, 'public', out);
  await page.screenshot({ path: outPath, type: 'png', fullPage: false });
  console.log(`Saved: ${outPath}`);
  await page.close();
}

await browser.close();
console.log('Done!');
