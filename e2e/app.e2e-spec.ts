import { MeanAuthV2Page } from './app.po';

describe('mean-auth-v2 App', () => {
  let page: MeanAuthV2Page;

  beforeEach(() => {
    page = new MeanAuthV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
