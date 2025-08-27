export class NewPage {
    // 页面标题定位器
    titleLocator: string = 'header span.title';

    /**
     * 全局单选按钮定位器：label 元素，子 input[type=radio]，label 文本为 Global
     */
    globalRadioLocator: string = 'label:has(input[type="radio"]):contains("Global")';

    /**
     * 保存按钮定位器
     */
    saveButtonLocator: string = 'button[data-testid="plugin-create-form-submit"]';

    /**
     * 获取详情页标题内容
     */
    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    /**
     * 点击全局单选按钮（label，文本为 Global，子 input[type=radio]）
     */
    clickGlobalRadio(): void {
        cy.get(this.globalRadioLocator).click();
    }

    /**
     * 点击保存按钮
     */
    clickSaveButton(): void {
        cy.get(this.saveButtonLocator).click();
    }
}
