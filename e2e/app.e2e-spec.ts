import { FrontTestGoPage } from './app.po';

describe('front-test-go App', () => {
  let page: FrontTestGoPage;

  beforeEach(() => {
    page = new FrontTestGoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
