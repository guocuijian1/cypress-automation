export class NewRedisConfigurationPage {
    // 页面标题 locator
    public readonly titleLocator = "header span.title";
    // Redis 名称输入框 locator
    public readonly nameInputLocator = "input[data-testid='redis-name-input']";
    // 保存按钮 locator
    public readonly saveButtonLocator = "button[data-testid='redis_configuration-create-form-submit']";

    // 获取页面标题内容
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
    // 输入名称
    inputName(name: string) {
        cy.get(this.nameInputLocator).clear().type(name);
    }
    // 点击保存按钮
    clickSaveButton() {
        cy.get(this.saveButtonLocator).click();
    }
}

