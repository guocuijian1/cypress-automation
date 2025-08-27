// 文件路径：cypress/page-objects/workspace/routes/service-combobox-page.ts

export class ServiceComboBoxPage {
    // 服务选择下拉框定位器（combobox）
    comboBoxLocator: string = 'input[data-testid="route-form-service-id"]';

    getOptionLocator(serviceName: string): string {
        return `//div[@class='route-form-service-dropdown-item']//span[text()='${serviceName}']`;
    }

    /**
     * 选择服务（通过 combobox）
     * @param serviceName 服务名称
     */
    selectService(serviceName: string): void {
        cy.get(this.comboBoxLocator).click();
        cy.xpath(this.getOptionLocator(serviceName)).then(($els: JQuery<HTMLElement>) => {
            cy.log(`Service options found: ${$els.length}`);
            cy.wrap($els).first().click();
        });
    }
}
