import { ConsumersPage } from '../../page-objects/workspace/consumers/consumers-page';
import { NewConsumerPage } from '../../page-objects/workspace/consumers/new-consumer-page';
import {ConsumerDetailPage} from "../../page-objects/workspace/consumers/consumer-detail-page";

describe('Consumers functions', () => {
  const consumersPage = new ConsumersPage();
  const newConsumerPage = new NewConsumerPage();
  const consumerDetailPage = new ConsumerDetailPage();

  beforeEach(() => {
    consumersPage.navigateToPage();
    // Assert that the title contains 'Consumers'
    consumersPage.getTitleText().should('contain', 'Consumers');
  });

  it('should add a new consumer', () => {
    consumersPage.clickNewConsumerButton();
    // Assert that the title contains 'New Consumer'
    newConsumerPage.getTitleContent().should('contain', 'New Consumer');
    const username = `user_${Date.now()}`;
    const customId = `custom_${Date.now()}`;
    const tags = 'test,auto';
    newConsumerPage.inputUsername(username);
    newConsumerPage.inputCustomId(customId);
    newConsumerPage.inputTags(tags);
    newConsumerPage.clickSaveButton();
    // Assert that the title equals username
    consumerDetailPage.getTitleText().should('eq',username);
  });
});
