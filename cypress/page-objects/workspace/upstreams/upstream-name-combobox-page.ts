export class UpstreamNameComboBoxPage {
    // upstream 名称下拉框 locator
    public readonly comboBoxLocator = "input[data-testid='upstreams-form-name']";

    getOptionLocator(name: string): string {
        return `//div[@class='select-item-container']//span[text()='${name}']`;
    }

    // 选择指定名称的选项
    selectOption(optionText: string) {
        cy.get(this.comboBoxLocator).click();
        cy.xpath(this.getOptionLocator(optionText)).first().click();
    }
}
