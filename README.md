# Cypress Project 使用说明

## 环境准备

1. **安装 Node.js**
   - 推荐使用 Node.js 18 及以上版本。
   - 可通过 [Node.js 官网](https://nodejs.org/) 下载并安装。

2. **安装 Docker 和 docker-compose**
   - 请确保本机已安装 Docker 和 docker-compose。
   - 可参考 [Docker 官方文档](https://docs.docker.com/get-docker/) 和 [docker-compose 官方文档](https://docs.docker.com/compose/install/) 进行安装。

3. **安装依赖包**
   - 在项目根目录下执行：
     ```bash
     npm install
     ```
   - 该命令会自动安装所有 package.json 中声明的依赖。

## 启动/重置测试环境（Docker）

1. **启动测试环境**
   - 当所有前置条件（Node.js、npm、Docker、docker-compose）都已安装并配置好后，进入cypress/docker目录，执行：
     ```bash
     docker-compose up -d
     ```
   - 该命令会在后台启动所有测试相关的 Docker 服务。

2. **重置测试环境**
   - 如果需要重置（清理并重启）测试环境，进入项目根目录，根据你的操作系统选择对应命令：
     - **Windows** 用户，进入cypress\docker目录，请运行：
       ```bat
       restart-docker.bat
       ```
     - **Linux/macOS**，进入cypress/docker，请运行：
       ```bash
       sh restart-docker.sh
       ```
   - 该脚本会先关闭所有容器并清理数据卷，然后重新启动所有服务。

## 运行 E2E 测试用例

1. 进入项目根目录。
2. 执行以下命令运行 e2e 文件夹下所有 Cypress 测试用例：
   ```bash
   npx cypress run --spec "cypress/e2e/**/*.cy.ts"
   ```
   - 该命令会自动查找并运行所有 e2e 目录下的测试用例。
   - 测试结果会在命令行输出，并可在 `cypress/reports` 目录下查看详细报告。

## 查看测试报告

- 测试运行后，报告文件会自动生成在 `cypress/reports` 目录下。
- 你可以直接用浏览器打开如 `mochawesome.html` 或 `mochawesome_001.html` 等文件，查看详细的测试结果、断言详情和失败截图。
- 如果有多个报告文件，可根据时间或编号选择最新的报告。
- 更多 Cypress 报告和使用说明可参考 [Cypress 官方文档](https://docs.cypress.io/guides/dashboard/introduction).

## 其他说明

- 如需运行 service-test 目录下的 API 测试用例，可执行：
  ```bash
  npx cypress run --spec "cypress/service-test/**/*.cy.ts"
  ```
- 如需在可视化模式下调试测试用例，可执行：
  ```bash
  npx cypress open
  ```

---

如遇依赖安装或环境启动问题，请优先检查 Node.js、npm、Docker、docker-compose 是否已正确安装和配置。

如需更多帮助，请查阅本 README.md 文件或项目内相关文档，或联系项目维护者。
