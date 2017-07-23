import { PasappPage } from './app.po';

describe('pasapp App', () => {
  let page: PasappPage;

  beforeEach(() => {
    page = new PasappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
