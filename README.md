# Cypress Project Usage & Automated Testing Guide

---

## 1. GitHub Actions Automated Testing

1. **Manually Run GitHub Actions**
   - Log in to your GitHub repository page.
   - Click the **Actions** tab at the top.
   - Find the `Cypress E2E Tests` workflow in the left sidebar.
   - Click the **Run workflow** button, select the branch, and manually trigger the workflow.

2. **Workflow Execution Steps**
   - Automatically pulls code and installs Node.js and dependencies.
   - Installs Docker Compose and starts the test environment.
   - Runs all Cypress E2E tests.
   - Merges and generates test reports.
   - Uploads the complete report folder (`cypress/reports`) as an artifact.

3. **Get Test Reports**
   - After the workflow finishes, go to the workflow run details page.
   - At the bottom, find the **Artifacts** section.
   - Download the `cypress-reports` archive.
   - Unzip to get all test reports, including:
     - `merged.html`: Full visual test report, viewable in your browser.
     - `merged.json`: Merged JSON file of all test results.
     - `mochawesome` folder: Original sub-reports.
     - `assets` folder: Static resources for the report.

4. **Notes**
   - If the test environment or dependencies fail to install, check the workflow logs to ensure Docker, Node.js, and npm are working correctly.
   - Report files are only generated and uploaded after the workflow completes.
   - To customize tests or report content, modify the relevant configuration files in the project.

5. **References**
   - [Cypress Documentation](https://docs.cypress.io/)
   - [Mochawesome Documentation](https://github.com/mochawesome/mochawesome)
   - [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 2. Local Project Environment & Testing

1. **Environment Preparation**
   - Install Node.js (recommended 18.8 or above, local test version is 24).
   - Install Docker and docker-compose.
   - Run `npm install` in the project root directory to install dependencies.

2. **Start/Reset Test Environment (Docker)**
   - Start: Go to the `cypress/docker` directory and run `docker-compose up -d`.
   - Reset:
     - Windows: Run `restart-docker.bat`
     - Linux/Mac: Run `restart-docker.sh`

3. **Run Local Tests**
   - Run all E2E tests:
     ```bash
     npx cypress run --spec "cypress/e2e/**/*.cy.ts"
     ```
   - Interactive debug mode:
     ```bash
     npx cypress open
     ```
   - Test results will be output in the terminal and detailed reports can be found in the `cypress/reports` directory.

4. **Other Notes**
   - For questions, please contact the project maintainer or refer to the main README.md.

