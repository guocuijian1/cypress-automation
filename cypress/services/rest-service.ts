interface RouteResponse {
    id: string;
    paths: string[];
    created_at: number;
    updated_at: number;
    service: {
        id: string;
    };
}

interface PostRouteOptions {
    serviceId: string;
    paths: string[];
    headers?: { [key: string]: string };
}

class RestService {
    private baseUrl: string;

    constructor(baseUrl: string = 'http://localhost:8001') {
        this.baseUrl = baseUrl;
    }

    /**
     * 创建 Service
     * @param options { name: string; url: string; headers?: { [key: string]: string } }
     * @returns Cypress.Chainable<Cypress.Response<any>>
     */
    createService(options: { name: string; url: string; headers?: { [key: string]: string } }): Cypress.Chainable<Cypress.Response<any>> {
        const { name, url, headers = { 'Content-Type': 'application/x-www-form-urlencoded' } } = options;
        // 构建 body，Kong API 需要表单格式
        const body: any = {
            name,
            url
        };
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/services`,
            body,
            headers
        });
    }

    /**
     * 创建 Route
     * @param options { serviceId: string; paths: string[]; headers?: { [key: string]: string }; failOnStatusCode?: boolean }
     * @returns Cypress.Chainable<Cypress.Response<any>>
     */
    createRoute(options: { serviceId: string; paths: string[]; headers?: { [key: string]: string }; failOnStatusCode?: boolean }): Cypress.Chainable<Cypress.Response<any>> {
        const { serviceId, paths, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }, failOnStatusCode = true } = options;
        // 构建 body，Kong API 需要 paths[] 格式
        const body: any = {};
        if (Array.isArray(paths) && paths.length === 1) {
            body['paths[]'] = paths[0];
        } else {
            body['paths[]'] = paths;
        }
        cy.log(body);

        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/services/${serviceId}/routes`,
            body,
            headers,
            failOnStatusCode
        });
    }

    /**
     * 创建 Plugin
     * @param options { serviceId: string; name: string; config: Record<string, any>; headers?: { [key: string]: string }; failOnStatusCode?: boolean }
     * @returns Cypress.Chainable<Cypress.Response<any>>
     */
    createPlugin(options: { serviceId: string; name: string; config: Record<string, any>; headers?: { [key: string]: string }; failOnStatusCode?: boolean }): Cypress.Chainable<Cypress.Response<any>> {
        const { serviceId, name, config, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }, failOnStatusCode = true } = options;
        // 构建 body，Kong API 需要 name 和 config.key=value 格式
        const body: any = { name };
        Object.entries(config).forEach(([key, value]) => {
            body[`config.${key}`] = value;
        });
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/services/${serviceId}/plugins`,
            body,
            headers,
            failOnStatusCode
        });
    }

    /**
     * 创建 Upstream
     * @param options { name: string; headers?: { [key: string]: string }; failOnStatusCode?: boolean }
     * @returns Cypress.Chainable<Cypress.Response<any>>
     */
    createUpstream(options: { name: string; headers?: { [key: string]: string }; failOnStatusCode?: boolean }): Cypress.Chainable<Cypress.Response<any>> {
        const { name, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }, failOnStatusCode = true } = options;
        const body: any = { name };
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/upstreams`,
            body,
            headers,
            failOnStatusCode
        });
    }

    /**
     * 为 Upstream 添加 Target
     * @param options { upstream: string; target: string; weight?: number; headers?: { [key: string]: string }; failOnStatusCode?: boolean }
     * @returns Cypress.Chainable<Cypress.Response<any>>
     */
    addTargetToUpstream(options: { upstream: string; target: string; weight?: number; headers?: { [key: string]: string }; failOnStatusCode?: boolean }): Cypress.Chainable<Cypress.Response<any>> {
        const { upstream, target, weight, headers = { 'Content-Type': 'application/x-www-form-urlencoded' }, failOnStatusCode = true } = options;
        const body: any = { target };
        if (weight !== undefined) {
            body.weight = weight;
        }
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}/upstreams/${upstream}/targets`,
            body,
            headers,
            failOnStatusCode
        });
    }

    /**
     * 获取所有 Service
     * @param options { headers?: { [key: string]: string }; failOnStatusCode?: boolean }
     * @returns Cypress.Chainable<Cypress.Response<any>>
     */
    getAllServices(options: { headers?: { [key: string]: string }; failOnStatusCode?: boolean } = {}): Cypress.Chainable<Cypress.Response<any>> {
        const { headers = { 'Accept': 'application/json' }, failOnStatusCode = true } = options;
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}/services`,
            headers,
            failOnStatusCode
        });
    }
}

export { RestService, RouteResponse, PostRouteOptions };
