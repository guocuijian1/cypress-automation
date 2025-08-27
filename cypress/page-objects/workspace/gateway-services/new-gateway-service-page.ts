// 新建网关服务页面对象
export class NewGatewayServicePage {
    titleLocator = "header span.title";
    // 单选按钮定位器
    fullUrlRadio = 'label[data-testid="gateway-service-url-radio-label"]';
    protocolHostPortPathRadio = "input[type='radio'][value='protocolHostPortPath']";

    // 输入框定位器
    fullUrlInput = "input[name='url']";
    nameInput = "input[name='name']";

    // 按钮定位器
    cancelButton = "button:contains('Cancel')";
    saveButton = "button:contains('Save')";

    // 操作方法
    selectFullUrlRadio() {
        cy.get(this.fullUrlRadio).click();
    }
    selectProtocolHostPortPathRadio() {
        cy.get(this.protocolHostPortPathRadio).check();
    }
    inputFullUrl(url: string) {
        cy.get(this.fullUrlInput).clear().type(url);
    }
    inputName(name: string) {
        cy.get(this.nameInput).clear().type(name);
    }
    clickCancel() {
        cy.get(this.cancelButton).click();
    }
    clickSave() {
        cy.get(this.saveButton).click();
    }
    isFullUrlRadioChecked(): Cypress.Chainable<boolean> {
        return cy.get(this.fullUrlRadio).then($el => $el.prop('checked'));
    }
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
}
