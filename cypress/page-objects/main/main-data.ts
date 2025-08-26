import { RestService } from '../../services/rest-service';

export class MainData {
  private api: RestService;
  private SERVICE_NAME = 'example_service';

  constructor(baseUrl: string = 'http://localhost:8001') {
    this.api = new RestService(baseUrl);
  }

  prepareData() {
    return this.api.getAllServices().then(response => {
      if (response.body.data?.length > 0) {
        cy.log('Service data already exists, skip preparation.');
        return;
      }
      cy.log('No service data, start preparation...');
      return this.api.createService({
        name: this.SERVICE_NAME,
        url: 'https://httpbin.konghq.com',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).then(() => {
        return this.api.createRoute({
          serviceId: this.SERVICE_NAME,
          paths: ['/mock'],
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          failOnStatusCode: false
        });
      }).then(() => {
        return this.api.createPlugin({
          serviceId: this.SERVICE_NAME,
          name: 'acl',
          config: { allow: 'dev' },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          failOnStatusCode: false
        });
      }).then(() => {
        return this.api.createUpstream({
          name: this.SERVICE_NAME,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          failOnStatusCode: false
        });
      }).then(() => {
        return this.api.addTargetToUpstream({
          upstream: 'example-upstream',
          target: 'httpbun.com:80',
          weight: 100,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          failOnStatusCode: false
        });
      });
    });
  }
}
