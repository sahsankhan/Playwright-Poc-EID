const { Given, When, Then, And } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I visit EmpowerID', async function() {
    try {
        await this.page.goto('https://api.empoweriam.com', { timeout: 100000 });
        await this.page.locator(this.commonlocator.cookieConsentButton()).click();
    } catch (error) {
        console.error('Error visiting EmpowerID:', error);
        throw error;
    }
});


Given('I visit ResAdmin', async function() {
    try {
        await this.page.goto('https://resadmin.azurewebsites.net/applications', { timeout: 100000 });
        await this.page.locator(this.commonlocator.cookieConsentButton()).click();
    } catch (error) {
        console.error('Error visiting resadmin:', error);
        throw error;
    }
    
});


Then('I should see ResAdmin Page', async function() {
    try {
        await expect(this.page.locator(this.commonlocator.resAdminPageLocator())).toBeVisible({ timeout: 10000 });
    } catch (error) {
        console.error('Error verifying resadmin page:', error);
        throw error;
    }
});

When('I click on Application Search field', async function() {
    try {
        await this.page.locator(this.commonlocator.applicationSearchField()).click();
    } catch (error) {
        console.error('Error clicking application search field:', error);
        throw error;
    }
});

When('I fill in Application search field with {string}', async function(text) {
    try {
        await this.page.locator(this.commonlocator.applicationSearchField()).fill(text);
        await this.page.locator(this.commonlocator.applicationSearchField()).press('Enter');
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
    } catch (error) {
        console.error('Error filling application search field:', error);
        throw error;
    }
});

Then('I should see the searched application in results', async function() {
    try {
        await expect(this.page.locator(this.commonlocator.searchResult())).toBeVisible({ timeout: 30000 });
    } catch (error) {
        console.error('Error verifying search result:', error);
        throw error;
    }
});

When('I enter valid username and password on login page', async function() {
    try {
        const user = require('../fixtures/user.json');
        
        // Fill username
        await this.page.locator(this.commonlocator.usernameField()).fill(user.username);
        
        // Press Ctrl+A to select all text
        await this.page.locator(this.commonlocator.usernameField()).press('Control+A');
        
        // Wait for the password field to be enabled
        await this.page.locator(this.commonlocator.enterPasswordField()).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.commonlocator.enterPasswordField()).click();
        // Fill password
        await this.page.locator(this.commonlocator.passwordField()).fill(user.password);
        
        // Press Ctrl+A to select all text
        await this.page.locator(this.commonlocator.passwordField()).press('Control+A');
    } catch (error) {
        console.error('Error entering credentials:', error);
        throw error;
    }
});

When('I press login button', async function() {
    try {
        await this.page.locator(this.commonlocator.loginButton()).click();
        await this.page.locator(this.commonlocator.cookieConsentButton()).click();
    } catch (error) {
        console.error('Error clicking login button:', error);
        throw error;
    }
});

Then("I should see 'Which Persona do you want to login' as on Person selection page", async function() {
    try {
        await expect(this.page.locator(this.commonlocator.personaSelectionHeader())).toBeVisible({ timeout: 10000 });
    } catch (error) {
        console.error('Error verifying persona selection header:', error);
        throw error;
    }
});

When('I click on Ahsan Khan on Person Selection page', async function() {
    try {
        // Click on the persona
        await this.page.locator(this.commonlocator.selectPersona()).click();
        
        // Wait for navigation to complete
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        
        // Add a small buffer time for any dynamic content
        await this.page.waitForTimeout(2000);
        
    } catch (error) {
        console.error('Error selecting persona:', error);
        throw error;
    }
});

When('I click on navbar toggle', async function() {
    try {
        await this.page.locator(this.commonlocator.navbarToggleButton()).click();
    } catch (error) {
        console.error('Error clicking navbar toggle:', error);
        throw error;
    }
});

Then('I should see dashboard tab on navigation bar', async function() {
    try {
        await expect(this.page.locator(this.commonlocator.dashboardTitle())).toBeVisible({ timeout: 10000 });
    } catch (error) {
        console.error('Error verifying dashboard tab:', error);
        throw error;
    }
});

When('I enter invalid username and password on login page', async function() {
    try {
        const user = require('../fixtures/user.json');
        
        // Fill username
        await this.page.locator(this.commonlocator.usernameField()).fill(user.username2);
        
        // Press Ctrl+A to select all text
        await this.page.locator(this.commonlocator.usernameField()).press('Control+A');
        
        // Wait for the password field to be enabled
        await this.page.locator(this.commonlocator.enterPasswordField()).waitFor({ state: 'visible', timeout: 5000 }).click();
        
        // Fill password
        await this.page.locator(this.commonlocator.passwordField()).fill(user.password2);
        
        // Press Ctrl+A to select all text
        await this.page.locator(this.commonlocator.passwordField()).press('Control+A');
    } catch (error) {
        console.error('Error entering invalid credentials:', error);
        throw error;
    }
});

Then('I should see change password screen', async function() {
    try {
        await expect(this.page.locator(this.commonlocator.errormessagelocator())).toHaveText('Change Password');
    } catch (error) {
        console.error('Error verifying change password screen:', error);
        throw error;
    }
});

Then('I should see login screen', async function() {
    try {
        await expect(this.page.locator(this.commonlocator.loginPageLocator())).toHaveText('Login');
    } catch (error) {
        console.error('Error verifying login screen:', error);
        throw error;
    }
});

When('I click on profile button', async function() {
    try {
        await this.page.locator(this.commonlocator.userNameIdLocator()).click();
    } catch (error) {
        console.error('Error clicking profile button:', error);
        throw error;
    }
});

And('I click on logout button', async function() {
    try {
        await this.page.locator(this.commonlocator.logoutTextLocator()).click();
    } catch (error) {
        console.error('Error clicking logout button:', error);
        throw error;
    }
});

// Then('I should see Identity Administration tab on dashboard page', async function() {
//     await this.page.waitForLoadState('networkidle');
//     const tabLocator = this.page.locator(this.commonlocator.navbarTab());
//     await expect(tabLocator).toBeVisible({ timeout: 30000 });
//     console.log(`Successfully verified tab is visible`);
// });

Then('I should see Identity Administration tab on dashboard page', async function() {
    await expect(this.page.locator(this.commonlocator.navbarTab())).toBeVisible();
});


When('I click on Identity Administration tab on dashboard page', async function() {
    await this.page.locator(this.commonlocator.navbarTab()).click();
    await this.page.waitForLoadState('networkidle');
});


// When('I click on Identity Administration tab on dashboard page', async function() {
//     try {
//         // Wait for page to be stable
//         await this.page.waitForLoadState('networkidle');
        
//         // Click the tab
//         const tabLocator = this.page.locator(this.commonlocator.navbarTab());
//         await tabLocator.click();
        
//         // Wait for navigation
//         await this.page.waitForLoadState('networkidle');
        
//         // Log success
//         console.log(`Successfully clicked  tab`);
//     } catch (error) {
//         console.error(`Error clicking tab:`, error);
//         throw error;
//     }
// });


Given('I click on Onboard Person on action panel on Person page', async function() {
    try {
        // Wait for the element to be visible
        await this.page.waitForLoadState('networkidle');
        const onboardLink = this.page.locator(this.commonlocator.onboardPersonLink());
        await expect(onboardLink).toBeVisible({ timeout: 30000 });
        
        // Click the link
        await onboardLink.click();
        
        // Wait for navigation
        await this.page.waitForLoadState('networkidle');
        
        console.log('Successfully clicked Onboard Person link');
    } catch (error) {
        console.error('Error clicking onboard person link:', error);
        throw error;
    }
});

And('I wait {int} seconds', async function(seconds) {
    try {
        console.log(`Waiting for ${seconds} seconds...`);
        await this.page.waitForTimeout(seconds * 1000);
        console.log('Wait completed');
    } catch (error) {
        console.error('Error during wait:', error);
        throw error;
    }
});

And('I press {string} button', async function(text) {
    try {
        await this.page.locator(this.commonlocator.getButton(text)).click();
    } catch (error) {
        console.error(`Error pressing ${text} button:`, error);
        throw error;
    }
});

And('I fill in "Onboard a Person" form with the following data:', async function(dataTable) {
    try {
        const data = dataTable.hashes()[0];

        if (data.FirstName) {
            await this.page.locator(this.commonlocator.firstNameField()).fill(data.FirstName);
        }

        if (data.LastName) {
            await this.page.locator(this.commonlocator.lastNameField()).fill(data.LastName);
        }

        if (data.Email) {
            await this.page.locator(this.commonlocator.emailField()).fill(data.Email);
        }

        if (data.BusinessRole) {
            await this.page.locator(this.commonlocator.selectRoleAndLocationLink()).click();
            await this.page.locator(this.commonlocator.browseMenu()).nth(2).click();
            await this.page.locator(this.commonlocator.searchField()).fill(data.BusinessRole);
            await this.page.locator(this.commonlocator.searchButton()).nth(1).click();
            await this.page.locator(this.commonlocator.getItemByText(data.BusinessRole)).click();
        }

        if (data.Location) {
            await this.page.locator(this.commonlocator.locationLink()).click();
            await this.page.locator(this.commonlocator.browseMenu()).nth(3).click();
            await this.page.locator(this.commonlocator.searchField()).nth(2).fill(data.Location);
            await this.page.locator(this.commonlocator.searchButton()).nth(4).click();
            await this.page.locator(this.commonlocator.getItemByText(data.Location)).click();
        }

        await this.page.locator(this.commonlocator.selectButton()).click();
        await this.page.locator(this.commonlocator.getButton('Next')).click();
    } catch (error) {
        console.error('Error filling onboard person form:', error);
        throw error;
    }
});

Then('I should see {string} success message on Person page', async function(text) {
    try {
        await expect(this.page.locator(this.commonlocator.successMessageLocator(text))).toBeVisible({ timeout: 10000 });
    } catch (error) {
        console.error('Error verifying success message:', error);
        throw error;
    }
});

And("I click on People tab on dashboard page", async function() {
    try {
        await this.page.locator(this.commonlocator.navbartablocator()).click();
    } catch (error) {
        console.error(`Error clicking ${text} tab:`, error);
        throw error;
    }
});

And('I fill in "Global Functions" form with the following data:', async function(dataTable) {
    try {
        const data = dataTable.hashes()[0];

        if (data.Name) {
            await this.page.locator(this.commonlocator.nameLocator()).fill(data.Name);
        }

        if (data.DisplayName) {
            await this.page.locator(this.commonlocator.friendlyNameLocator()).fill(data.DisplayName);
        }

        if (data.Description) {
            await this.page.locator(this.commonlocator.descriptionLocator()).fill(data.Description);
        }

        if (data.FunctionType) {
            await this.page.locator(this.commonlocator.functionTypeLocator()).fill(data.FunctionType);
        }

        if (data.RiskLevel) {
            await this.page.locator(this.commonlocator.riskLevelLocator()).fill(data.RiskLevel);
        }

        if (data.RiskResourceSet) {
            await this.page.locator(this.commonlocator.riskResourceSetLocator()).fill(data.RiskResourceSet);
        }

        if (data.Location) {
            await this.page.locator(this.commonlocator.selectLocationLocator()).click();
            await this.page.locator(this.commonlocator.browse()).nth(1).click();
            await this.page.locator(this.commonlocator.getLocationItemByText(data.Location)).click();
        }
    } catch (error) {
        console.error('Error filling global functions form:', error);
        throw error;
    }
});

And('I click on add button', async function() {
    try {
        await this.page.locator(this.commonlocator.eidAddButtonLocator()).click();
    } catch (error) {
        console.error('Error clicking add button:', error);
        throw error;
    }
});

And('I click on "save" button on "Global Functions" page', async function() {
    try {
        await this.page.locator(this.commonlocator.saveButtonLocatorForEidGrid()).click();
    } catch (error) {
        console.error('Error clicking save button:', error);
        throw error;
    }
});

Then('I should see {string} success message', async function(text) {
    try {
        await expect(this.page.locator(this.commonlocator.successNotificationlocator(text))).toBeVisible({ timeout: 10000 });
    } catch (error) {
        console.error('Error verifying success message:', error);
        throw error;
    }
});

And('I collapse location panel', async function() {
    try {
        await this.page.locator(this.commonlocator.locationPanelLocator()).nth(1).click();
    } catch (error) {
        console.error('Error collapsing location panel:', error);
        throw error;
    }
});

And('I search {string} on "Global Functions" Page', async function(text) {
    try {
        await this.page.locator(this.commonlocator.globalFunctionSearchFieldLocator()).nth(2).fill(text);
        await this.page.locator(this.commonlocator.globalFunctionSearchButtonLocator()).nth(1).click();
    } catch (error) {
        console.error('Error searching global functions:', error);
        throw error;
    }
});

And('I click on {string} button on Global Functions Page', async function(buttonName) {
    try {
        if (buttonName.toLowerCase() === 'edit') {
            await this.page.locator(this.commonlocator.globalFunctionEditButtonLocator()).nth(10).click();
        } else if (buttonName.toLowerCase() === 'delete') {
            await this.page.locator(this.commonlocator.globalFunctionRemoveButtonLocator()).nth(10).click();
        }
    } catch (error) {
        console.error(`Error clicking ${buttonName} button:`, error);
        throw error;
    }
});

And('I edit "Global Functions" form with the following data:', async function(dataTable) {
    try {
        const data = dataTable.hashes()[0];

        if (data.Name) {
            await this.page.locator(this.commonlocator.nameLocator()).fill(data.Name);
        }

        if (data.DisplayName) {
            await this.page.locator(this.commonlocator.friendlyNameLocator()).fill(data.DisplayName);
        }

        if (data.Description) {
            await this.page.locator(this.commonlocator.descriptionLocator()).fill(data.Description);
        }

        if (data.FunctionType) {
            await this.page.locator(this.commonlocator.functionTypeLocator()).fill(data.FunctionType);
        }

        if (data.RiskLevel) {
            await this.page.locator(this.commonlocator.riskLevelLocator()).fill(data.RiskLevel);
        }

        if (data.RiskResourceSet) {
            await this.page.locator(this.commonlocator.riskResourceSetLocator()).fill(data.RiskResourceSet);
        }
    } catch (error) {
        console.error('Error editing global functions form:', error);
        throw error;
    }
});
