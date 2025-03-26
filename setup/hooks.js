const playwright = require('playwright');
const { BeforeAll, Before, After, AfterAll, Status, setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor({ parameters }) {
        this.page = null;
        this.context = null;
        this.attach = function (text) { console.log(text) }; // Critical for reporting
    }
}

setWorldConstructor(CustomWorld);

// Global setup
BeforeAll(async function () {
    console.log('Launching browser...');
    global.browser = await playwright.chromium.launch({
        headless: false,
        slowMo: 100,
        args: ["--start-maximized"],
        channel: 'chrome'
    });
});

// Scenario setup
Before(async function () {
    console.log('Creating new context...');
    this.context = await global.browser.newContext({
        viewport: null,
        screen: { width: 1920, height: 1080 }
    });
    this.page = await this.context.newPage();
    
    // Initialize common locators if needed
    if (typeof this.commonlocator === 'undefined') {
        const CommonLocator = require('../page-objects/commonlocator');
        this.commonlocator = new CommonLocator(this.page);
    }
});

// Scenario teardown
After(async function (scenario) {
    console.log('Tearing down scenario...');
    
    // Capture screenshot if failed
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({
            path: `reports/${scenario.pickle.name}.png`,
            fullPage: true
        });
        this.attach(screenshot, 'image/png');
    }
    
    // Cleanup resources
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
});

// Global teardown
AfterAll(async function () {
    console.log('Closing browser...');
    if (global.browser) await global.browser.close();
});