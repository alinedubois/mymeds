const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/alinedubois');
    await page.screenshot({path: 'screen.png'});

    await browser.close();
})();
