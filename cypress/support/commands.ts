// 实现登录命令
Cypress.Commands.add('login', (username: string, password: string) => {
    cy.log(`Logging in as ${username}`);
    // 在这里实现具体的登录逻辑
});

// 实现等待页面加载命令
Cypress.Commands.add('waitForPageLoad', () => {
    // 等待页面加载完成的标志
    cy.document().should('have.property', 'readyState', 'complete');
});

// 检查元素是否可见并包含特定文本
Cypress.Commands.add('shouldBeVisibleWithText',
    { prevSubject: 'element' },
    (subject: JQuery<HTMLElement>, text: string) => {
        cy.wrap(subject).should('be.visible').and('contain', text);
    }
);

// 等待并点击元素
Cypress.Commands.add('waitAndClick', (selector: string) => {
    cy.get(selector).should('be.visible').click();
});

// 清除输入框并输入文本
Cypress.Commands.add('clearAndType', (selector: string, text: string) => {
    cy.get(selector).clear().type(text);
});

// 验证URL是否包含特定路径
Cypress.Commands.add('urlShouldInclude', (path: string) => {
    cy.url().should('include', path);
});

// 等待元素消失
Cypress.Commands.add('waitForElementToDisappear', (selector: string) => {
    cy.get(selector).should('not.exist');
});

// 获取当前日期的格式化字符串
Cypress.Commands.add('getCurrentDate', (format: string = 'YYYY-MM-DD') => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
});

// 随机字符串生成器
Cypress.Commands.add('generateRandomString', (length: number = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
});

// 验证表单字段必填提示
Cypress.Commands.add('validateRequiredField', (selector: string, errorMessage: string) => {
    cy.get(selector)
        .focus()
        .blur()
        .parent()
        .should('contain', errorMessage);
});
