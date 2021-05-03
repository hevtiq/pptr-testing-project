const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// config
const config = require('../lib/config');

// helpers
const click = require('../lib/helpers').click;
const typeText = require('../lib/helpers').typeText;
const loadUrl = require('../lib/helpers').loadUrl;
const waitForText = require('../lib/helpers').waitForText;
const pressKey = require('../lib/helpers').pressKey;
const shouldExist = require('../lib/helpers').shouldExist;

// utils
const utils = require('../lib/utils');

describe('My first puppeteer test', () => {
    let browser;
    let page;

    before(async function () {
        browser = await puppeteer.launch({
            headless: config.isHeadless,
            slowMo: config.slowMo,
            devtools: config.isDevtools,
            timeout: config.launchTimeout,
        });

        page = await browser.newPage();
        await page.setDefaultTimeout(config.waitingTimeout);
        await page.setViewport({
            width: config.viewportWidth,
            height: config.viewportHeight,
        });
    });

    after(async function() {
        await browser.close();
    });

    it('My first test step', async () => {
        await loadUrl(page, config.baseUrl);
        await shouldExist(page, '#header-search');

        const url = await page.url();
        const title = await page.title();

        expect(url).to.contain('dev');
        expect(title).to.contains('Community');
    });

    it('browser reload', async () => {
        await page.reload();
        await shouldExist(page, '#page-content');

        await waitForText(page, 'body', 'Create account');

        const url = await page.url();
        const title = await page.title();

        expect(url).to.contain('dev');
        expect(title).to.contains('Community');
    });

    it('click method', async () => {
        await loadUrl(page, config.baseUrl);
        await click(page, "a[href='/enter']");
        await shouldExist(page, '#page-content-inner');
    });

    it('submit search box', async () => {
        await loadUrl(page, config.baseUrl);
        await typeText(page, utils.generateID(2), '.crayons-header--search-input');
        await typeText(page, utils.generateNumbers(), '.crayons-header--search-input');
        await typeText(page, utils.generateEmail(), '.crayons-header--search-input');
        await page.waitForTimeout(3000);
        await pressKey(page, "Enter");
        await shouldExist(page, '#articles-list');
    });
});