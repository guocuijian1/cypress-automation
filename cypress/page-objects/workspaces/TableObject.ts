export class TableObject {
    private readonly columnsLocator = 'div.table-container table thead tr th span.table-header-label';
    private readonly rowsLocator = 'div.table-container table > tbody > tr';

    // 获取所有列（表头 th 元素文本）
    getAllColumns(): Cypress.Chainable<string[]> {
        return cy.get(this.columnsLocator).then($spans => {
            return Cypress._.map($spans, span => span.textContent?.trim() ?? '');
        });
    }
    // 获取表格总行数
    getRowNumber(): Cypress.Chainable<number> {
        // 使用 rowsLocator 获取所有行，返回行数
        return cy.get(this.rowsLocator).its('length');
    }
    // 获取指定行的所有单元格内容
    getRow(rowIndex: number): Cypress.Chainable<string[]> {
        // 使用 rowsLocator 获取所有行，然后选中指定行，获取该行所有 td 的文本内容
        return cy.get(this.rowsLocator).eq(rowIndex).find('td').then($cells => {
            return Cypress._.map($cells, cell => cell.textContent?.trim() ?? '');
        });
    }
}
