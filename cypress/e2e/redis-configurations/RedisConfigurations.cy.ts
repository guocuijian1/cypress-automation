import { RedisConfigurationsPage } from "../../page-objects/workspace/redis-configurations/redis-configurations-page";
import { NewRedisConfigurationPage } from "../../page-objects/workspace/redis-configurations/new-redis-configuration-page";
import { RedisConfigurationDetailPage } from "../../page-objects/workspace/redis-configurations/redis-configuration-detail-page";

describe('Redis Configurations functions', () => {
    const redisConfigPage = new RedisConfigurationsPage();
    const newRedisConfigPage = new NewRedisConfigurationPage();
    const detailPage = new RedisConfigurationDetailPage();

    beforeEach(() => {
        redisConfigPage.navigateToPage();
        redisConfigPage.getTitleContent().then(title => {
            expect(title.trim()).eq('Redis Configurations');
        });
    });

    it('should create a redis configuration and then verify the id in detail page', () => {
        redisConfigPage.clickNewRedisConfigButton();
        newRedisConfigPage.getTitleContent().then(title => {
            expect(title.trim()).to.eq('New Redis Configuration');
        })

        // Input configuration content
        const name = `redis-test-${Date.now()}`;
        newRedisConfigPage.inputName(name);
        newRedisConfigPage.clickSaveButton();

        // After jumping to the detail page, assert that the ID exists and is not empty
        detailPage.getIdValue().should('not.be.empty');
    });
});
