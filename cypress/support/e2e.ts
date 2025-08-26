// 导入 Cypress 命令
import './commands';
require('@cypress/grep')();

// 在测试开始前根据标签过滤测试用例
before(function () {
  const targetTag = Cypress.env('grep');
  if (!targetTag) return;

  const currentTest = Cypress.currentTest;
  if (currentTest && currentTest.tags) {
    const testTags = Array.isArray(currentTest.tags) ? currentTest.tags : [currentTest.tags];
    if (!testTags.includes(targetTag)) {
      this.skip();
    }
  }
});

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

// 添加自定义命令类型定义
declare global {
  namespace Cypress {
    interface Chainable {
      // 在这里定义自定义命令的类型
      /**
       * 自定义登录命令
       * @example
       * cy.login('username', 'password')
       */
      login(username: string, password: string): Chainable<void>;

      /**
       * 等待页面加载完成
       * @example
       * cy.waitForPageLoad()
       */
      waitForPageLoad(): Chainable<void>;
    }
  }
}

// 添加日志设置
Cypress.env('LOG_LEVEL', 'info');
