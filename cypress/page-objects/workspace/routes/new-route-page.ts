// 文件路径：cypress/page-objects/workspace/routes/new-route-page.ts
import { ServiceComboBoxPage } from './service-combobox-page';

export class NewRoutePage {
    titleLocator = "header span.title";
    // 路由名称输入框定位器
    nameInputLocator: string = 'input[data-testid="route-form-name"]';
    // 路由类型单选按钮定位器
    basicRouteRadioLocator: string = 'label[data-testid="route-form-config-type-basic-label"';
    // 路由路径输入框定位器
    pathInputLocator: string = 'input[data-testid="route-form-paths-input-1"';
    // 保存按钮定位器
    saveButtonLocator: string = 'button[data-testid="route-create-form-submit"]';

    inputName(name: string) {
        cy.get(this.nameInputLocator).clear().type(name);
    }

    inputPath(path: string) {
        cy.get(this.pathInputLocator).clear().type(path);
    }

    selectService(serviceName: string) {
        const serviceComboBox = new ServiceComboBoxPage();
        serviceComboBox.selectService(serviceName);
    }

    clickBasicRouteRadio() {
        cy.get(this.basicRouteRadioLocator).click();
    }

    clickSaveButton() {
        cy.get(this.saveButtonLocator).click();
    }

    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
}
