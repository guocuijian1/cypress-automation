// 导入 Cypress 命令
import './commands';
require('@cypress/grep')();
require('cypress-xpath');

// 忽略未捕获的异常
Cypress.on('uncaught:exception', (err, runnable) => {
  // 返回 false 阻止 Cypress 因未捕获的异常而失败
  return false;
});

// 设置全局超时时间
Cypress.config('defaultCommandTimeout', 10000);

// 在每个测试前执行
beforeEach(() => {
  // 使用 session 来保持登录状态
  cy.session('my-session', () => {
    // 这里可以添加登录逻辑
    cy.log('Session created');
  });
});

// 添加日志设置
Cypress.env('LOG_LEVEL', 'info');
