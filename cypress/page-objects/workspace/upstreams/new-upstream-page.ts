import { UpstreamNameComboBoxPage } from "./upstream-name-combobox-page";

export class NewUpstreamPage {
    // Page title locator
    public readonly titleLocator = "header span.title";
    // Upstream name input locator
    public readonly nameInputLocator = "input[data-testid='upstream-name-input']";
    // Save button locator
    public readonly saveButtonLocator = "button[data-testid='upstream-create-form-submit']";

    // Get page title content
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
    // Input upstream name
    inputName(name: string) {
        const comboBox = new UpstreamNameComboBoxPage();
        comboBox.selectOption(name);
    }
    // Click save button
    clickSaveButton() {
        cy.get(this.saveButtonLocator).click();
    }
}
