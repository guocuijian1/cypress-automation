export class ServiceComboBoxPage {
    // Service selection combobox locator
    comboBoxLocator: string = 'input[data-testid="route-form-service-id"]';

    getOptionLocator(serviceName: string): string {
        return `//div[@class='route-form-service-dropdown-item']//span[text()='${serviceName}']`;
    }

    /**
     * Select a service via combobox
     * @param serviceName Service name
     */
    selectService(serviceName: string): void {
        cy.get(this.comboBoxLocator).click();
        cy.xpath(this.getOptionLocator(serviceName)).then(($els: JQuery<HTMLElement>) => {
            cy.log(`Service options found: ${$els.length}`);
            cy.wrap($els).first().click();
        });
    }
}
