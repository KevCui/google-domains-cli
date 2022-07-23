#!/usr/bin/env node
// Configuration:
//   export CHROME=<chromium_path>
// Usage:
//   node ./checkGoogleDomains.js <domain> 

const puppeteer = require('puppeteer');

const cPath = process.env.CHROME;
const domain = process.argv[2];
const url = 'https://domains.google/v2/';
const searchInput = '.hero__search-input';
const submitButton = '.hero__search-submit';
const domainList = '.mat-mdc-select-min-line'; 

if (cPath === undefined) {
  console.log('Chrome/Chromium path is not defined! To fix it, run:\n  export CHROME=<chromium_path>');
  process.exit(1);
}

(async() => {
  const browser = await puppeteer.launch({executablePath: cPath, headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768});
  await page.goto(url, {timeout: 15000, waitUntil: 'domcontentloaded'});

  await page.waitForSelector(searchInput, {timeout: 10000});
  await page.type(searchInput, domain);
  await page.click(submitButton);
  await page.waitForSelector(domainList, {timeout: 10000});

  const result = await page.evaluate(() => document.querySelector('#mat-tab-content-0-0 > div > related-search-results').innerText);
  const firstLine = result.split('\n')[0];
  if (firstLine === "Information" ) {
    console.log("Registered");
  } else if (firstLine === "Warning") {
    const secondLine = result.split('\n')[1];
    console.log(secondLine);
  } else if (firstLine.includes(" is available")) {
    console.log("Available");
  } else {
    console.log("Unknown");
  }

  await browser.close();
})();
