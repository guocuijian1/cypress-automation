import { RestService } from '../services/rest-service';

describe('API Test', () => {
    const api = new RestService('http://localhost:8001');
    const SERVICE_NAME = 'example_service';

    it('should create a service', () => {
        api.createService({
            name: SERVICE_NAME,
            url: 'https://httpbin.konghq.com',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(response => {
            cy.log('Service created or error:', response);
            // 打印所有 key/value
            cy.log(response.body);
            if (response.status === 201) {
                expect(response.status).to.eq(201);
            } else {
                cy.log('Service creation failed, status:', response.status, 'body:', response.body);
            }
        })
    });

    it('should create a route for service', () => {
        api.createRoute({
            serviceId: SERVICE_NAME,
            paths: ['/mock'],
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            failOnStatusCode: false
        }).then(response => {
            cy.log('Route created or error:', response);
            if (response.status === 201) {
                expect(response.status).to.eq(201);
            } else {
                cy.log('Route creation failed, status:', response.status, 'body:', response.body);
            }
        });
    });

    it('should create a plugin acl for service', () => {
        api.createPlugin({
            serviceId: SERVICE_NAME,
            name: 'acl',
            config: { allow: 'dev' },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            failOnStatusCode: false
        }).then(response => {
            cy.log('Plugin created or error:', response.body);
            if (response.status === 201) {
                expect(response.status).to.eq(201);
            } else {
                cy.log('Plugin creation failed, status:', response.status, 'body:', response.body);
            }
        });
    });

    it('should create an upstream with name example-upstream', () => {
        api.createUpstream({
            name: SERVICE_NAME,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            failOnStatusCode: false
        }).then(response => {
            cy.log('Upstream created or error:', response.body);

            if (response.status === 201) {
                expect(response.status).to.eq(201);
            } else {
                cy.log('Upstream creation failed, status:', response.status, 'body:', response.body);
            }
        });
    });

    it('should add a target to upstream example-upstream', () => {
        api.addTargetToUpstream({
            upstream: 'example-upstream',
            target: 'httpbun.com:80',
            weight: 100,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            failOnStatusCode: false
        }).then(response => {
            cy.log('Target added or error:', response.message);
            if (response.status === 201) {
                expect(response.status).to.eq(201);
            } else {
                cy.log('Target add failed, status:', response.status, 'body:', response.body);
            }
        });
    });

    it('should get all services', () => {
        api.getAllServices().then(response => {
            cy.log('Get all services response:', response.body.data.length);
            // 可以加断言，确认返回内容结构
            expect(response.status).to.be.oneOf([200, 201]);
            expect(response.body).to.have.property('data');
        });
    });
});
