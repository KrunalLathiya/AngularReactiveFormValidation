import { Ng4validationPage } from './app.po';

describe('ng4validation App', () => {
  let page: Ng4validationPage;

  beforeEach(() => {
    page = new Ng4validationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
