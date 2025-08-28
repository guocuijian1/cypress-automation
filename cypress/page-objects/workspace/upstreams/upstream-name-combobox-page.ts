export class UpstreamNameComboBoxPage {
    // Upstream name dropdown locator
    public readonly comboBoxLocator = "input[data-testid='upstreams-form-name']";

    /**
     * Get the xpath locator for the option with the specified name
     * @param name The name of the upstream option
     */
    getOptionLocator(name: string): string {
        return `//div[@class='select-item-container']//span[text()='${name}']`;
    }

    /**
     * Select the option with the specified name from the dropdown
     * @param optionText The name of the option to select
     */
    selectOption(optionText: string) {
        cy.get(this.comboBoxLocator).click();
        cy.xpath(this.getOptionLocator(optionText)).first().click();
    }
}
