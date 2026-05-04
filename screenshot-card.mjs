import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// 3x device pixel ratio for high-res
await page.setViewport({ width: 640, height: 900, deviceScaleFactor: 3 });

await page.goto(`file://${join(__dirname, 'screenshot-card.html')}`, { waitUntil: 'networkidle0' });

// Wait for font to load
await page.waitForFunction(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 1000));

// Screenshot just the card element
const card = await page.$('.card');
await card.screenshot({
  path: join(__dirname, 'public', 'ai-readiness-report-card.png'),
  type: 'png',
  omitBackground: false,
});

console.log('Screenshot saved to public/ai-readiness-report-card.png');

// Also a full-page version with dark background
await page.screenshot({
  path: join(__dirname, 'public', 'ai-readiness-report-card-full.png'),
  type: 'png',
  fullPage: false,
});

console.log('Full screenshot saved to public/ai-readiness-report-card-full.png');

await browser.close();
