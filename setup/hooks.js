
const playwright = require('playwright');
const { BeforeAll, Before, After, AfterAll, Status, setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor({ parameters }) {
        this.page = null;
        this.context = null;
        this.attach = function (text) { console.log(text) };
        this.isApiTest = false; // New flag for API tests
    }
}

setWorldConstructor(CustomWorld);

// Global setup
BeforeAll(async function () {
    // Only launch browser if not an API test
    if (!this.isApiTest) {
        console.log('Launching browser...');
        global.browser = await playwright.chromium.launch({
            headless: false,
            slowMo: 100,
            args: ["--start-maximized"],
            channel: 'chrome'
        });
    }
});

// Scenario setup
Before(async function (scenario) {
    // Check if scenario has @api tag
    this.isApiTest = scenario.pickle.tags.some(tag => tag.name === '@api');
    
    if (!this.isApiTest) {
        console.log('Creating new context...');
        this.context = await global.browser.newContext({
            viewport: null,
            screen: { width: 1920, height: 1080 }
        });
        this.page = await this.context.newPage();
        
        if (typeof this.commonlocator === 'undefined') {
            const CommonLocator = require('../page-objects/commonlocator');
            this.commonlocator = new CommonLocator(this.page);
        }
    }
});

// Scenario teardown
After(async function (scenario) {
    if (!this.isApiTest) {
        console.log('Tearing down scenario...');
        
        if (scenario.result.status === Status.FAILED) {
            const screenshot = await this.page.screenshot({
                path: `reports/${scenario.pickle.name}.png`,
                fullPage: true
            });
            this.attach(screenshot, 'image/png');
        }
        
        if (this.page) await this.page.close();
        if (this.context) await this.context.close();
    }
});

// Global teardown
AfterAll(async function () {
    if (!this.isApiTest && global.browser) {
        console.log('Closing browser...');
        await global.browser.close();
    }
});