export class NewConsumerPage {
    // 页面标题内容定位器
    titleContentLocator: string = 'header span.title';
    // 用户名输入框定位器
    usernameInputLocator: string = "input[data-testid='consumer-form-username']";
    // Custom ID 输入框定位器
    customIdInputLocator: string = "input[data-testid='consumer-form-custom-id']";
    // Tags 输入框定位器
    tagsInputLocator: string = "input[data-testid='consumer-form-tags']";
    // 保存按钮定位器
    saveButtonLocator: string = "button[data-testid='consumer-create-form-submit']";

    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleContentLocator).invoke('text');
    }

    inputUsername(username: string): void {
        cy.get(this.usernameInputLocator).clear().type(username);
    }

    inputCustomId(customId: string): void {
        cy.get(this.customIdInputLocator).clear().type(customId);
    }

    inputTags(tags: string): void {
        cy.get(this.tagsInputLocator).clear().type(tags);
    }

    clickSaveButton(): void {
        cy.get(this.saveButtonLocator).click();
    }
}
