class CommonLocator {
    

    async login(username, password) {
        await this.usernameField().fill(username);
        await this.enterPasswordField().click();
        await this.passwordField().fill(password);
        await this.loginButton().click()
    }

    cookieConsentButton() {
        return 'div.eid-cookie-close-icon > svg';
    }

    usernameField() {
        return 'input[id=eid-username-input]';
    }

    passwordField() {
        return 'input[id=eid-password-input]';
    }

    submitButton() {
        return '.sc-bgqQcB';
    }

    enterPasswordField() {
        return `//span[text()='Enter password']`;
    }

    loginButton() {
        return 'button[type=submit]';
    }

    personaSelectionHeader() {
        return `//h1[text()='Which Persona do you want to login as?']`;
    }

    selectPersona() {
        return `//h4[text()='Ahsan Khan']`;
    }

    navbarToggleButton() {
        return `a.eid-navbar-toggle img`;
    }

    dashboardTitle() {
        return `a[title=Dashboards]`;
    }

    errorMessage() {
        return `.eid-workflow-title`;
    }

    loginPage() {
        return `.login-text`;
    }

    userNameId() {
        return `[id='eid-current-user-name']`;
    }

    logoutText() {
        return `//a[text()='Logout']`;
    }

    navbarTab() {
        return `//span[contains(@class, 'eid-navbar-text') and contains(., 'Identity Administration')]`;
    }

    navbartablocator(){
        return `a[title='People']`;
    }

    resAdminPageLocator(){
        return `//h6[contains(., 'Resource Admin')]`;
    }

    applicationSearchField(){
        return `input[placeholder='Search']`;
    }

    searchResult(){
        return `td:nth-child(2) > div`;
    }

    onboardPersonLink() {
        return `a[title="Onboard Person"]`;
    }

    getButton(text) {
        return `//button[contains(., "${text}")]:visible`;
    }

    firstNameField() {
        return `input[name='FirstName']`;
    }

    lastNameField() {
        return `input[name='LastName']`;
    }

    emailField() {
        return `input[name='Email']`;
    }

    selectRoleAndLocationLink() {
        return `//a[text()='Select a Role and Location']`;
    }

    searchButton() {
        return `//div[contains(@class, 'eid-OrgRoleOrgZoneTree-accordion')]//button[contains(.,'Search')]`;
    }

    searchField() {
        return `.eid-input-group-left-buttons input[placeholder='Enter search']`;
    }

    getItemByText(text) {
        return `//span//span[contains(., "${text}") and contains(@class,'jstree-searchresult')]`;
    }

    browseMenu() {
        return `//span[@data-bind="text: Title" and text()="Browse"]`;
    }

    temporaryRoleLink() {
        return `a[title='Temporary Role']`;
    }

    locationLink() {
        return `//h4//a[contains(., 'Location')]`;
    }

    successMessage(text) {
        return `//li[contains(., "${text}")]`;
    }

    selectButton() {
        return `div.eid-OrgRoleOrgZoneTree-button`;
    }

    nameField() {
        return `input[name='Name']`;
    }

    friendlyNameField() {
        return `input[name='FriendlyName']`;
    }

    descriptionField() {
        return `input[name='Description']`;
    }

    functionTypeField() {
        return `input[name='AzFunctionTypeID-combobox']`;
    }

    riskLevelField() {
        return `input[name='AzRiskLevelID-combobox']`;
    }

    riskResourceSetField() {
        return `input[name='AzRiskResourceSetID-combobox']`;
    }

    selectLocationLink() {
        return `//a[text()='Select a Location']`;
    }

    eidAddButton() {
        return `button.eid-grid-add-button[data-bind*="click: addRow"]:visible`;
    }

    successNotification(text) {
        return `//span[contains (., "${text}")]`;
    }

    locationPanel() {
        return `//a[contains(@class, 'eid-panel-collapse-button eid-icon')]`;
    }

    getLocationItemByText(text) {
        return `//div[contains(@class, 'eid-jstree-outer-div')]//span[contains(text(), '${text}')]`;
    }

    locationTreeSaveButton() {
        return `div.eid-float-right.eid-tree-save > button:visible`;
    }

    saveButtonForEidGrid() {
        return `button[data-bind*="SaveRowCommand"]`;
    }

    globalFunctionSearchField() {
        return `input[data-bind*="Searcher.QueryValue"]`;
    }

    globalFunctionSearchButton() {
        return `button.eid-input-group-button[data-bind*="click: search"]:visible`;
    }

    globalFunctionEditButton() {
        return `td[data-bind*="EidGridColumnEdit"] .eid-grid-edit-button`;
    }

    globalFunctionRemoveButton() {
        return `td[data-bind*="EidGridColumnEdit"] .eid-grid-remove-button`;
    }
}

module.exports = CommonLocator;
