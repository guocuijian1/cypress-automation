export class NewPageConfiguration {
    /**
     * ID定位器：父div data-testid="id-label"，子span内容为ID
     */
    idLocator: string = 'div[data-testid="id-label"] span:contains("ID")';

    /**
     * 获取ID标签内容（严格筛选内容为ID的span，并返回其文本）
     */
    getIdContent(): Cypress.Chainable<string> {
        return cy.get(this.idLocator).invoke('text');
    }
}
