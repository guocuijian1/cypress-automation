import { UpstreamNameComboBoxPage } from "./upstream-name-combobox-page";

export class NewUpstreamPage {
    // 页面标题 locator
    public readonly titleLocator = "header span.title";
    // upstream 名称输入框 locator
    public readonly nameInputLocator = "input[data-testid='upstream-name-input']";
    // 保存按钮 locator
    public readonly saveButtonLocator = "button[data-testid='upstream-create-form-submit']";

    // 获取页面标题内容
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
    // 输入 upstream 名称
    inputName(name: string) {
        const comboBox = new UpstreamNameComboBoxPage();
        comboBox.selectOption(name);
    }
    // 点击保存按钮
    clickSaveButton() {
        cy.get(this.saveButtonLocator).click();
    }
}
