const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Navigate the page to a URL
  await page.goto('https://nohu99.org/', { waitUntil: 'networkidle0' });

  const links = await page.$$eval('a', collection => collection.map(ele => ele.href));
  console.log(links);
  console.log('--------ok------------');

  await browser.close();
}) ();